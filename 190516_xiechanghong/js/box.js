function Box(parent, options) {
	options = options || {};
	this.width = options.width || 20;
	this.height = options.height || 20;
	this.color = options.color || 'pink';
	this.x = options.x || 0;
	this.y = options.y || 0;

	this.parent = parent;
	this.init();
}
var position = 'absolute';
Box.prototype.init = function() {
	var box = document.createElement('div');
	box.style.width = this.width + 'px';
	box.style.height = this.height + 'px';
	box.style.backgroundColor = this.color;
	box.style.position = position;
	box.style.left = this.x + 'px';
	box.style.top = this.y + 'px';
	this.parent.appendChild(box);
}
Box.prototype.random = function() {
	var x = getRandom(0, this.parent.offsetWidth / this.width - 1) * this.width;
	var y = getRandom(0, this.parent.offsetHeight / this.height - 1) * this.height;
	return {
		x: x,
		y: y
	}

}

// 测试代码
// var parent = document.getElementById('box');
// var box = new Box(parent);

box.js
