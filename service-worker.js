/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","2efecbea6be3294590b98ca983626f33"],["/Gallery/index.html","19aa26c403ac10d3b6f0e5fba4dad42e"],["/about/index.html","9c234bb55579c6fc8ac6c5f623d2ee75"],["/archives/2019/08/index.html","b97456d34025b0ddf86f191c6be2c29e"],["/archives/2019/09/index.html","953cb44efff6c16948e7ee3b27dcc8af"],["/archives/2019/10/index.html","ea18ad06e5bd15bd66ca49755744d154"],["/archives/2019/11/index.html","c622fa6ef03296e95adf1d9a026bf3c2"],["/archives/2019/index.html","acdeca6e167a0aa96b6ab89db1a09c76"],["/archives/2019/page/2/index.html","c35397dce5da1d06116eb1b56ea8d55b"],["/archives/2020/02/index.html","740b60129caafcd19f9dcbd64ef895c3"],["/archives/2020/02/page/2/index.html","40d0997a967a327a7ba71f78eeab7771"],["/archives/2020/03/index.html","9d6a15e5ecd2d3cd70974ee40d4acbf5"],["/archives/2020/index.html","767efa493a4e7a3afa6d5bbbff78e727"],["/archives/2020/page/2/index.html","9c5137ab4304012f7812e42c0bc3f3e9"],["/archives/index.html","e06ab18af39bcac1b594ac68f7479f78"],["/archives/page/2/index.html","0de00334d94c8e397e3e7977f68e543f"],["/archives/page/3/index.html","0a9a5713e462f119e84856e57f5528c5"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/bangumis/index.html","b42f3877f2ea308b4b4c9de724956c53"],["/bh3/index.html","3618fad2c53219865409fd50ce55bf63"],["/blhx/index.html","25447d587f48b8af1920077098726782"],["/categories/Hexo/index.html","c72cb6563ce5553bbbc2d4ba653868e2"],["/categories/Hexo/插件/index.html","51dc5e1307b272d8a150638f82b6561b"],["/categories/JavaScript/NodeJs/index.html","4aadf85aa8c731ea15ece4d5c8f4e405"],["/categories/JavaScript/Tampermonkey脚本/index.html","063bf469f00ac2e2cc55efcaa9d1427e"],["/categories/JavaScript/index.html","952d6acf747ceff76261efaebe42c12a"],["/categories/Linux/index.html","e0e7c386ee3a2438de083bf1274dee42"],["/categories/Windows/index.html","6fd2537fc939adbcf82527d7b2e2b642"],["/categories/Windows/软件/index.html","99df4fb4079fb17c94df594437a96837"],["/categories/index.html","4934cd0463ce529825a5ee1288b1709c"],["/categories/浏览器插件/index.html","45e6c05b48d9d5b487ed1c8ee4a552bb"],["/categories/网页制作/index.html","e5c0ed40709774a53df0846dae06d31c"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/custom/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom/waifu.min.css","080b7c45d4ae6cc4beeb6a89684e83d9"],["/css/hclonely.css","aed7854dfa57518f962961fec12efb1f"],["/css/index.css","810bf34edcc9037658bf072a48ae3e44"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dal/index.html","1ad262b451434debdcdebdb8276d2a6e"],["/fgo/index.html","f70d6a94dd1111635c2e5f8a426048af"],["/go/index.html","59eca7f43381c9992cbbe3a4698c9eb6"],["/hqxy/index.html","d6cab07d4e68f1c2314a1cc0e7280a1e"],["/images/pwaicons/144.png","94ef18385cd87b9a58f9b7e2ffb5a9b6"],["/images/pwaicons/16.png","3f6d7a8b69ecfa3a4f83051585b889db"],["/images/pwaicons/192.png","1a10c3a968285210f2525353b7bc2914"],["/images/pwaicons/32.png","c9b3e7d18f3a74e74145d3616aabb131"],["/images/pwaicons/36.png","da315b927c34d4918d1d6fc26eaa7e0d"],["/images/pwaicons/48.png","b285a6d685e195fa39fc87b793641eda"],["/images/pwaicons/512.png","132465c9eeebed32641dc2cf557c28ba"],["/images/pwaicons/72.png","62a8f56261a1f364d7c28b5564984be1"],["/images/pwaicons/96.png","aaa565983411b23acbac3986539adca8"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/Butterfly/001.webp","8b7a4ab7af495bfa39b59b2b7c2f31df"],["/img/Butterfly/002.webp","80a69df162220deddbade0364d3453e1"],["/img/Butterfly/003.webp","9dad2ec3d747e7f4a21dcf91cb74963e"],["/img/Butterfly/004.webp","7287fafc236c5f1a542e65d204bf69fd"],["/img/Butterfly/005.webp","27a8eb906bc724f21efd89a1f49b7a44"],["/img/Butterfly/006.webp","c83b9920d67df24fed6b7236325b026a"],["/img/Butterfly/007.webp","f032d824447cdcd08e69b1b2541b6570"],["/img/Butterfly/008.webp","078a14f031b58c28455509d33aa09241"],["/img/Butterfly/009.webp","967c6a69cc02c9637e3cc150d24c542c"],["/img/Butterfly/010.webp","201280c357f7effc2817c3f843b27475"],["/img/Butterfly/011.webp","03113f7c4079de53d54805a05b58c12b"],["/img/Butterfly/012.webp","5674e7db7c369e3429633946e8216b7e"],["/img/Butterfly/013.webp","eebf64be14ae8ac20c1d4f994a6c93b5"],["/img/Butterfly/014.webp","4f3e4c93c37dcb3129069b086443ac7d"],["/img/Butterfly/015.webp","be5649be5f802df1e5d68cc2e291cb1d"],["/img/Butterfly/016.webp","b747846b56c87565615e8de2d636aacd"],["/img/Butterfly/017.webp","090ed9c750a907df108f80a41644f8b4"],["/img/Butterfly/018.webp","bb954050a66b73b8c731784d5f6df855"],["/img/Butterfly/019.webp","e8c23192ace4d8e4f30c27aff584acf9"],["/img/Butterfly/020.webp","216c0c233a82a28bb11dce23bb318bfd"],["/img/Butterfly/021.webp","51e1f4d826c3ccba1681b980e66d0985"],["/img/Butterfly/022.webp","eb553cf7c8970007c608d05dc8c24aba"],["/img/Butterfly/023.webp","698e82448f1566ae3680f0584156f8e9"],["/img/Butterfly/024.webp","5a6e6508f600ff30327feb6a1a0fbf6d"],["/img/Butterfly/025.webp","197edcff31aaea50efb09de4895c6e69"],["/img/Butterfly/026.webp","3fb55d94e684cdbebd9b2e99d06945f4"],["/img/Butterfly/027.webp","0b3ee6af42f4966367d8fb3119190460"],["/img/Butterfly/028.webp","738671cbfcab0c52494907f42665dd88"],["/img/Butterfly/029.webp","835c320c31c50b0b0bfcbc9f75dc1d81"],["/img/Butterfly/030.webp","ca879827344780efd6a952398a35fbb7"],["/img/Butterfly/031.webp","36a2e9fdcd19f15ff8d5d6f5a18bfefe"],["/img/Butterfly/032.webp","c780b91c9dc37f3e33c433a3a308baf0"],["/img/Butterfly/033.webp","f8be77442fcbe8246d4483ec2e679b4d"],["/img/Butterfly/034.webp","a32834a48240be8a31d88d9ba5ab0f1f"],["/img/Butterfly/035.webp","ea051cb7fd9863ad8f1a4ad656d1f4a8"],["/img/Butterfly/036.webp","bd8c149e426a2a55f403c3cbe77aae9b"],["/img/Butterfly/037.webp","6923d2da5e74534594696e7c6f178956"],["/img/Butterfly/038.webp","709ff283acc08f300196f46291b8dbc6"],["/img/Butterfly/039.webp","0bec911362e4bbdae7212c8681cf2936"],["/img/Butterfly/040.webp","1115355bfa5a3bd7854e0799a8a6fba2"],["/img/Butterfly/041.webp","e9651968774c9be07ef612ffa947692c"],["/img/Butterfly/042.webp","00f853875f76407f4abb6597a8b96873"],["/img/Butterfly/043.webp","489ec61328b603775d7c11ac34ce16c9"],["/img/Butterfly/044.webp","db9286f427a007b5244182be6ab84358"],["/img/Butterfly/045.webp","721a9b4444d4621d3b4dc5fc020704b9"],["/img/Butterfly/046.webp","03b11db565adda461c86b701a7f62864"],["/img/Butterfly/047.webp","59ec4e2b43eaedf331143c2b102bd5e5"],["/img/Butterfly/048.webp","c02a0940b2b9474db87290b1daaf1959"],["/img/Butterfly/049.webp","3b8e8a96ea68f9204000e610d9ba7a51"],["/img/Butterfly/050.webp","1d6d1f4f72a152e07e4715cf212be101"],["/img/Butterfly/051.webp","b86ded7db94f8684d1103453100d4c5a"],["/img/Butterfly/052.webp","58f562191e7818ea386ba2024f26d5f4"],["/img/Butterfly/053.webp","c933789810de107a60d3d4e3f1ffe514"],["/img/Butterfly/054.webp","065266a07ab919dabdf97a9eb454ce61"],["/img/Butterfly/055.webp","7ef03ce3350600e4d34a396947c0ac24"],["/img/Butterfly/056.webp","ba037ae2a53d79a4e48911553a28e3d9"],["/img/Butterfly/057.webp","4f39922681b523ddee8d801360f9750e"],["/img/Butterfly/archive.webp","4087158143a76a2741a2abb00d234bba"],["/img/Butterfly/category.webp","0ec945ba1138accaec6af58b46c391bd"],["/img/Butterfly/default.webp","ca2f1da77aac41077ccb7e28e6dda692"],["/img/Butterfly/index.webp","6e37a9613302fbafa8f880023459a48c"],["/img/Butterfly/movie.webp","bcb65a4506c31945691ecb7d6d9d5d57"],["/img/Butterfly/tag.webp","e61d5b5bc4e01b05ed1167e682725de6"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","4dc5e2230f7be02e3ebb36b88af11a0e"],["/img/avatar.jpg","1fffbf6f27d33c12b8849346608f0660"],["/img/bangumi-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/favicon.jpg","fe1f22b0da95d469774378e6a2814390"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/page/bh3.webp","a78aa797c14cb8ecca67d6e17c88a720"],["/img/page/blhx.webp","c93fb1afb8ca879ae94350ae1265dc28"],["/img/page/dal.webp","54186fe735960650053163d0c31ce250"],["/img/page/fgo.webp","163914ad775d8a642662f951e7de3f47"],["/img/page/hqxy.webp","9a91b8ef5916ab28d0dffdc73fdc4d44"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/undraw_programming.svg","291a79daaefe0128295bfb60c21049b0"],["/img/wechat.png","5e3ababc2a21dc7555e0e39563dc1087"],["/img/wechat_zan.png","4613778806783dae4dd2d6c6e2632936"],["/index.html","05e9a16f23a172d157fa65e60bb0f3d1"],["/js/autoload.js","092cdba74344652a5cfd540d9ee27ece"],["/js/calendar.js","18f341fd4f061a5e877cfb5f89ad0f04"],["/js/custom/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/custom/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/custom/hclonely.js","baf916b38ba1fac2fe7c9d68140e0371"],["/js/custom/layer.js","9d7f3efb61b872d3111c73b27cdb7b09"],["/js/custom/live2d.min.js","b7a30bb7841df3288af91f4b5ea5b5b1"],["/js/custom/skin/layer.css","ffea11f3ce6b5d7c038ae80ce22f727e"],["/js/custom/volantis.min.js","3f351a8159adbfb954034ce721218443"],["/js/custom/waifu-tips-butterfly.js","da8eb4ca902921bce935f93aa92b0181"],["/js/jquery-ui.min.js","c15b1008dec3c8967ea657a7bb4baaec"],["/js/languages.js","18f522604d68a789c00be6975d68fd9f"],["/js/load-live2dv3.js","e624794b2594855548ec548e00aff54e"],["/js/load_map.js","af4c8501adad502f16361cb56c6cdebe"],["/js/main.js","b064857a33b27d8d17e1f3ba9b789e82"],["/js/search/algolia.js","03bb353437b0c140f3a361cdaa96827b"],["/js/search/local-search.js","5ba9831e0b7e64e6404fc476201f5b4f"],["/js/serviceworker.js","d63ddaa66e801e75dcf4de20183c381a"],["/js/third-party/ClickShowText.js","f3489798d7b1b56caa4e89319c06e81e"],["/js/third-party/activate-power-mode.js","b6553856129ef173a392efc358cccb61"],["/js/third-party/canvas-nest.js","e6e4329d3d00d80c5f5c5cbb1b228675"],["/js/third-party/canvas-ribbon.js","7afc0227ab14e508881b54788d7ca208"],["/js/third-party/click_heart.js","89a6fb2d6d69515716a751e8e049ee06"],["/js/third-party/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["/js/third-party/piao.js","b04c2f28dcd0b7d22bb466bfc9eddf3a"],["/js/tw_cn.js","8a842405c1ff7deaf30121d49de0a28f"],["/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["/js/webpjs.min.js","315579d7253d8f0ead949ce4cdb6357b"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","bc2785905299588ff98b2dbb70dd6c39"],["/messageboard/index.html","1c5de641d25d2f9fa771f23ee5dc3cdd"],["/movies/index.html","75c13e8c85d1528da8eaae6a22f90caa"],["/music/index.html","e87775799aeead8a6af243edd1360f42"],["/page/2/index.html","a3c441df7e61825a7ef7c27117848c7c"],["/page/3/index.html","81b8875574c8c9d2fa5e9d05fb803fb8"],["/posts/2413eaa8/index.html","352c5372cbeea784f3ac2a6dc1c25963"],["/posts/3562b7af/index.html","3b487750b03b52895de592f2c9a3c45e"],["/posts/4b4a0e66/index.html","034a2ed68934b0a2a6acb50206f16484"],["/posts/4d6ecc07/index.html","ed9abb8841ac3f164aedc472ef1e1438"],["/posts/5579cd4b/index.html","2db52711d464cbb657faf59de0ff8c30"],["/posts/578f9be7/index.html","69f50ec3fa547c45d9b96ebd3054c24b"],["/posts/57bd67ce/index.html","68cf2e8dde7881af8a2c0f8c6d2eff81"],["/posts/672d4d3b/index.html","5f6985297e0c3d41bbd11a6f911f8b79"],["/posts/6a0923b1/index.html","f7da106d5adc1b49ae06e2ff3112bd6c"],["/posts/70c32a14/index.html","311ad02e2503f0af43428839d05e3ccf"],["/posts/71381355/index.html","bcf5fe3d918d0f33184f2202a106eb26"],["/posts/72a59031/index.html","982b00b39c21d1d7a4161410f044ede6"],["/posts/777c60d5/index.html","c37c821e9c79124dd0ae4a0e5b407fa9"],["/posts/7ac7bbe8/index.html","7a2f6668f948f8cc144155349073c898"],["/posts/8422e92e/index.html","eeceb62683601d6141ae27111925bb45"],["/posts/8a7f7919/index.html","c08f9badc9a4f37a7657f504ab92bce9"],["/posts/8f55ce4c/index.html","68cf65cd644c0c347a1b7e82023392b0"],["/posts/94295339/index.html","e5d3ac20c6920ffa2f0e6bb8da21b2fc"],["/posts/9522d51b/index.html","a86c1b7e6e957598964483cf7a976874"],["/posts/a3dcda7b/index.html","66821f4f97d90e90e411b7ecf68a6df6"],["/posts/a6b0234c/index.html","2c234d027d09d43d93dbf6bfff387b29"],["/posts/b48b8704/index.html","800c6319355e73a1c88933645a006c85"],["/posts/b9ab9265/index.html","a4dff07e7ddd727c4e3f4d5fc3f67b8e"],["/posts/c733a53b/index.html","d271f541d7766f5e0e26860f9e087160"],["/posts/d92292e2/index.html","ceab0f055d9d571d2f7199c7af3645ac"],["/posts/dd3e8958/index.html","43d590da472a4794b6abdefff73ac6fa"],["/posts/e1f9f17c/index.html","2e6d167d281a9fc488df33fe07cc8c67"],["/posts/ebe9edfc/index.html","3a75c2878047d999b93835df5b45b9fd"],["/posts/f096f3bc/index.html","558d7cd0e468682540df883d2b58dc87"],["/posts/f09c9fef/index.html","0f8caccf2987ad5baa593f18269d9d5b"],["/steamgames/index.html","8f244c2d750d7f355fcf3b50ff9e5b47"],["/tags/APlayer/index.html","75d1ad5b4a8d5092868336ba3b07a36f"],["/tags/Aria2/index.html","cd44f1480d20ed0671a0aded4795e9ff"],["/tags/Chrome/index.html","2253dec378df280b95d5e1f5e82a2e66"],["/tags/Hexo/index.html","2427d8fe23011a0e13bfa66c1ec4d280"],["/tags/JavaScript/index.html","350acbd62e0f1f54f1e239604ddf8a87"],["/tags/Linux/index.html","5f6ffb48e41ba0861f562f9774e3376b"],["/tags/NodeJs/index.html","0e245bf40404000701e2e79910536c40"],["/tags/WebUI/index.html","88f0707d240403d7e2861229297377e2"],["/tags/addThis/index.html","f62c66f69806d4b42fe4381db75998d7"],["/tags/aria2/index.html","7e5fa70080f7022bca94605ef576dcaf"],["/tags/bangumi/index.html","f15249f416ffd2e6e20bbf7817725e26"],["/tags/bat/index.html","2973d63a5d244b08f570ee5a414d19f8"],["/tags/bilibili/index.html","a4bbcac79bcf961a02e82ea36cd402e5"],["/tags/game/index.html","2e6c2053a3b733840e6a70a5b85a5f9f"],["/tags/index.html","bea417bf7a0c8c12538395eb13e90fc7"],["/tags/ip/index.html","f663615a5ad5251dfcb3fab1824850bf"],["/tags/key/index.html","885582b0f3e0a546d9f3af4153fbf237"],["/tags/live2d/index.html","0823d047744724e3272bc919a1b63254"],["/tags/module/index.html","daccf06113ad1e38386c4f6b594c68b8"],["/tags/online/index.html","dacd86d1358c69c657bbabf5ff01481c"],["/tags/ownCloud/index.html","551cb2a3a631705c79d5007fbceabb51"],["/tags/pixiv/index.html","46767b19d490e5bf39bbc5f458254a75"],["/tags/server/index.html","32daf6ed542d1d4ac2951497cafbdeff"],["/tags/steam/index.html","e98c5af8ee30d33cc23c3e55c2cec0d6"],["/tags/steam激活码/index.html","a6c67a66e49d6d4ec8bb80838d5963cd"],["/tags/tag/index.html","edbfcf4c20904a4c9709d211ed2c65d7"],["/tags/webui/index.html","ded3a9500012665ddbf79729e5c87fca"],["/tags/一言/index.html","6a6b5d8b62246acd089067d27da1192c"],["/tags/下载软件/index.html","72f9ed4dcc0df075cf5c131b4f90a695"],["/tags/分享/index.html","f24c527e61c08f018294cd38d84a0520"],["/tags/哔哩哔哩/index.html","2a02af874f9eb1157a04940a33673be4"],["/tags/图形界面/index.html","e56d34c7f309d1c6cb73c2a9c041d2c6"],["/tags/图片签名档/index.html","1234316ba174fab5b09b1bee8c4627da"],["/tags/天气/index.html","9c1e3558f5fa1e41d922ab307335d0a5"],["/tags/小部件/index.html","0537bffe8b9361ba93364b712086c287"],["/tags/插件/index.html","d87805a9769c4cf5e7805ecf47e3bb28"],["/tags/日历/index.html","d708fa5799d4f53c72d346e7ac8511ad"],["/tags/浏览器/index.html","341dea44163228fc7c1b612428e34b41"],["/tags/游戏/index.html","ee67c9a0c193b6529b8e14b9567a324e"],["/tags/看板娘/index.html","506ce7215d702fc78ed97818949ac420"],["/tags/硬盘/index.html","72fae99ede99803e6d14e7b6bc566078"],["/tags/社交/index.html","9f4fd30a1fd1961804bb4d1bbba9b44f"],["/tags/签名档/index.html","b1499bbf66d0db012a8486e503e23651"],["/tags/网页/index.html","8e01624c6efbf67c1448ce90a16826c2"],["/tags/网页特效/index.html","ffc13efbf40ec0edb2e8605e81402753"],["/tags/脚本/index.html","104ed16849236aab270514d4fb21bcc2"],["/tags/自动任务/index.html","b0a6ce54eaacd44fe480c44fc9f5d99e"],["/tags/访客地图/index.html","3175ca50ef62ea2b73253ec1dc19ef8a"],["/tags/音乐播放器/index.html","7822d0645c044a9f74a20b246b14d081"],["/tags/鼠标特效/index.html","b354e348f17d6d188fe9abe7a3d4e612"],["/whoami/index.html","4620646c945afa39f5bccd9a4bfd4973"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdn.hclonely.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://img.hclonely.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://model.hclonely.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"https://cdnjs.cloudflare.com"});




