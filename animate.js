function animate3D(ele, from_obj, to_obj, duration, func, delay){
	var startTime = new Date();
	var from = merge({rx:0, ry:0, rz:0, tx:0, ty:0, tz:0,sc:1}, from_obj);
	var to   = merge({rx:0, ry:0, rz:0, tx:0, ty:0, tz:0,sc:1}, to_obj);
	
	delay = delay || 0;
	if(delay){
		setTimeout(go, delay);
	}else{
		go();
	}
	
	function go(){
		var nowTime = new Date();
		
		if(nowTime - startTime - delay > duration){
			return;
		}
		
		var t = nowTime - startTime - delay;
		set3D(ele, {
			  rx: func(t, from.rx, to.rx-from.rx, duration)
			 ,ry: func(t, from.ry, to.ry-from.ry, duration)
			 ,rz: func(t, from.rz, to.rz-from.rz, duration)
			 ,tx: func(t, from.tx, to.tx-from.tx, duration)
			 ,ty: func(t, from.ty, to.ty-from.ty, duration)
			 ,tz: func(t, from.tz, to.tz-from.tz, duration)
			 ,sc: func(t, from.sc, to.sc-from.sc, duration)
		});
		
		setTimeout(go, 30);
	}
}