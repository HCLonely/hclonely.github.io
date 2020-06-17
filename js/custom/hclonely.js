jQuery(document).ready(function () {
  function d () { document.title = document[b] ? '(つェ⊂)看不见我看不见我' : a }
  let b; let c; const a = document.title; typeof document.hidden !== 'undefined' ? (b = 'hidden', c = 'visibilitychange') : typeof document.mozHidden !== 'undefined' ? (b = 'mozHidden', c = 'mozvisibilitychange') : typeof document.webkitHidden !== 'undefined' && (b = 'webkitHidden', c = 'webkitvisibilitychange'), (typeof document.addEventListener !== 'undefined' || typeof document[b] !== 'undefined') && document.addEventListener(c, d, !1)
  document.body.oncopy = function () { layer.msg('【HCLonely】复制成功,若要转载请务必保留原文链接', function () { }) }
})
