window.onload = function  () {
	var ali = document.getElementsByTagName('li');
	for (var i = 0; i < ali.length; i++) {
		modify(ali[i]);
	};
	console.log()
	function modify (li) {
		var div1 = li.getElementsByTagName('div')[0];
		var div2 = li.getElementsByTagName('div')[1];
		var onmodify = li.getElementsByTagName('img')[0];
		var sure = li.getElementsByTagName('a')[1];
		var cancel = li.getElementsByTagName('a')[2];
		var span = li.getElementsByTagName('span')[0];
		var content = li.getElementsByTagName('input')[0];
		onmodify.onclick = function  () {	
			div1.style.display = 'none';
			div2.style.display = 'block';
			content.value = span.innerHTML;
		}
		sure.onclick = function (){
			div1.style.display = 'block';
			div2.style.display = 'none';
			span.innerHTML = content.value;

		}
		cancel.onclick = function(){
			div1.style.display = 'block';
			div2.style.display = 'none';
		}

	}
}