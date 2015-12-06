window.onload = function  () {
	var img1 = document.getElementById('img1'),
		img2 = document.getElementById('img2'),
		p1 = document.getElementById('p1'),
		p2 = document.getElementById('p2'),
		p3 = document.getElementById('p3'),
		p4 = document.getElementById('p4'),
		imgs1 = ['pic1-1.jpg','pic1-2.jpg','pic1-3.jpg','pic1-4.jpg'],
		imgs2 = ['pic2-1.jpg','pic2-2.jpg','pic2-3.jpg'],
		aa = document.getElementsByTagName('a'),
		n1 = 0,
		n2 = 0;
	img1.onclick = function  () {
		n1++;
		if (n1>3) {
			n1=0;
		}
		this.src = 'images/'+imgs1[n1];
		p1.innerHTML = '第一组图片第'+(n1+1)+'张';
		p2.innerHTML = (n1+1)+'/4';
	}//第一组轮播
	img2.onclick = function  () {
		n2++;
		if (n2>2) {
			n2=0
		}
		this.src = 'images/'+imgs2[n2];
		p3.innerHTML = '第二组图片第'+(n2+1)+'张';
		p4.innerHTML = (n2+1)+'/3';
	}//第二组轮播
	aa[0].onclick = function  () {
		n1--;
		if(n1<0){
			n1=3;
		}
		img1.src = 'images/'+imgs1[n1];
		p1.innerHTML = '第一组图片第'+(n1+1)+'张';
		p2.innerHTML = (n1+1)+'/4';
		n2--;
		if (n2<0) {
			n2=2;
		}
		img2.src = 'images/'+imgs2[n2];
		p3.innerHTML = '第二组图片第'+(n2+1)+'张';
		p4.innerHTML = (n2+1)+'/3';
	}
	aa[1].onclick = function  () {
		n1++;
		if (n1>3) {
			n1=0;
		}
		img1.src = 'images/'+imgs1[n1];
		p1.innerHTML = '第一组图片第'+(n1+1)+'张';
		p2.innerHTML = (n1+1)+'/4';
		n2++;
		if (n2>2) {
			n2=0
		}
		img2.src = 'images/'+imgs2[n2];
		p3.innerHTML = '第二组图片第'+(n2+1)+'张';
		p4.innerHTML = (n2+1)+'/3';
	}
}