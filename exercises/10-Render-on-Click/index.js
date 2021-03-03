let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let elem = document.createElement("div");
	elem.innerHTML = "Hello World";

	document.body.appendChild(elem).style.background = "yellow";
});
