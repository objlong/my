window.onload = function  () {
	var img1 = document.getElementById('img1');
	var btn = document.getElementById('btn');
	var ul1 = document.getElementById('ul1');
	var text1 = document.getElementById('text1')
	var a = true;
	img1.onclick = function  () {
		// 图片切换	
		if (a == true) {
			img1.src = "images/2.jpg";
			a = false ;
		} else{
			img1.src = "images/1.jpg";
			a = true
			};
	}
	btn.onclick = function	() {
		//内容输入
		if (a) {
			ul1.innerHTML =  
			'<li class="li1" ><img src = "images/1.jpg" class="img2" /><span>'
			+text1.value+ '</span></li><br/>'+ul1.innerHTML;
		} else{
			ul1.innerHTML = 
			'<li class="li2"><img src = "images/2.jpg" class="img3"/><span>'
			+text1.value+'</span></li><br/>'+ul1.innerHTML;
		};
		text1.value = "";
	}

}