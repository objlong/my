window.onload = function  () {
	var timer1 = 0;
	var dater = document.getElementsByTagName('input');
	var time = document.getElementsByClassName('time');
	var product = document.getElementsByClassName('product');
	var aA = document.getElementsByTagName('a');
	var tabs = document.getElementsByClassName('tab');
	var oprice = document.getElementsByClassName('price');
	var total = document.getElementsByClassName('footer')[0].getElementsByTagName('span')[0];
			for (var i = 0; i < dater.length; i++) {
				Click(i);
			};
	function Click (i) {
		if (aA[i].index) {
			return;
		}
		aA[i].index = true ;
		aA[i].onclick = function  () {
			Countdown(dater[i],time[i],function  () {
				Active(product[i],'left',function(){
					moveDown(product[i],'top',290,'product active',function(){
						show(tabs[i],'tab',i)
					})
				})			
			})
		}
	}
	function Countdown (a,content,callback) {//a:指定日期的数组；content:包含倒计时内容的标签
		var d = new Date(a.value)
		var timer1 = null;
		timer1 = setInterval(function  () {
			var t = (d.getTime() - new Date().getTime())/1000;
			t = parseInt(t);
			var day = parseInt(t/(60*60*24));
			var hours = parseInt(t%(60*60*24)/(60*60));
			var mins = parseInt(t%(60*60*24)%(60*60)/60);
			var seconds = parseInt(t%(60*60*24)%(60*60)%60);
			var b;
			b = '剩余' + addZero(day) + '天' + addZero(hours) + '小时' + addZero(mins) + '分钟' + 
			addZero(seconds) + '秒';
			content.innerHTML = b;
			if (day + hours + mins + seconds == 0) {
				clearInterval(timer1);
				callback && typeof (callback) == 'function' && callback();
			}
		},1000)
	}
	function Active (obj,attr,callback) {///obj:要获取样式的元素；attr：样式
		var arr = [];
		var n = 0;
		var timer2 = null;
		for (var i = 20; i > 0; i-=2) {
			arr.push(i,-i);
		}
		arr.push(0);
		timer2 = setInterval(function  () {
			obj.style[attr] = arr[n];
			n++;
			if (n == arr.length) {
				clearInterval(timer2);
				 callback && typeof (callback) == 'function' && callback();
			}
		},50)
	}
	function  show(obj,name,i) {
			obj.className = name;
			var price = oprice[i].getElementsByTagName('span')[0];
			total.innerHTML = parseInt(total.innerHTML) + parseInt(price.innerHTML);
	}
	function moveDown (obj,attr,l,name,callback) {/*obj:要获取样式的元素；
										attr：样式;
										l:样式要变化的极限值（最小）;
										name:动作结束后要改变的class值；*/
		var timer3 = null;
		timer3 = setInterval(function  () {
			var t = parseFloat(css(obj,attr));
			t = t+5;
			if (t >= l) {
				t = 0;
				clearInterval(timer3);
				obj.className = name;
				callback && typeof callback == 'function' && callback() ;
			};
			obj.style[attr] = t + 'px';
		},16)
		
	}
	function css (obj,attr) {//obj:要获取样式的元素；attr：样式
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		}else{
			return getComputedStyle(obj)[attr];
		}
	}
	function addZero (v) {
		if (v<10) {
			return '0'+v;
		}else{
			return v;
		}
	}
	
}