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

var precacheConfig = [["/404.html","2efecbea6be3294590b98ca983626f33"],["/Gallery/index.html","ef7e720440143329d8396c13f538d7f5"],["/about/index.html","3124c1671a89ded913dd7b742cf35b7e"],["/archives/2019/08/index.html","007131700d37ec1b7f3876f7941ffcb8"],["/archives/2019/09/index.html","65c526586a7723c835ffe2d408478435"],["/archives/2019/10/index.html","ace6800bdebec45c77f27f79a873ff18"],["/archives/2019/11/index.html","22f5c336e219ec7741e962bd39a1403f"],["/archives/2019/index.html","6388df7de21fa1d5995679918036ced5"],["/archives/2019/page/2/index.html","734629a8e955f8c7599f2509b93462c9"],["/archives/2020/02/index.html","813b8cc09e9a7a32fd42950f2788a46f"],["/archives/2020/02/page/2/index.html","86c77bbe4108086830396602a200db24"],["/archives/2020/03/index.html","ee519d2ad4c67071cdb1df54b30af36a"],["/archives/2020/index.html","e64041984cd434142c11f1b5be8d92b5"],["/archives/2020/page/2/index.html","1a05a064cff32112cbbc2621bf599fb9"],["/archives/index.html","496f8bd459c9e25c913c4c8e7fae8177"],["/archives/page/2/index.html","7f96a7f0477f3c616874a937dbf08dcc"],["/archives/page/3/index.html","8ba271a50d882d9113d4feb292931142"],["/assets/css/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/assets/js/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/bangumis/index.html","a0761a5db19c7b0b568b0c03eec9f03f"],["/bh3/index.html","7e39f763fb5827dc2157869f6479654c"],["/blhx/index.html","8a41ee0734e6c1f55eee5dddb07b529e"],["/categories/Hexo/index.html","c689568da2956fd711aacf20514049de"],["/categories/Hexo/插件/index.html","f4dac8045fd537baff67d3271da80cb6"],["/categories/JavaScript/NodeJs/index.html","2493fade521c40faa5f7df775653c40e"],["/categories/JavaScript/Tampermonkey脚本/index.html","d52e813b6dae2e58d9ab2e51143334c8"],["/categories/JavaScript/index.html","e207302772a62cb8cddcecbf5f3d95d7"],["/categories/Linux/index.html","65abf9e01616887fb500a17a8cac4594"],["/categories/Windows/index.html","177146c2f1be863c265f99e6aec28125"],["/categories/Windows/软件/index.html","26ae2361d84381cde156dd7f4480c524"],["/categories/index.html","02f2c57ba53c0f56d24ae872ae2d8868"],["/categories/浏览器插件/index.html","40874d68ecda99d2c9e4552810ffc67b"],["/categories/网页制作/index.html","da0454f8716630625f3041e20d9aab12"],["/css/blog-encrypt.css","ee21c7086a59d52b97a9e7b6240a9414"],["/css/custom/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/custom/waifu.min.css","080b7c45d4ae6cc4beeb6a89684e83d9"],["/css/hclonely.css","aed7854dfa57518f962961fec12efb1f"],["/css/index.css","810bf34edcc9037658bf072a48ae3e44"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/dal/index.html","273ad28a50f21aa64c9f80905641232f"],["/fgo/index.html","65d24d1eed4c0214042becd3cab4104e"],["/go/index.html","59eca7f43381c9992cbbe3a4698c9eb6"],["/hqxy/index.html","7466436a29b82af970f63ee991c87bec"],["/images/pwaicons/144.png","94ef18385cd87b9a58f9b7e2ffb5a9b6"],["/images/pwaicons/16.png","3f6d7a8b69ecfa3a4f83051585b889db"],["/images/pwaicons/192.png","1a10c3a968285210f2525353b7bc2914"],["/images/pwaicons/32.png","c9b3e7d18f3a74e74145d3616aabb131"],["/images/pwaicons/36.png","da315b927c34d4918d1d6fc26eaa7e0d"],["/images/pwaicons/48.png","b285a6d685e195fa39fc87b793641eda"],["/images/pwaicons/512.png","132465c9eeebed32641dc2cf557c28ba"],["/images/pwaicons/72.png","62a8f56261a1f364d7c28b5564984be1"],["/images/pwaicons/96.png","aaa565983411b23acbac3986539adca8"],["/img/404.jpg","cae3eebf3121aedff311f6eea7e76a5e"],["/img/Butterfly/001.webp","8b7a4ab7af495bfa39b59b2b7c2f31df"],["/img/Butterfly/002.webp","80a69df162220deddbade0364d3453e1"],["/img/Butterfly/003.webp","9dad2ec3d747e7f4a21dcf91cb74963e"],["/img/Butterfly/004.webp","7287fafc236c5f1a542e65d204bf69fd"],["/img/Butterfly/005.webp","27a8eb906bc724f21efd89a1f49b7a44"],["/img/Butterfly/006.webp","c83b9920d67df24fed6b7236325b026a"],["/img/Butterfly/007.webp","f032d824447cdcd08e69b1b2541b6570"],["/img/Butterfly/008.webp","078a14f031b58c28455509d33aa09241"],["/img/Butterfly/009.webp","967c6a69cc02c9637e3cc150d24c542c"],["/img/Butterfly/010.webp","201280c357f7effc2817c3f843b27475"],["/img/Butterfly/011.webp","03113f7c4079de53d54805a05b58c12b"],["/img/Butterfly/012.webp","5674e7db7c369e3429633946e8216b7e"],["/img/Butterfly/013.webp","eebf64be14ae8ac20c1d4f994a6c93b5"],["/img/Butterfly/014.webp","4f3e4c93c37dcb3129069b086443ac7d"],["/img/Butterfly/015.webp","be5649be5f802df1e5d68cc2e291cb1d"],["/img/Butterfly/016.webp","b747846b56c87565615e8de2d636aacd"],["/img/Butterfly/017.webp","090ed9c750a907df108f80a41644f8b4"],["/img/Butterfly/018.webp","bb954050a66b73b8c731784d5f6df855"],["/img/Butterfly/019.webp","e8c23192ace4d8e4f30c27aff584acf9"],["/img/Butterfly/020.webp","216c0c233a82a28bb11dce23bb318bfd"],["/img/Butterfly/021.webp","51e1f4d826c3ccba1681b980e66d0985"],["/img/Butterfly/022.webp","eb553cf7c8970007c608d05dc8c24aba"],["/img/Butterfly/023.webp","698e82448f1566ae3680f0584156f8e9"],["/img/Butterfly/024.webp","5a6e6508f600ff30327feb6a1a0fbf6d"],["/img/Butterfly/025.webp","197edcff31aaea50efb09de4895c6e69"],["/img/Butterfly/026.webp","3fb55d94e684cdbebd9b2e99d06945f4"],["/img/Butterfly/027.webp","0b3ee6af42f4966367d8fb3119190460"],["/img/Butterfly/028.webp","738671cbfcab0c52494907f42665dd88"],["/img/Butterfly/029.webp","835c320c31c50b0b0bfcbc9f75dc1d81"],["/img/Butterfly/030.webp","ca879827344780efd6a952398a35fbb7"],["/img/Butterfly/031.webp","36a2e9fdcd19f15ff8d5d6f5a18bfefe"],["/img/Butterfly/032.webp","c780b91c9dc37f3e33c433a3a308baf0"],["/img/Butterfly/033.webp","f8be77442fcbe8246d4483ec2e679b4d"],["/img/Butterfly/034.webp","a32834a48240be8a31d88d9ba5ab0f1f"],["/img/Butterfly/035.webp","ea051cb7fd9863ad8f1a4ad656d1f4a8"],["/img/Butterfly/036.webp","bd8c149e426a2a55f403c3cbe77aae9b"],["/img/Butterfly/037.webp","6923d2da5e74534594696e7c6f178956"],["/img/Butterfly/038.webp","709ff283acc08f300196f46291b8dbc6"],["/img/Butterfly/039.webp","0bec911362e4bbdae7212c8681cf2936"],["/img/Butterfly/040.webp","1115355bfa5a3bd7854e0799a8a6fba2"],["/img/Butterfly/041.webp","e9651968774c9be07ef612ffa947692c"],["/img/Butterfly/042.webp","00f853875f76407f4abb6597a8b96873"],["/img/Butterfly/043.webp","489ec61328b603775d7c11ac34ce16c9"],["/img/Butterfly/044.webp","db9286f427a007b5244182be6ab84358"],["/img/Butterfly/045.webp","721a9b4444d4621d3b4dc5fc020704b9"],["/img/Butterfly/046.webp","03b11db565adda461c86b701a7f62864"],["/img/Butterfly/047.webp","59ec4e2b43eaedf331143c2b102bd5e5"],["/img/Butterfly/048.webp","c02a0940b2b9474db87290b1daaf1959"],["/img/Butterfly/049.webp","3b8e8a96ea68f9204000e610d9ba7a51"],["/img/Butterfly/050.webp","1d6d1f4f72a152e07e4715cf212be101"],["/img/Butterfly/051.webp","b86ded7db94f8684d1103453100d4c5a"],["/img/Butterfly/052.webp","58f562191e7818ea386ba2024f26d5f4"],["/img/Butterfly/053.webp","c933789810de107a60d3d4e3f1ffe514"],["/img/Butterfly/054.webp","065266a07ab919dabdf97a9eb454ce61"],["/img/Butterfly/055.webp","7ef03ce3350600e4d34a396947c0ac24"],["/img/Butterfly/056.webp","ba037ae2a53d79a4e48911553a28e3d9"],["/img/Butterfly/057.webp","4f39922681b523ddee8d801360f9750e"],["/img/Butterfly/archive.webp","4087158143a76a2741a2abb00d234bba"],["/img/Butterfly/category.webp","0ec945ba1138accaec6af58b46c391bd"],["/img/Butterfly/default.webp","ca2f1da77aac41077ccb7e28e6dda692"],["/img/Butterfly/index.webp","6e37a9613302fbafa8f880023459a48c"],["/img/Butterfly/movie.webp","bcb65a4506c31945691ecb7d6d9d5d57"],["/img/Butterfly/tag.webp","e61d5b5bc4e01b05ed1167e682725de6"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/alipay.jpg","4dc5e2230f7be02e3ebb36b88af11a0e"],["/img/avatar.jpg","1fffbf6f27d33c12b8849346608f0660"],["/img/bangumi-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/comment_bg.png","34a79bf208a1c3bee9d6e491a00cd369"],["/img/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["/img/favicon.jpg","fe1f22b0da95d469774378e6a2814390"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/index.jpg","dce4b2c6fe3c36d9c9e8059f64f4d506"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/page/bh3.webp","a78aa797c14cb8ecca67d6e17c88a720"],["/img/page/blhx.webp","c93fb1afb8ca879ae94350ae1265dc28"],["/img/page/dal.webp","54186fe735960650053163d0c31ce250"],["/img/page/fgo.webp","163914ad775d8a642662f951e7de3f47"],["/img/page/hqxy.webp","9a91b8ef5916ab28d0dffdc73fdc4d44"],["/img/post.jpg","8fb7d10986b67a1dcba885f50a5de3a9"],["/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["/img/undraw_programming.svg","291a79daaefe0128295bfb60c21049b0"],["/img/wechat.png","5e3ababc2a21dc7555e0e39563dc1087"],["/img/wechat_zan.png","4613778806783dae4dd2d6c6e2632936"],["/index.html","7482e9cb425b3e2d955b6ab4f8ba7979"],["/js/autoload.js","092cdba74344652a5cfd540d9ee27ece"],["/js/calendar.js","18f341fd4f061a5e877cfb5f89ad0f04"],["/js/custom/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/js/custom/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/js/custom/hclonely.js","baf916b38ba1fac2fe7c9d68140e0371"],["/js/custom/layer.js","9d7f3efb61b872d3111c73b27cdb7b09"],["/js/custom/live2d.min.js","b7a30bb7841df3288af91f4b5ea5b5b1"],["/js/custom/skin/layer.css","ffea11f3ce6b5d7c038ae80ce22f727e"],["/js/custom/volantis.min.js","3f351a8159adbfb954034ce721218443"],["/js/custom/waifu-tips-butterfly.js","7a8733f1e54b738517b9ef9b8bd9c921"],["/js/jquery-ui.min.js","c15b1008dec3c8967ea657a7bb4baaec"],["/js/languages.js","18f522604d68a789c00be6975d68fd9f"],["/js/load-live2dv3.js","e624794b2594855548ec548e00aff54e"],["/js/load_map.js","af4c8501adad502f16361cb56c6cdebe"],["/js/main.js","b064857a33b27d8d17e1f3ba9b789e82"],["/js/search/algolia.js","03bb353437b0c140f3a361cdaa96827b"],["/js/search/local-search.js","5ba9831e0b7e64e6404fc476201f5b4f"],["/js/serviceworker.js","d63ddaa66e801e75dcf4de20183c381a"],["/js/third-party/ClickShowText.js","f3489798d7b1b56caa4e89319c06e81e"],["/js/third-party/activate-power-mode.js","b6553856129ef173a392efc358cccb61"],["/js/third-party/canvas-nest.js","e6e4329d3d00d80c5f5c5cbb1b228675"],["/js/third-party/canvas-ribbon.js","7afc0227ab14e508881b54788d7ca208"],["/js/third-party/click_heart.js","89a6fb2d6d69515716a751e8e049ee06"],["/js/third-party/fireworks.js","f6da66de730cc068efd0d0b0a9ec64ae"],["/js/third-party/piao.js","b04c2f28dcd0b7d22bb466bfc9eddf3a"],["/js/tw_cn.js","8a842405c1ff7deaf30121d49de0a28f"],["/js/utils.js","23b2d649db443d85eb9f99bd0aea196b"],["/js/webpjs.min.js","315579d7253d8f0ead949ce4cdb6357b"],["/lib/blog-encrypt.js","f1c932790ec55934e04634fd752a3d8e"],["/link/index.html","c26212d6f0bb15dcae95d93e2aacf7eb"],["/messageboard/index.html","617e391cc66184ba6a432cbab96f9b10"],["/movies/index.html","bc6ae2e2f7e67c7148251ef075e475bf"],["/music/index.html","cc21e90cd6304d4e353227b3eae61b5f"],["/page/2/index.html","de04804d371e7099d4d60c185f606b8d"],["/page/3/index.html","8ea6f70c06eaaa419d689ed32b3f636a"],["/posts/2413eaa8/index.html","04036b8dfdc2a1f9d427cc7715425c95"],["/posts/3562b7af/index.html","c7a5d8222c6d8370de0d9726e7d1c0c5"],["/posts/4b4a0e66/index.html","b44a3aae83842b496d49f6e06b88e5d4"],["/posts/4d6ecc07/index.html","f356c9862e834edb12197b146810c26c"],["/posts/5579cd4b/index.html","929646955e1e4154359ff7a10aba2809"],["/posts/578f9be7/index.html","09abe5c358bfb018820eeee34b708e57"],["/posts/57bd67ce/index.html","df07c0b2ebc922a3068999cdb62d244a"],["/posts/672d4d3b/index.html","8fbc7b12ea81ff55188e49d791e75559"],["/posts/6a0923b1/index.html","28cd89743b2a070dfac49f95cda718a1"],["/posts/70c32a14/index.html","f4e4e98e84182e81b2f0c22d71d2e9c8"],["/posts/71381355/index.html","a30b05f0751d12805a60385259840653"],["/posts/72a59031/index.html","a152c59e283a2b3babab414e03c7b755"],["/posts/777c60d5/index.html","061b48aad2875624aa566ddb98c00162"],["/posts/7ac7bbe8/index.html","dbb55e8aadcef49b08fc193a60d892ab"],["/posts/8422e92e/index.html","beafa77549410b768b2e2cb895fad37a"],["/posts/8a7f7919/index.html","d30c8d0252227443664bce24f305dee0"],["/posts/8f55ce4c/index.html","09f168bc49ec641c2e56c293f77f9d83"],["/posts/94295339/index.html","61ec618a7eecb1b3b83d0c76217dfcbf"],["/posts/9522d51b/index.html","a8b2b5041a68f37d754013dd2d232784"],["/posts/a3dcda7b/index.html","c74671e62d1be63815a7dba9226ec95e"],["/posts/a6b0234c/index.html","7f71421a3de15bd9829db22b24706c50"],["/posts/b48b8704/index.html","2e2e8d3ed0d75a7b9d9ad509a7f9c6ec"],["/posts/b9ab9265/index.html","9253d939a0d77cced3a81d1a58a3c312"],["/posts/c733a53b/index.html","b68fee3b9e1eea755c114c3fdb786ecf"],["/posts/d92292e2/index.html","267b350a4bd3c8807ed739c7e3d226e9"],["/posts/dd3e8958/index.html","e7b438d6903c9c768550137a849c8c3e"],["/posts/e1f9f17c/index.html","6e07b66458ace6a391c743e442402c98"],["/posts/ebe9edfc/index.html","99add0a8b8625ceb0a455abf52f4678b"],["/posts/f096f3bc/index.html","05c85bdbfa18fd282ed15c0ef0d7b0ed"],["/posts/f09c9fef/index.html","ba11c23748b7ab014d007407ae77e105"],["/steamgames/index.html","08314e80c2ab2eb982156736e586bfd8"],["/tags/APlayer/index.html","888695720cc4b297d756495cb9de168a"],["/tags/Aria2/index.html","ef4ebb5bbe0ba34d8d483ad470d47db1"],["/tags/Chrome/index.html","9d3bb7072808ddc4551dcede526a6000"],["/tags/Hexo/index.html","4f9750a3fc820df32e4777e70bd97b82"],["/tags/JavaScript/index.html","f54c18809de087840650825da45a8e53"],["/tags/Linux/index.html","ecfd9642fbe53131625278cdacc50113"],["/tags/NodeJs/index.html","339ef4ffad51c563716f1e256060f8dc"],["/tags/WebUI/index.html","ad2a87db4bfd22df8769ebb4ccac0145"],["/tags/addThis/index.html","3d4da5c70b3ab3260289c843e086ccc1"],["/tags/aria2/index.html","5c867abc8ce1b4a09d7a44877d707759"],["/tags/bangumi/index.html","ee5dac7bb9465086df2f999a9188a8ad"],["/tags/bat/index.html","8ea9ef21dfdea682ef9d5fc21a6ace1e"],["/tags/bilibili/index.html","800920c88f4f66c8d0b70e43b33790ed"],["/tags/game/index.html","f36407dba98269523d0805cd702de02e"],["/tags/index.html","f676a8c583a1afa7e9e3e29091c6dd0f"],["/tags/ip/index.html","a29185e47c96d28406cd80f2fb9f6046"],["/tags/key/index.html","0fcaaf7de6c52aa36f7347456a31aec2"],["/tags/live2d/index.html","129f269372c59df99f4e162666c56727"],["/tags/module/index.html","1b8a025f466ee987f49e5b196737fa73"],["/tags/online/index.html","52ffddae114e2336e5e9fb43ab0f4830"],["/tags/ownCloud/index.html","765ce782f860dd4ae4180e96552c69ca"],["/tags/pixiv/index.html","4404b7b45e6da78867c1c9e184d1ad16"],["/tags/server/index.html","b04aea2d342c8d7ad4603ed6fa77ff24"],["/tags/steam/index.html","7ca6d12d2a4104c64c577da69059a4de"],["/tags/steam激活码/index.html","567ff767f4ee0c5a79ff620b028fd56b"],["/tags/tag/index.html","7cdc11bf6eb30de4aa7ad6f7e5da101f"],["/tags/webui/index.html","29dea1c284f293c602e928bf5b9ae6fa"],["/tags/一言/index.html","d9a43046b3fd14a187685d92cdbc60fa"],["/tags/下载软件/index.html","c6d629f96279ce749dee69b15b83d22f"],["/tags/分享/index.html","13a6f2bc20f6a2642a6d3c970b3072e7"],["/tags/哔哩哔哩/index.html","2d27f293185bdf2bc3b1c96a69ade2c2"],["/tags/图形界面/index.html","6a5ee8c99284fa60fd6e75db0db835bd"],["/tags/图片签名档/index.html","4eb90bd1b5e264fc56a37ed27ad35511"],["/tags/天气/index.html","e35881143ebef37a8b78c98e2888da42"],["/tags/小部件/index.html","1623d3bead275762e4d144e6cf105428"],["/tags/插件/index.html","76c22078f2c567535a1180655b24d505"],["/tags/日历/index.html","35b59a1bc1985d222b4c989183141017"],["/tags/浏览器/index.html","a3ed8423028649ece8b30b991cfbb4ad"],["/tags/游戏/index.html","0fd1a1949b16b553bd6125ab4ea8b72b"],["/tags/看板娘/index.html","03643e1407fbc92662f1791cb3804c0f"],["/tags/硬盘/index.html","39e399c624f3553a46048c17fae75c1b"],["/tags/社交/index.html","a1cc87904763d0dfebf3f998f03b23ee"],["/tags/签名档/index.html","f46a65a31b43a085bd235bc443b4d74b"],["/tags/网页/index.html","07aec0113ee71e3e1dfb663a101b3ace"],["/tags/网页特效/index.html","a5d9b4b2b06b4a179056ebc1f5a42518"],["/tags/脚本/index.html","ca630be60a58f857462e1396d5215dee"],["/tags/自动任务/index.html","9d8037fcda6f9644a1bda89cc1b6dc29"],["/tags/访客地图/index.html","a668785b84d3c38582ee759e26d52c4c"],["/tags/音乐播放器/index.html","381bd48ce663351e97a42c5b2c8ab893"],["/tags/鼠标特效/index.html","d952d468cc253ca9a41b3bf546200de4"],["/whoami/index.html","51f447925ad7f6be4ffc597a092767b7"]];
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




