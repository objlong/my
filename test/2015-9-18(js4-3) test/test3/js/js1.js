window.onload = function  () {
	var imgs = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"],
		str = '',
		list = document.getElementById('list'),
		li1 = list.getElementsByTagName('li'),
		img1 = document.getElementById('img1'),
		aa = document.getElementsByTagName('a'),
		num=0;

		for (var i = 0; i < imgs.length; i++) {
			str += '<li><img src="images/'+imgs[i]+'"/><div></div></li>';
		};
		list.innerHTML = str;
		li1[0].style.background = "red";
		for (var i = 0; i < li1.length; i++) {
			li1[i].index = i;
			li1[i].onmouseover = function  () {
				if (this.index != num) {
				li1[this.index].className = "active";
				// 鼠标移入圆点显示缩略图,圆点变黄
				};
			}
			li1[i].onmouseout = function  () {
				li1[this.index].className = "";
				// 鼠标离开圆点缩略图消失，圆点还原
			}
			li1[i].onclick = function  () {
				if (this.index != num) {
					li1[num].style.background = "";
				}
				img1.src = 'images/'+imgs[this.index];
				li1[this.index].style.background = "red";
				num = this.index;
				// 鼠标点击显示相应大图
			}	
			aa[0].onclick = function  () {
				li1[num].style.background = "";
				num--;
				if (num<0) {
					num = imgs.length-1;					
				};
				li1[num].style.background = "red";
				img1.src = 'images/'+imgs[num];
				// 鼠标点击上一个
			}
			aa[1].onclick = function  () {
				li1[num].style.background = "";
				num++;
				if (num>4) {
					num = 0;
				};
				li1[num].style.background = "red";				
				img1.src = 'images/'+imgs[num];
				// 鼠标点击下一个
			}	
		};	
}