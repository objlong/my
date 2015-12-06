window.onload = function  () {
	var p1 = document.getElementsByClassName('p1'),
		ul2 = document.getElementsByClassName('ul2'),
		li2 = document.getElementsByClassName('li2');
		for (var i = 0; i < p1.length; i++) {
			p1[i].index = i;
			p1[i].onclick = function  () {
				p1[this.index].style.backgroundColor = 'yellow';
				if(ul2[this.index].style.display == 'none')
				{
					ul2[this.index].style.display = "block";
					p1[this.index].style.backgroundColor = 'yellow';
				}else{
					ul2[this.index].style.display = "none";
					p1[this.index].style.backgroundColor = '#00FFCA';
				}
				
			}


		};//点击展开关闭事件
		var t = null;
		for (var j = 0; j < li2.length; j++) {
			li2[j].index = j;
			li2[j].onclick = function  () {
				if (t) {
					t.style.backgroundColor = "";
				}
				li2[this.index].style.backgroundColor = "blue";		
				t=this;
				
			}
		};

}