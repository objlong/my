window.onload = function  () {
	var adiv = document.getElementsByTagName('div');
	for (var i = 0; i < adiv.length; i++) {
		fn(adiv[i]);
	}
	function fn (obj) {
		setTimeout(function  () {
			 move(obj,'marginTop',6,-150,function  () {
				setTimeout(function  () {
					move(obj,'marginTop',4,0,function  () {
						fn(obj)
					});
				},Math.random()*2000)
			})
		},Math.random()*4000)		
	}
	function move (obj,attr,speed,target,callback) {
		var s = parseFloat(css(obj,attr));
		var timer = null;
		timer = setInterval(function  () {
			if (s > target) {
				s = s - speed ;
				obj.style.marginTop = s + 'px';
				if (s <= target) {
					s = target;
					obj.style.marginTop =s + 'px';
					clearInterval(timer);
					callback && typeof callback == 'function' && callback();
				}
			}
			if (s < target) {
				s = s + speed ;
				obj.style.marginTop = s + 'px';
				if (s >= target) {
					s = target;
					obj.style.marginTop =s + 'px';
					clearInterval(timer);
					callback && typeof callback == 'function' && callback();
				}
			}
		},30)
	}
	function css (obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
	function del (arr) {
		for (var i = 0; i < arr.length; i++) {
			var a = arr[i];
			for (var j = i+1; j < arr.length; j++) {
				var b = arr[j];
				if (a == b) {
					arr.splice(j,1);
				}
			}
		}
		return arr;
	}
	function ss (string) {
		for (var i = 0; i < string.length; i++) {
			var a = string.charAt(i);
			if (Number(a)||(a>='a'&&a<='z')||(a>='A'&&a<='Z')) {
				alert('这是一个仅由数字和字母组成的字符串')
				continue;
			}else{
				alert('这不是一个仅由数字和字母组成的字符串')
			}
		};
	}
	function ss1 (string) {
		for (var i = 0; i < string.length; i++) {
			var a = string.charAt(i);
			if (!Number(a)&&(a<'a'||a>'z')&&(a<'A'||a>'Z')) {
				alert('这不是一个仅由数字和字母组成的字符串')
				continue;
			}else{
				alert('这是一个仅由数字和字母组成的字符串')
			}
		};
	}
	var a = [1,2,2,3,4,5,2,7]
	console.log(del(a));

}