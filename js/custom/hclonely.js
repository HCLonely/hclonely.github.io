jQuery(document).ready(function () {
  function d () { document.title = document[b] ? '(つェ⊂)看不见我看不见我' : a }
  let b; let c; const a = document.title; typeof document.hidden !== 'undefined' ? (b = 'hidden', c = 'visibilitychange') : typeof document.mozHidden !== 'undefined' ? (b = 'mozHidden', c = 'mozvisibilitychange') : typeof document.webkitHidden !== 'undefined' && (b = 'webkitHidden', c = 'webkitvisibilitychange'), (typeof document.addEventListener !== 'undefined' || typeof document[b] !== 'undefined') && document.addEventListener(c, d, !1)
  document.body.oncopy = function () { layer.msg('【HCLonely】复制成功,若要转载请务必保留原文链接', function () { }) }
  $('#switch-comment').click(function () {
    switchComment()
    return false
  })
  if (window.location.hash && /^#[\w\d]{24}$/.test(window.location.hash)) {
    $('#switch-comment').attr('title', '切换为Gitalk')
    $('#gitalk-container').hide()
    $('#vcomment').show()
    var checkExist = setInterval(function () {
      if ($(window.location.hash).length) {
        $('html, body').animate({ scrollTop: $(window.location.hash).offset().top - 90 }, 1000)
        clearInterval(checkExist)
      }
    }, 100)
  }
})

function switchComment () {
  const title = $('#switch-comment').attr('title') === '切换为Gitalk' ? '切换为Valine' : '切换为Gitalk'
  const i = $('#switch-comment>i')
  if ($('#gitalk-container').css('display') === 'none') {
    $('#vcomment').slideUp('normal', () => {
      $('#gitalk-container').slideDown('normal', () => {
        $('#switch-comment').attr('title', title)
        i.hasClass('fa-toggle-off') ? i.removeClass('fa-toggle-off').addClass('fa-toggle-on') : i.removeClass('fa-toggle-on').addClass('fa-toggle-off')
      })
    })
  } else {
    $('#gitalk-container').slideUp('normal', () => {
      $('#vcomment').slideDown('normal', () => {
        $('#switch-comment').attr('title', title)
        i.hasClass('fa-toggle-off') ? i.removeClass('fa-toggle-off').addClass('fa-toggle-on') : i.removeClass('fa-toggle-on').addClass('fa-toggle-off')
      })
    })
  }
}
