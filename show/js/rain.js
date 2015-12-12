window.onload = function  () {
	var bg = document.getElementById('rain');
	var page1 = document.getElementById('page1');
	var width = bg.width = page1.clientWidth;
	var height = bg.height = page1.clientHeight;
	window.onresize = function  () {
		height = bg.height = page1.clientHeight;
		width = bg.width = page1.clientWidth;
	}
	var letters = Array(256).join(1).split('');
	var draw = function () {
	    bg.getContext('2d').fillStyle = 'rgba(0,0,0,.05)';
	    bg.getContext('2d').fillRect(0, 0, width, height);
	    bg.getContext('2d').fillStyle = '#0F0';
	    letters.map(function (y_pos, index) {
	        var text = Math.round(Math.random())
	        var x_pos = index * 30;
	        bg.getContext('2d').fillText(text, x_pos, y_pos);
	        letters[index] = (y_pos > 758 + Math.random() * 1e4) ? 0 : y_pos + 15;
	    });
	};
	setInterval(draw, 33);
}
