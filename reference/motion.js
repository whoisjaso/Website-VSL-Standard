/* Website VSL Standard: reference/motion.js
   VERBATIM excerpts, not a library. Copy into a client build and adapt names.
   (A) MO: springs, iOS rubber band, velocity, flick projection, interruptible Drive.
       Source: the olaceo app's motion module (staging, Oct 25 2026). Unit-tested there
       (rubber monotonic, < d, slope .55 at the edge, unrubber inverts, zeta .85/.70, project(0,1000) ~ 499).
       STATUS: on a staging branch, not on olaceo.com prod at the time of writing.
   (B) spring(k, c) -> CSS linear(): a spring baked into a WAAPI easing so it runs on the compositor.
       Source: the olaceo app's tab navigation (staging).
   (C) VSL no-forward-skip guard. Source: the olaceo.com VSL player (LIVE on prod).
*/

/* ===== (A) ===== */
// Motion: springs only for interactive motion, m x'' = -k x - b x'. Everything retargets from where it
// is AND how fast it is going (x and v carry over), so an interrupt never snaps or restarts from rest.
var MO = (function () {
  // iOS rubber band: f(x) = (1 - 1 / (c x / d + 1)) d, c = .55. Slope c at the edge, rises toward d, never reaches it.
  function rubber(x, d, c) { if (c == null) c = .55; if (!(d > 0) || !x) return 0; var a = Math.abs(x); return (x < 0 ? -1 : 1) * (1 - 1 / (c * a / d + 1)) * d; }
  function unrubber(y, d, c) { if (c == null) c = .55; if (!(d > 0) || !y) return 0; var a = Math.min(Math.abs(y), d * .999); return (y < 0 ? -1 : 1) * a / (c * (1 - a / d)); } // the finger travel behind a stretch
  // iOS presets: response .5 s gives k = (2 pi / .5)^2 = 157.9 (m 1), b = 2 zeta sqrt(k m)
  function preset(resp, zeta) { var k = Math.pow(2 * Math.PI / resp, 2); return { k: k, b: 2 * zeta * Math.sqrt(k), m: 1, zeta: zeta }; }
  var P = { smooth: preset(.5, 1), snappy: preset(.5, .85), bouncy: preset(.5, .7), slide: { k: 200, b: 23, m: 1 }, back: { k: 260, b: 25, m: 1 } };
  function Spring(x, p) { this.x = x; this.v = 0; this.to = x; this.set(p || P.smooth); }
  Spring.prototype.set = function (p) { this.k = p.k; this.b = p.b; this.m = p.m || 1; return this; };
  Spring.prototype.target = function (to, p, v) { this.to = to; if (p) this.set(p); if (v != null) this.v = v; return this; }; // x and v untouched unless a release velocity is handed over
  Spring.prototype.step = function (dt) { // semi-implicit Euler at <= 1/240 s substeps: stable, frame-rate independent
    var n = Math.max(1, Math.ceil(dt * 240)), h = dt / n;
    for (var i = 0; i < n; i++) { var a = (-this.k * (this.x - this.to) - this.b * this.v) / this.m; this.v += a * h; this.x += this.v * h; }
    return this;
  };
  // where a flick comes to rest (iOS scroll deceleration .998 per ms): x + v * r / (1 - r) with v in px/ms
  function project(x, v, r) { r = r || .998; return x + (v / 1000) * r / (1 - r); }
  // finger velocity: least squares over the last 80 ms of samples (px/s)
  function Vel() { this.s = []; }
  Vel.prototype.add = function (t, x) { this.s.push([t, x]); while (this.s.length > 2 && t - this.s[0][0] > 80) this.s.shift(); };
  Vel.prototype.get = function () { var s = this.s, n = s.length; if (n < 2) return 0; var mt = 0, mx = 0, i; for (i = 0; i < n; i++) { mt += s[i][0]; mx += s[i][1]; } mt /= n; mx /= n;
    var num = 0, den = 0; for (i = 0; i < n; i++) { num += (s[i][0] - mt) * (s[i][1] - mx); den += (s[i][0] - mt) * (s[i][0] - mt); } return den ? num / den * 1000 : 0; };
  // a value driven by a spring on rAF. to() retargets mid-flight; hold() is the finger (1:1, the spring lets go).
  function Drive(x, frame, tol) { this.s = new Spring(x); this.frame = frame; this.tol = tol || [.5, 5]; this.raf = 0; this.cb = null; this.last = 0; }
  Drive.prototype.to = function (to, p, v, cb) {
    this.s.target(to, p, v); this.cb = cb || null; if (this.raf) return this;
    var me = this; me.last = 0;
    var tick = function (t) {
      var s = me.s, dt = me.last ? Math.min(.05, (t - me.last) / 1000) : 1 / 60; me.last = t; s.step(dt);
      if (Math.abs(s.x - s.to) < me.tol[0] && Math.abs(s.v) < me.tol[1]) { s.x = s.to; s.v = 0; me.raf = 0; me.frame(s.x, 0); var c = me.cb; me.cb = null; if (c) c(); return; }
      me.frame(s.x, s.v); me.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick); return this;
  };
  Drive.prototype.hold = function (x, v) { this.stop(); this.s.x = x; if (v != null) this.s.v = v; this.frame(x, this.s.v); return this; };
  Drive.prototype.stop = function () { if (this.raf) cancelAnimationFrame(this.raf); this.raf = 0; this.cb = null; return this; };
  Drive.prototype.busy = function () { return !!this.raf; };
  return { rubber: rubber, unrubber: unrubber, preset: preset, P: P, Spring: Spring, project: project, Vel: Vel, Drive: Drive };
})();

/* usage pattern from the same app: press = snappy, release = bouncy (the only bouncy
   spring in the app); drag = hold() 1:1, past an edge = MO.rubber(raw, innerHeight); release = MO.project(pos, vel.get())
   picks the destination, then Drive.to(dest, MO.P.smooth, releaseVelocity) so the spring starts at the finger's speed. */

/* ===== (B) ===== */
var LIN = (function () { try { return CSS.supports('animation-timing-function', 'linear(0, 1)'); } catch (e) { return false; } })();
function spring(k, c) {
  var x = 0, v = 0, dt = 1 / 600, t = 0, pts = [];
  while (t < 2) { var a = -k * (x - 1) - c * v; v += a * dt; x += v * dt; t += dt; pts.push(x); if (t > 0.12 && Math.abs(1 - x) < 0.0015 && Math.abs(v) < 0.02) break; }
  var n = 64, out = []; for (var i = 0; i <= n; i++) out.push((i === n ? 1 : pts[Math.round(i / n * (pts.length - 1))]).toFixed(4));
  return { ms: Math.round(t * 1000), ease: LIN ? 'linear(' + out.join(',') + ')' : 'cubic-bezier(.22,1,.36,1)' };
}
var SP_IND = spring(500, 44.7); // indicator: critically damped spring baked into linear() (64 samples), settles in ~420ms, no overshoot
/* other measured springs in that file: SP_SLIDE = spring(200, 23), SP_BACK = spring(260, 25) (~2% overshoot, "liquid");
   liquid-nav sim: head k 430 c 33, tail k ramps to 330 over 90 ms at zeta .92, drag tail k 950 c 58, substeps 240/s. */

/* ===== (C) ===== */
v.disablePictureInPicture = true; v.setAttribute('disablepictureinpicture', '');
v.disableRemotePlayback = true; v.setAttribute('disableremoteplayback', '');
v.setAttribute('controlsList', 'nodownload noplaybackrate noremoteplayback nofullscreen');
/* ... */
v.addEventListener('timeupdate', function () {
  if (mode !== 'full') return; var c = v.currentTime || 0;
  if (!v.seeking && c > maxW && c - maxW < 1.5) maxW = c; // natural playback only extends maxWatched
  if (!drag) paint(); var D = dur(); if (!D) return; var p = c / D * 100;
  [25, 50, 75].forEach(function (m) { if (p >= m && !hit[m]) { hit[m] = 1; track('VideoView' + m, { video: id }); } });
});
v.addEventListener('seeking', function () { if (mode === 'full' && v.currentTime > maxW + 0.3) v.currentTime = maxW; }); // snap back any forward seek
v.addEventListener('ratechange', function () { if (v.playbackRate !== 1) v.playbackRate = 1; });
v.addEventListener('webkitbeginfullscreen', function () { try { v.webkitExitFullscreen(); } catch (e) {} }); // iOS: stay inline
