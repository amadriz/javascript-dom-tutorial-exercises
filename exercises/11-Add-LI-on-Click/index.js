let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
	let list = document.createElement("li");
	let text = document.createTextNode("Forth Element");

	list.appendChild(text);
	document.getElementById("myList").appendChild(text);
});
