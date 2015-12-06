window.onload = function  () {
	var btn1 = document.getElementById('top').getElementsByTagName('a');
	var btn2 = document.getElementById('cen').getElementsByTagName('a');
	var ul1 = document.getElementById('cen').getElementsByTagName('ul')[0];

	var ul2 = document.getElementById('show').getElementsByTagName('ul')[0];
	var num = document.getElementById('top').getElementsByTagName('input')[0];
	var colorarr = ['red','yellow','blue','green','pink','gray'];
	var n = 0;
	var m = 0;
	var ali1arr = new Array();
	var ali2arr = new Array();
	btn1[1].onclick = function  () {
		ali2arr.push('<li style = "background:' + colorarr[n%6] + '">'+(n+1)+'</li>');
		ul2.innerHTML = '';
		for (var i = 0; i < ali2arr.length; i++) {
			ul2.innerHTML += ali2arr[i];
		}		
		if (n%3 == 0) {
			ali1arr.push('<li>' + '</li>');
			ul1.innerHTML = '';
			for (var i = 0; i < ali1arr.length; i++) {
				ul1.innerHTML += ali1arr[i];
			}
		}
		n++;
		num.value = n;
		ul2.style.width = 171*n + 'px';

	}
	btn1[0].onclick = function  () {
		ali2arr.pop('<li style = "background:' + colorarr[n%6] + '">'+(n+1)+'</li>');
		ul2.innerHTML = '';
		for (var i = 0; i < ali2arr.length; i++) {
			ul2.innerHTML += ali2arr[i];
		}
		if (n%3 == 0) {
			ali1arr.pop('<li>' + '</li>');
			ul1.innerHTML = '';
			for (var i = 0; i < ali1arr.length; i++) {
				ul1.innerHTML += ali1arr[i];
			}	
		}
		n--;
		if (n < 0) {
			n = 0
		}
		num.value = n;
		ul2.style.width = 171*n + 'px';

	}
	btn2[0].onclick = function  () {
		m++;
		if (m<=n/3) {
		move(ul2,'marginLeft',20,-513*m)
		var li1 = ul1.getElementsByTagName('li');
		active(li1,'active',m);
		}else{
			m = Math.floor(n/3);
		}

	}
	btn2[1].onclick = function  () {
		m--;
		if (m>=0) {
		move(ul2,'marginLeft',20,-513*m)
		var li1 = ul1.getElementsByTagName('li');
		active(li1,'active',m);
		}else{
			m = 0;
		}

	}
	function active (obj,name,m) {
		for (var i = 0; i < obj.length; i++) {
			obj[i].className = '';
		}
		obj[m].className = name;
	}
	function move (obj,attr,speed,target,callback) {
		var s = parseFloat(css(obj,attr));
		var timer = null;
		timer = setInterval(function  () {
			if (s > target) {
				s = s - speed ;
				obj.style[attr] = s + 'px';
				if (s <= target) {
					s = target;
					obj.style[attr] =s + 'px';
					clearInterval(timer);
					callback && typeof callback == 'function' && callback();
				}
			}
			if (s < target) {
				s = s + speed ;
				obj.style[attr] = s + 'px';
				if (s >= target) {
					s = target;
					obj.style[attr] =s + 'px';
					clearInterval(timer);
					callback && typeof callback == 'function' && callback();
				}
			}
		},30)
		function css (obj,attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
	}
}