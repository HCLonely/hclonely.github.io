var searchFunc=function(e,t,l){"use strict";var a="<i id='local-search-close'></i>",r="<span>"+$("#local-search-result").data("start")+"</span>",s="<span class='local-search-empty'>"+$("#local-search-result").data("initialise")+"<span>",c="<span class='local-search-empty'>"+$("#local-search-result").data("empty")+"<span>",n=document.getElementById(t),i=document.getElementById(l);i.innerHTML=a+"<ul>"+s+"</ul>",$.ajax({url:e,dataType:"xml",success:function(e){var t=$("entry",e).map(function(){return{title:$("title",this).text(),content:$("content",this).text(),url:$("url",this).text()}}).get();i.innerHTML="",n.addEventListener("input",function(){var m='<ul class="search-result-list">',f=this.value.trim().toLowerCase().split(/[\s\-]+/);i.innerHTML="",this.value.trim().length<=0?$("#local-search-result").html(r):(t.forEach(function(e){var l=!0;e.title&&""!==e.title.trim()||(e.title="Untitled");var t=e.title.trim(),a=t.toLowerCase(),r=e.content.trim().replace(/<[^>]+>/g,""),s=r.toLowerCase(),c=e.url,n=-1,i=-1,u=-1;if(""!==s?f.forEach(function(e,t){n=a.indexOf(e),i=s.indexOf(e),n<0&&i<0?l=!1:(i<0&&(i=0),0==t&&(u=i))}):l=!1,l){m+="<li><a href='"+c+"' class='search-result-title posttitle' target='_blank'>"+t+"</a>";if(0<=u){var o=u-20,h=u+80;o<0&&(o=0),0==o&&(h=100),h>r.length&&(h=r.length);var p=r.substr(o,h);f.forEach(function(e){var t=new RegExp(e,"gi");p=p.replace(t,'<em class="search-keyword">'+e+"</em>")}),m+='<p class="search-result">'+p+"...</p>"}m+="</li>"}}),-1!==(m+="</ul>").indexOf("<li>")?i.innerHTML=a+m:i.innerHTML=a+"<ul>"+c+"</ul>")})}}),$(document).on("click","#local-search-close",function(){$("#local-search-input").val(""),$("#local-search-result").html(r)})},getSearchFile=function(){searchFunc("/search.xml","local-search-input","local-search-result")};