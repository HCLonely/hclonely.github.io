"use strict";

function debounce(i, o, a) {
  var r;
  return function () {
    var t = this,
        n = arguments,
        e = a && !r;
    clearTimeout(r), r = setTimeout(function () {
      r = null, a || i.apply(t, n);
    }, o), e && i.apply(t, n);
  };
}

function throttle(e, i, o) {
  var a,
      r,
      d,
      l = 0;
  o = o || {};

  function c() {
    l = !1 === o.leading ? 0 : new Date().getTime(), a = null, e.apply(r, d), a || (r = d = null);
  }

  return function () {
    var t = new Date().getTime();
    l || !1 !== o.leading || (l = t);
    var n = i - (t - l);
    r = this, d = arguments, n <= 0 || i < n ? (a && (clearTimeout(a), a = null), l = t, e.apply(r, d), a || (r = d = null)) : a || !1 === o.trailing || (a = setTimeout(c, n));
  };
}

function sidebarPaddingR() {
  var t = window.innerWidth,
      n = document.body.clientWidth,
      e = t - n;
  t !== n && $("body").css("padding-right", e);
}

function isIpad() {
  return "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints;
}

function isTMobile() {
  var t = navigator.userAgent;
  return window.screen.width < 992 && /iPad|iPhone|iPod|Android|Opera Mini|BlackBerry|webOS|UCWEB|Blazer|PSP|IEMobile|Symbian/g.test(t);
}

function isMobile() {
  return this.isIpad() || this.isTMobile();
}

function isDesktop() {
  return !this.isMobile();
}

function scrollTo(t) {
  var n = $(t).offset();
  $("body,html").animate({
    scrollTop: n.top
  });
}

function loadScript(t, n) {
  var e = document.createElement("script");
  e.type = "text/javascript", e.readyState ? e.onreadystatechange = function () {
    "loaded" !== e.readyState && "complete" !== e.readyState || (e.onreadystatechange = null, n());
  } : e.onload = function () {
    n();
  }, e.src = t, document.body.appendChild(e);
}

function snackbarShow(t, n, e) {
  var i = void 0 !== n && n,
      o = void 0 !== e ? e : 2e3,
      a = GLOBAL_CONFIG.Snackbar.position,
      r = "light" === document.documentElement.getAttribute("data-theme") ? GLOBAL_CONFIG.Snackbar.bgLight : GLOBAL_CONFIG.Snackbar.bgDark;
  Snackbar.show({
    text: t,
    backgroundColor: r,
    showAction: i,
    duration: o,
    pos: a
  });
}

window.debounce = debounce, window.throttle = throttle, window.isMobile = isMobile, window.loadScript = loadScript;