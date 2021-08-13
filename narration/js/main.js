var imageList = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg'];
var curr = 0;

function main() {
	document.querySelectorAll('.btn-gallery').forEach(function(e) {
		e.onclick=display;
	});
	document.querySelector('#btn-prev').onclick = prev;
	document.querySelector('#btn-next').onclick = next;
	onkeydown = function(e) {
		if (e.keyCode == 32) {
			next();
		}
	};
}

function display() {
	document.querySelector('#form1').style.display = 'none';
	document.querySelector('#gallery').style.display = 'block';
}

function next() {
	if (curr == imageList.length - 1) {
		return false;
	}
	curr += 1;
	document.querySelector('#img-main').src = imageList[curr];
	if (curr == imageList.length - 1) {
		document.querySelector('#btn-next').disabled = true;
	}
	if (curr > 0) {
		document.querySelector('#btn-prev').disabled = false;
	}
}

function prev() {
	if (curr == 0) {
		return false;
	}
	curr -= 1;
	document.querySelector('#img-main').src = imageList[curr];
	if (curr < imageList.length - 1) {
		document.querySelector('#btn-next').disabled = false;
	}
	if (curr == 0) {
		document.querySelector('#btn-prev').disabled = true;
	}
}

addEventListener('load', main, false);
