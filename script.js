window.onload = function(){
	document.getElementById("allyn-pic").onclick = a-showDiv;
	document.getElementById("lincy-pic").onclick = l-showDiv;
}

function a-showDiv() {
	var div = document.getElementById("allyn-div");
	if (div.style.display === 'none') {
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none';
	}
}

function l-showDiv() {
	var div = document.getElementById("lincy-div");
	if (div.style.display === 'none') {
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none';
	}
}