try {
    if (!navigator.userAgent.match(/Mobile/i)) {
        window.waifuTipsJson = {
            "waifu": {
                "console_open_msg": ["哈哈，你打开了控制台，是想要看看我的秘密吗？"],
                "copy_message": ["你都复制了些什么呀，转载要记得加上出处哦"],
                "screenshot_message": ["照好了嘛，是不是很可爱呢？"],
                "hidden_message": ["我们还能再见面的吧…"],
                "load_rand_textures": ["我还没有其他衣服呢", "我的新衣服好看嘛"],
                "hour_tips": {
                    "t5-7": ["早上好！一日之计在于晨，美好的一天就要开始了"],
                    "t7-11": ["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],
                    "t11-14": ["中午了，工作了一个上午，现在是午餐时间！"],
                    "t14-17": ["午后很容易犯困呢，今天的运动目标完成了吗？"],
                    "t17-19": ["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],
                    "t19-21": ["晚上好，今天过得怎么样？"],
                    "t21-23": ["已经这么晚了呀，早点休息吧，晚安~"],
                    "t23-5": ["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],
                    "default": ["嗨~ 快来逗我玩吧！"]
                },
                "referrer_message": {
                    "localhost": ["欢迎浏览<span style=\"color:#0099cc;\">『", "』</span>", " - "],
                    "baidu": ["Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
                    "so": ["Hello! 来自 360搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
                    "google": ["Hello! 来自 谷歌搜索 的朋友<br>欢迎浏览<span style=\"color:#0099cc;\">『", "』</span>", " - "],
                    "default": ["Hello! 来自 <span style=\"color:#0099cc;\">", "</span> 的朋友"],
                    "none": ["欢迎浏览<span style=\"color:#0099cc;\">『", "』</span>", " - "]
                },
                "referrer_hostname": {
                    "home.hclonely.com": ["HCLonely的个人主页"],
                    "example.com": ["示例网站"],
                    "www.fghrsh.net": ["FGHRSH 的博客"]
                },
                "model_message": {
                    "1": ["来自 Potion Maker 的 Pio 酱 ~"],
                    "2": ["来自 Potion Maker 的 Tia 酱 ~"]
                },
                "hitokoto_api_message": {
                    "lwl12.com": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>", "，是 <span style=\"color:#0099cc;\">{creator}</span> 投稿的", "。"],
                    "fghrsh.net": ["这句一言出处是 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">FGHRSH</span> 在 {date} 收藏的！"],
                    "jinrishici.com": ["这句诗词出自 <span style=\"color:#0099cc;\">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！"],
                    "hitokoto.cn": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">{creator}</span> 在 hitokoto.cn 投稿的。"]
                }
            },
            "mouseover": [
                { "selector": ".container a[href^='http']", "text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
                { "selector": ".fui-home", "text": ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"] },
                { "selector": ".fui-chat", "text": ["一言一语，一颦一笑。一字一句，一颗赛艇。"] },
                { "selector": ".fui-eye", "text": ["嗯··· 要切换 看板娘 吗？"] },
                { "selector": ".fui-user", "text": ["喜欢换装 Play 吗？"] },
                { "selector": ".fui-photo", "text": ["要拍张纪念照片吗？"] },
                { "selector": ".fui-info-circle", "text": ["这里有关于我的信息呢"] },
                { "selector": ".fui-cross", "text": ["你不喜欢我了吗..."] },
                { "selector": "#hitokoto", "text": ["{text}"] },
                { "selector": "#comment_go", "text": ["想要去评论些什么吗？"] },
                { "selector": "#night_mode", "text": ["深夜时要爱护眼睛呀"] },
                { "selector": "#qrcode", "text": ["手机扫一下就能继续看，很方便呢"] },
                { "selector": ".comment_reply", "text": ["要吐槽些什么呢"] },
                { "selector": "#back-to-top", "text": ["回到开始的地方吧"] },
                { "selector": "#author", "text": ["该怎么称呼你呢"] },
                { "selector": "#mail", "text": ["留下你的邮箱，不然就是无头像人士了"] },
                { "selector": "#url", "text": ["你的家在哪里呢，好让我去参观参观"] },
                { "selector": "#textarea", "text": ["认真填写哦，垃圾评论是禁止事项"] },
                { "selector": ".OwO-logo", "text": ["要插入一个表情吗"] },
                { "selector": "#csubmit", "text": ["要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~"] },
                { "selector": ".ImageBox", "text": ["点击图片可以放大呢"] },
                { "selector": "input[name=s]", "text": ["找不到想看的内容？搜索看看吧"] },
                { "selector": ".previous", "text": ["去上一页看看吧"] },
                { "selector": ".next", "text": ["去下一页看看吧"] },
                { "selector": ".dropdown-toggle", "text": ["这里是菜单"] },
                { "selector": ".aplayer-pic", "text": ["想要听点音乐吗"] },
                { "selector": ".aplayer-icon-play", "text": ["想要听点音乐吗"] },
                { "selector": ".aplayer-miniswitcher", "text": ["要显示更多播放器设置吗"] },
                { "selector": ".aplayer-icon-back", "text": ["要播放上一首音乐吗"] },
                { "selector": ".aplayer-icon-forward", "text": ["要播放下一首音乐吗"] },
                { "selector": ".aplayer-bar-wrap", "text": ["在这里可以调整<span style=\"color:#0099cc;\">播放进度</span>呢"] },
                { "selector": ".aplayer-volume-wrap", "text": ["在这里可以调整<span style=\"color:#0099cc;\">音量</span>呢"] },
                { "selector": ".aplayer-icon-loop", "text": ["在这里可以调整<span style=\"color:#0099cc;\">播放顺序</span>呢"] },
                { "selector": ".aplayer-icon-lrc", "text": ["有<span style=\"color:#0099cc;\">歌词</span>的话就能跟着一起唱呢"] },
                { "selector": ".aplayer-icon-menu", "text": ["<span style=\"color:#0099cc;\">播放列表</span>里都有什么呢"] },
                { "selector": ".waifu #live2d", "text": ["干嘛呢你，快把手拿开", "鼠…鼠标放错地方了！"] },
                { "selector": "#weather-float-he", "text": ["要看一下天气吗？"] },
                { "selector": "a[data-svc='wechat']", "text": ["要加主人的微信吗？"] },
                { "selector": "a[data-svc='sinaweibo']", "text": ["要关注主人的微博吗？"] },
                { "selector": "a[data-svc='steam']", "text": ["要看主人的steam吗？"] },
                { "selector": "a[data-svc='mailto']", "text": ["要给主人发邮件吗？"] },
                { "selector": "a[data-svc='github']", "text": ["要看主人的GitHub吗？"] },
                { "selector": "a[data-svc='twitter']", "text": ["要关注主人的Twitter吗？"] },
                { "selector": "a[data-svc='instagram']", "text": ["要关注主人的Instagram吗？"] },
                { "selector": "a[data-svc='youtube']", "text": ["要订阅主人的YouTube吗？"] },
                { "selector": "a[data-svc='telegram']", "text": ["要用Telegram给主人发消息吗？"] },
                { "selector": "a[data-svc='facebook']", "text": ["要加主人的Facebook好友吗？"] },
                { "selector": "a[data-svc='twitch']", "text": ["要关注主人的Twitch吗？"] },
                { "selector": "a[data-svc='pinterest']", "text": ["要关注主人的Pinterest吗？"] },
                { "selector": "a[data-svc='tumblr']", "text": ["要关注主人的Tumblr吗？"] },
                { "selector": ".at-expanding-share-button-toggle", "text": ["要分享这个网页吗？"] },
                { "selector": "a[data-name='Qzone']", "text": ["要分享到QQ空间吗？"] },
                { "selector": "a[data-name='Tencent QQ']", "text": ["要分享给QQ好友吗？"] },
                { "selector": "a[data-name='WeChat']", "text": ["要分享到微信吗？"] },
                { "selector": "a[data-name='Sina Weibo']", "text": ["要分享到新浪微博吗？"] },
                { "selector": "a[data-name='Renren']", "text": ["要分享到人人网吗？"] },
                { "selector": "a[data-name='Facebook']", "text": ["要分享到Facebook吗？"] },
                { "selector": "a[data-name='Twitter']", "text": ["要分享到Twitter吗？"] },
                { "selector": "a[data-name='Gmail']", "text": ["要分享到谷歌邮箱吗？"] },
                { "selector": "a[data-name='Copy Link']", "text": ["要复制网页链接吗？"] },
                { "selector": "a[data-name='Blog']", "text": ["要前往主人的博客吗？"] }
            ],
            "click": [
                {
                    "selector": ".waifu #live2d",
                    "text": [
                        "是…是不小心碰到了吧",
                        "萝莉控是什么呀",
                        "你看到我的小熊了吗",
                        "再摸的话我可要报警了！⌇●﹏●⌇",
                        "110吗，这里有个变态一直在摸我(ó﹏ò｡)"
                    ]
                }
            ],
            "seasons": [
                { "date": "01/01", "text": ["<span style=\"color:#0099cc;\">元旦</span>了呢，新的一年又开始了，今年是{year}年~"] },
                { "date": "02/14", "text": ["又是一年<span style=\"color:#0099cc;\">情人节</span>，{year}年找到对象了嘛~"] },
                { "date": "03/08", "text": ["今天是<span style=\"color:#0099cc;\">妇女节</span>！"] },
                { "date": "03/12", "text": ["今天是<span style=\"color:#0099cc;\">植树节</span>，要保护环境呀"] },
                { "date": "04/01", "text": ["悄悄告诉你一个秘密~<span style=\"background-color:#34495e;\">今天是愚人节，不要被骗了哦~</span>"] },
                { "date": "05/01", "text": ["今天是<span style=\"color:#0099cc;\">五一劳动节</span>，计划好假期去哪里了吗~"] },
                { "date": "06/01", "text": ["<span style=\"color:#0099cc;\">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"] },
                { "date": "09/03", "text": ["<span style=\"color:#0099cc;\">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"] },
                { "date": "09/10", "text": ["<span style=\"color:#0099cc;\">教师节</span>，在学校要给老师问声好呀~"] },
                { "date": "10/01", "text": ["<span style=\"color:#0099cc;\">国庆节</span>，新中国已经成立69年了呢"] },
                { "date": "11/05-11/12", "text": ["今年的<span style=\"color:#0099cc;\">双十一</span>是和谁一起过的呢~"] },
                { "date": "12/20-12/31", "text": ["这几天是<span style=\"color:#0099cc;\">圣诞节</span>，主人肯定又去剁手买买买了~"] }
            ]
        }
        $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
        live2d_settings['modelAPI'] = '//live2d.hclonely.com/';
        live2d_settings['staticAPI'] = '//cdn.jsdelivr.net';
        live2d_settings['hitokotoAPI'] = "hitokoto.cn";
        live2d_settings['modelId'] = 105;
        live2d_settings['modelTexturesId'] = 1;
        live2d_settings['modelStorage'] = true;
        live2d_settings['waifuSize'] = '280x250';
        live2d_settings['waifuEdgeSide'] = 'right:30';
        if (!['/blhx/','/hqxy/','/dal/','/bh3/'].includes(location.pathname)) initModel(waifuTipsJson);
    }

    $('#switch-comment').click(function () {
        switchComment();
        return false;
    });
    function switchComment() {
        let title = $('#switch-comment').attr("title") === '切换为Gitalk' ? '切换为Valine' : '切换为Gitalk';
        let i = $('#switch-comment>i');
        if ($('#gitalk-container').css('display') === "none") {
            $('#vcomment').slideUp("normal", () => {
                $('#gitalk-container').slideDown("normal",()=>{
                    $('#switch-comment').attr("title", title);
                    i.hasClass("fa-toggle-off") ? i.removeClass("fa-toggle-off").addClass("fa-toggle-on") : i.removeClass("fa-toggle-on").addClass("fa-toggle-off");
                });
            });
        } else {
            $('#gitalk-container').slideUp("normal", () => {
                $('#vcomment').slideDown("normal", () => {
                    $('#switch-comment').attr("title", title);
                    i.hasClass("fa-toggle-off") ? i.removeClass("fa-toggle-off").addClass("fa-toggle-on") : i.removeClass("fa-toggle-on").addClass("fa-toggle-off");
                });
            });
        }
    }
    
    $(document).ready(function () {
      //访客地图
      if($("#visitors-map").length>0){
        if (navigator.userAgent.match(/Mobile/i)) {
          $("#visitors-map").append('<script type="text/javascript" id="clustrmaps" src="https://cdn.jsdelivr.net/gh/HCLonely/hclonely.github.io@1.2.4/js/js/map_v2.min.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330&cl=ffffff&w=a"></script>');
        }else{
          $("#visitors-map").append('<script type="text/javascript" id="clstr_globe" src="https://cdn.jsdelivr.net/gh/HCLonely/hclonely.github.io@1.2.4/js/js/globe.min.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330"></script>');
        }
      }else{
        $("head").append("<style>.clustrmaps-map-control{display:none !important;}</style>");
        $("body").append('<script type="text/javascript" id="clustrmaps" src="https://cdn.jsdelivr.net/gh/HCLonely/hclonely.github.io@1.2.4/js/js/map_v2.min.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330&cl=ffffff&w=a"></script>');
      }

      //webp处理
      if($('script[src*="webpjs.min.js"]').length>0) return;
	  var WebP=new Image();
	  WebP.onload=WebP.onerror=function(){
        if(WebP.height!=2){
        	var sc=document.createElement('script');
        	sc.type='text/javascript';
        	sc.async=true;
            var s=document.getElementsByTagName('script')[0];
            sc.src='https://cdn.jsdelivr.net/gh/HCLonely/hclonely.github.io@1.2.0/js/webpjs.min.js';
            s.parentNode.insertBefore(sc,s);
        }
	  };
      WebP.src='data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    });

} catch (err) { console.log("[Error] JQuery is not defined.") }
