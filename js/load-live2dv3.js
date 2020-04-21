"use strict";

$(document).ready(function () {
  if (navigator.userAgent.match(/Mobile/i)) return;
  var models = {
    'l2dmodelv3_1@1.0.1': ['aidang_2', 'aierdeliqi_4', 'aierdeliqi_5', 'aimierbeierding_2', 'banrenma_2', 'beierfasite_2', 'biaoqiang', 'biaoqiang_3'],
    'l2dmodelv3_2@1.0.1': ['bisimai_2', 'chuixue_3', 'dafeng_2', 'dafeng_4', 'deyizhi_3', 'dujiaoshou_4', 'dunkeerke_2', 'genaisennao_2', 'heitaizi_2'],
    'l2dmodelv3_3@1.0.1': ['huangjiafangzhou_3', 'huonululu_3', 'huonululu_5', 'junhe_5', 'kelifulan_3', 'lafei', 'lafei_4', 'lingbo'],
    'l2dmodelv3_4@1.0.1': ['longfeng_2', 'mingshi', 'nengdai_2', 'ninghai_4', 'ouruola_4', 'pinghai_4', 'qibolin_2', 'shengluyisi_2'],
    'l2dmodelv3_5@1.0.1': ['shengluyisi_3', 'sipeibojue_5', 'taiyuan_2', 'tianlangxing_3', 'tierbici_2', 'weiyan_2', 'wuqi_2', 'xianghe_2', 'xixuegui_4'],
    'l2dmodelv3_6@1.0.3': ['xuefeng', 'xuefeng_3', 'xukufu_2', 'yichui_2', 'z23', 'z46_2', 'kubo_2', 'junhe_5'],
    'l2dmodelv3_7@0.0.2': ['zhala_2', 'z46_3']
  };

  function getModel(idx) {
    for (var i in models) {
      if (idx < models[i].length) {
        return [i, models[i][idx]];
      } else {
        idx = idx - models[i].length;
      }
    }
  }

  var l2dmodel = getModel(Math.ceil(new Date().getTime() / (1000 * 60 * 60 * 24)) % 52);
  new l2dViewer({
    el: document.getElementById('L2dCanvas'),
    basePath: 'https://cdn.jsdelivr.net/npm/' + l2dmodel[0],
    modelName: l2dmodel[1],
    width: 500,
    height: 300
  });
});