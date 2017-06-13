window.onload = function(){
	document.getElementById("allyn-pic").onclick = a_showDiv;
	document.getElementById("lincy-pic").onclick = l_showDiv;

	console.log("script");
}

function a_showDiv() {
	var div = document.getElementById("allyn-div");
	if (div.style.display === 'none') {
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none';
	}
}

function l_showDiv() {
	var div = document.getElementById("lincy-div");
	if (div.style.display === 'none') {
		div.style.display = 'block';
	}
	else{
		div.style.display = 'none';
	}
}