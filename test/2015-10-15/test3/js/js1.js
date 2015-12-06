window.onload = function  () {
	ul1 = document.getElementById('ul1');
	li1 = ul1.getElementsByTagName('li');//获取主菜单li
	list =document.getElementById('list');
	ul2 = list.getElementsByTagName('ul');//获取子菜单ul
	li2 = list.getElementsByTagName('li');
	var timer = 0;
	for (var i = 0; i < li1.length; i++) {
		li1[i].index = i;
		ul2[i].index = i;
		li1[i].onmouseover = function  () {
			clean(ul2,'display');
			clearTimeout(timer);
			ul2[this.index].style.display = 'block';
		}
		li1[i].onmouseout = function  () {
			var dd = this;
			timer = setTimeout(function  () {
				ul2[dd.index].style.display = '';		
			},500)
		}
		ul2[i].onmouseover = function  () {

			ul2[this.index].style.display = 'block';
			clearTimeout(timer);
		}
		ul2[i].onmouseout = function  () {
			ul2[this.index].style.display = '';
		}
	}
		for (var j = 0; j < li2.length; j++) {
		li2[j].index = j;
		li2[j].onmouseover = function  () {
			clean(li2,'textDecoration');
			li2[this.index].style.textDecoration = 'underline';
		}
	};
	function clean (obj,attr) {
		for (var i = 0; i < obj.length; i++) {
			obj[i].style[attr] = '';
		};
	}

}