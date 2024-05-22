import EXCHANGE_KEY from "../../APIkey";
import loadingRenderedData from "./renderData";

const APIselect = document.getElementById("exchange")

let currencies

const getData = async () => {
	try {
		const response = await fetch(`https://v6.exchangerate-api.com/v6/${EXCHANGE_KEY}/latest/NOK`)
		const data = await response.json()

		APIselect.addEventListener("change", ()=>loadingRenderedData(data.conversion_rates))
		
	} catch (error) {
		console.log("Something went wrong!", error);
	}
	
}
window.addEventListener("DOMContentLoaded", getData)



