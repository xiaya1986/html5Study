//CSS3D
(function(){	//brwoser
	browser = navigator.userAgent.toLowerCase();
	isIE 		= find(browser, "msie");
	isIphone 	= find(browser, "iphone");
	isFirefox 	= find(browser, "irefox");
	isOpera 	= find(browser, "pera");
})
();

function find(a,b){
	 return a.indexOf(b)+1;
}
function set3D(obj, change){
	obj.change(change);
	var z = obj.state;
	var s = ([
		'rotateX(', z.rx || 0, 'deg) ',
		'rotateY(', z.ry || 0, 'deg) ',
		'rotateZ(', z.rz || 0, 'deg) ',
		'translate3d(', 
			z.tx || 0, 'px, ', 
			z.ty || 0, 'px, ', 
			z.tz || 0, 'px) ',
		'scale(', z.sc || 1, ')'
	]).join('');
	obj.style[pre('Transform')] = s;
}

function setStyle3D(ele, Perspective, PerspectiveOrigin){
	ele.style[pre('TransformStyle')] = 'preserve-3d';
	ele.style[pre('Perspective')] = Perspective || 1200;
	ele.style[pre('PerspectiveOrigin')] = PerspectiveOrigin || '50% 50%';
	ele.state = {rx:0, ry:0, rz:0, tx:0, ty:0, tz:0, sc:1};
	ele.change = function(obj){
		for(var i in obj){
			ele.state[i] = obj[i];
		}
	}
}

function pre(a){
	return (isFirefox
			? 'Moz'
			: (isOpera
				? 'O'
				: 'Webkit')
			) +a;
}