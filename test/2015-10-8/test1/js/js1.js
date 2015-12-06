window.onload = function  () {
	var oli = document.getElementsByTagName('li');
	function achange (li) {
		var ap = li.getElementsByTagName('p')[0];
		var adiv = li.getElementsByTagName('div')[0];
		li.onmouseover = function  () {
			ap.style.display = "none";
			adiv.style.display = "block";
		}
		li.onmouseout = function  () {
			ap.style.display = "block";
			adiv.style.display = "none";
		}
	}
	for (var i = 0; i < oli.length; i++) {
		achange(oli[i]);
	};
}