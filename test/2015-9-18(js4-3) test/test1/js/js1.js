window.onload = function  () {
	var div1 = document.getElementById('div1'),
		oa = div1.getElementsByTagName('a'),
		next = document.getElementsByClassName('a1')[0],
		prev = document.getElementsByClassName('a2')[0],
		img = document.getElementsByTagName('img')[0],
		p1 = document.getElementsByClassName('p1')[0],
		p2 = document.getElementsByClassName('p2')[0],
		n = 0;
		oa[0].onclick = function  () {
			prev.onclick = function  () {
				n--;
				if (n<0) {
					n=4;
				};
				img.src = 'images/'+n+'.jpg';
				p1.innerHTML = n+'/4';
				p2.innerHTML = '文字效果'+n;
			}//循环倒退
			next.onclick = function  () {
				n++;
				n%=5;
				img.src = 'images/'+n+'.jpg';
				p1.innerHTML = n+'/4';
				p2.innerHTML = '文字效果'+n;
			}//循环前进
			
		}//循环模式					
		oa[1].onclick = function  () {
			prev.onclick = function  () {
				
				if (n==0) {
						
					alert('已经是第一张了');			
				}else{
					n--;
				}
				img.src = 'images/'+n+'.jpg';
				p1.innerHTML = n+'/4';
				p2.innerHTML = '文字效果'+n;
			}
			next.onclick = function  () {
				if (n == 4) {
					alert('已经是最后一张了');
				}else{
					n++;
				}
				img.src = 'images/'+n+'.jpg';
				p1.innerHTML = n+'/4';
				p2.innerHTML = '文字效果'+n;
			}
			
		}//顺序模式
	
}