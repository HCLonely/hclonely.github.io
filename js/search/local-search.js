$(function(){var t=!1;$("a.social-icon.search").on("click",function(){var e;$("body").css({width:"100%",overflow:"hidden"}),$(".search-dialog").css("display","block"),$("#local-search-input input").focus(),$(".search-mask").fadeIn(),t||(e=GLOBAL_CONFIG.localSearch.path,$.ajax({url:GLOBAL_CONFIG.root+e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get(),a=$("#local-search-input input")[0],s=$("#local-hits")[0];a.addEventListener("input",function(){var d,p='<div class="search-result-list">',f=this.value.trim().toLowerCase().split(/[\s]+/);s.innerHTML="",this.value.trim().length<=0?$(".local-search-stats__hr").hide():(d=0,t.forEach(function(e){var a=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var s,t,c,i,n,r=e.title.trim().toLowerCase(),o=e.content.trim().replace(/<[^>]+>/g,"").toLowerCase(),l=e.url,h=-1,u=-1;""!==r||""!==o?f.forEach(function(e,t){s=r.indexOf(e),h=o.indexOf(e),s<0&&h<0?a=!1:(h<0&&(h=0),0===t&&(u=h))}):a=!1,a&&(t=e.content.trim().replace(/<[^>]+>/g,""),0<=u&&(i=u+100,(c=u-30)<0&&(c=0),0===c&&(i=100),i>t.length&&(i=t.length),n=t.substring(c,i),f.forEach(function(e){var t=new RegExp(e,"gi");n=n.replace(t,'<span class="search-keyword">'+e+"</span>"),r=r.replace(t,'<span class="search-keyword">'+e+"</span>")}),p+='<div class="local-search__hit-item"><a href="'+l+'" class="search-result-title">'+r+"</a>",d+=1,$(".local-search-stats__hr").show(),""!==o&&(p+='<p class="search-result">'+n+"...</p>")),p+="</div>")}),0===d&&(p+='<div id="local-search__hits-empty">'+GLOBAL_CONFIG.localSearch.languages.hits_empty.replace(/\$\{query}/,this.value.trim())+"</div>"),p+="</div>",s.innerHTML=p)})}}),t=!0),document.addEventListener("keydown",function e(t){"Escape"===t.code&&(a(),document.removeEventListener("keydown",e))})});var a=function(){$("body").css("width",""),$("body").css("overflow",""),$(".search-dialog").css({animation:"search_close .5s"}),$(".search-dialog").animate({},function(){setTimeout(function(){$(".search-dialog").css({animation:"",display:"none"})},500)}),$(".search-mask").fadeOut()};$(".search-mask, .search-close-button").on("click touchstart",a)});