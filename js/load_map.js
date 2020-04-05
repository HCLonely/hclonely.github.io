$(window).on('load',()=>{
	if($("#visitors-map").length>0){
		if (navigator.userAgent.match(/Mobile/i)) {
			$("#visitors-map").append('<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330&cl=ffffff&w=a"></script>');
		}else{
			$("#visitors-map").append('<script type="text/javascript" id="clstr_globe" src="//cdn.clustrmaps.com/globe.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330"></script>');
		}
	}else{
		$("head").append("<style>.clustrmaps-map-control{display:none !important;}</style>");
		$("body").append('<script type="text/javascript" id="clustrmaps" src="//cdn.clustrmaps.com/map_v2.js?d=7RJAye3Doa8wj5huc-j4LftrwmQQMkdycswG6qp6330&cl=ffffff&w=a"></script>');
	}
})