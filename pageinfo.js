//get the browser's viewport size
function getBViewport(){
	var h = window.innerHeight || document.documentElement.clientHeight
	        || document.body.offsetHeight;
	    w = window.innerWidth || document.documentElement.clientWidth
	        || document.body.offsetWidth;
    return {
    	bClientH: h,
    	bClientW: w
    };
}
//get the size of page of the browser
function getBPagearea(){
	var pageX = Math.max( Math.max(document.body.scrollWidth,document.body.clientWidth)
	                     ,Math.max(document.documentElement.clientWidth, document.documentElement.scrollWidth));
	    pageY = Math.max( Math.max(document.body.scrollHeight,document.body.clientHeight)
	                     ,Math.max(document.documentElement.clientHeight,document.documentElement.scrollHeight));
	return {
		pageX: pageX,
		pageY: pageY
	}
}
/* get the event's page position
 * @param
 * 		event: event object
 */
function getEvPagePos(event){
	var event = event || window.event,
	    pageX = event.pageX,
	    pageY = event.pageY;
    if(pageX === undefined){
    	pageX = event.clientX + (document.body.scrollLeft || document.documentElement.scrollLeft);
    }
    if(pageY === undefined){
    	pageY = event.clientY + (document.body.scrollTop || document.documentElement.scrollTop);
    }
	return {
		pageX: pageX,
		pageY: pageY
	};
}
/* get the element's position
 * @param
 * 		elem: element object
 */
function getElemPos(elem){
	var eTop = 0,
	    eLeft = 0;
	while(elem !== null){
		eTop += elem.offsetTop;
		eLeft += elem.offsetLeft;
		elem = elem.offsetParent;
	}
	return {
		eTop: eTop,
		eLeft: eLeft
	};
}