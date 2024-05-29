import loadingRenderedData from "./renderData.js";

const APIselect = document.getElementById("exchange")

let currencies

const getData = async () => {
	try {
		const response = await fetch(`http://localhost:4000/`)
		const data = await response.json()
		console.log(data);
		// APIselect.addEventListener("change", ()=>loadingRenderedData(data.conversion_rates))
		
	} catch (error) {
		console.log("Something went wrong!", error);
	}
	
}
window.addEventListener("DOMContentLoaded", getData)



