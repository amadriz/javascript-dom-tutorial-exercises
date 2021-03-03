window.onload = function() {
	console.log("The website was loaded...");
	let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

	// your code here
	let allCountries = [];
	// recorre el arreglo
	for (let i = 0; i < countries.length; i++) {
		// Crear la el tag o elemento option
		let node = document.createElement("option");
		// Crear atributo del input value y agregarle items del array
		node.setAttribute("value", countries[i]);
		let textNode = document.createTextNode(countries[i]);
		node.appendChild(textNode);
		allCountries = document.getElementById("mySelect").appendChild(node);
	}
	return allCountries;
};

function displayAlert(country) {
	alert(country);
}
