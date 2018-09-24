// 创建Ajax的核心对象
function getXhr(){
	var xhr = null;//定义核心对象
	if(window.XMLHttpRequest){//其他浏览器
		xhr = new XMLHttpRequest();
	}else{//IE浏览器
		xhr = new ActiveXObject("Microsoft.XMLHttp");
	}
	return xhr;
}