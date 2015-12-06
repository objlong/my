window.onload = function  () {
	var btn = document.getElementsByTagName('a');
	var ali =document.getElementsByTagName('li');
	var aul = document.getElementsByTagName('ul')[0];
	var arr = [];
	var onOff = true;
	for (var i = 0; i < ali.length; i++) {
		arr.push(ali[i]);
	};
	console.log(arr)
	var arr2 = arr.slice(0);
	btn[0].onclick = function  () {
		arr2.reverse();
		aul.innerHTML = '';
		for (var i = 0; i < arr2.length; i++) {
			aul.innerHTML += '<li class = "tip">' + arr2[i].innerHTML + '</li>';
		}
		if (onOff) {
			btn[0].innerHTML = '从小到大'
		}else{
			btn[0].innerHTML = '从大到小'
		}
		onOff = !onOff;
	}
	btn[1].onclick = function  () {
		aul.innerHTML = '';
		arr.sort(function  () {
			return 0.5 - Math.random();
		})
		for (var i = 0; i < arr.length; i++) {
				aul.innerHTML += '<li  class = "tip">' + arr[i].innerHTML + '</li>';				
		}
	}
}