function main() {
	var parent = document.getElementById('box');
	var arr = [];
	for (var i = 0; i < 5; i++) {
		var r = getRandom(0, 255);
		var g = getRandom(0, 255);
		var b = getRandom(0, 255);
		var box = new Box(parent, {
			color: 'rgb(' + r + ',' + g + ',' + b + ')'

		})
		arr.push(box);
	}
	randomIndex();
	setInterval(randomIndex, 500);

	function randomIndex() {
		for (var i = 0; i < arr.length; i++) {
			var x = arr[i].random().x;
			var y = arr[i].random().y;
			parent.children[i].style.left = x + 'px';
			parent.children[i].style.top = y + 'px';
		}
	}

}

main.js
