import firebaseConfig from "./firebaseConfig";
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, deleteDoc, doc, onSnapshot, addDoc, Firestore} from 'firebase/firestore'
import loadingRenderedData from "./renderData";
initializeApp(firebaseConfig)
const database = getFirestore()
const wineCollection = collection(database, 'wineCollection')
const wineArray = []
// GET DATA FROM DATABASE
onSnapshot(wineCollection, (snapshot)=>{
	
	snapshot.docs.forEach(item => {
		wineArray.push({id: item.id, ...item.data()})
	})
	wineArray.sort((a, b) => a.name.localeCompare(b.name))
})
console.log(wineArray);


// GET INPUT DATA

const dateInput = document.querySelector(".pre-tasting-questions_date-input")
const hostInput = document.querySelector(".pre-tasting-questions_host-input")
const nameInput = document.querySelector(".tasting-questions_info-name-input")
const typeInput = document.querySelector(".tasting-questions_info-type-input")
const yearInput = document.querySelector(".tasting-questions_info-year-input")
const producerInput = document.querySelector(".tasting-questions_info-producer-input")
const areaInput = document.querySelector(".tasting-questions_info-area-input")
const countryInput = document.querySelector(".tasting-questions_info-country-input")
const priceInput = document.querySelector(".tasting-questions_info-price-input")
const MJscoreInput = document.querySelector(".tasting-questions_score-MJ-input")
const HSscoreInput = document.querySelector(".tasting-questions_score-HS-input")
const BALscoreInput = document.querySelector(".tasting-questions_score-BAL-input")
const LPWscoreInput = document.querySelector(".tasting-questions_score-LPW-input")
const NIBscoreInput = document.querySelector(".tasting-questions_score-NIB-input")
const JRscoreInput = document.querySelector(".tasting-questions_score-JR-input")

const allScore = document.querySelectorAll(".score-input")

const addWineForm = document.querySelector('.add_wine-form')
const submitButton = document.querySelector(".tasting-questions-button_submit")
const addAnotherWineButton = document.querySelector(".tasting-questions-button_add-wine")

const landingPage = document.querySelector(".landing-page")
const addWinePage = document.querySelector(".add_wine-page")

const averageScoreContainer = document.querySelector(".tasting-questions_average-score_number")

const addWineNumber = document.querySelector(".tasting-questions-title")
let wineNumber = 1


// getting and updating the average score 
// FIX THIS

let totalScore = 0
let averageScore = 0
allScore.forEach((score, index)=> {
	score.addEventListener("change", ()=> {
		totalScore += Number(score.value) 
		averageScore = totalScore / (index + 1)
		averageScore = Math.round(averageScore * 10) / 10
		averageScoreContainer.textContent = `${averageScore}p`
	})

})

const addWineToDatabase = ()=> {
	const newWine = {
		date: dateInput.value,
		host: hostInput.value,
		name: nameInput.value,
		type: typeInput.value,
		year: Number(yearInput.value),
		producer: producerInput.value,
		area: areaInput.value,
		country: countryInput.value,
		price: Number(priceInput.value),
		MJ: Number(MJscoreInput.value),
		HS: Number(HSscoreInput.value),
		BAL: Number(BALscoreInput.value),
		LPW: Number(LPWscoreInput.value),
		NIB: Number(NIBscoreInput.value),
		JR: Number(JRscoreInput.value),
		score: averageScore
	}
	addDoc(wineCollection, newWine)
	.then(()=> {
		console.log("it worked");
		addWineForm.reset()
		averageScoreContainer.textContent = "- - -"
	})
	.catch((error)=> {
		console.log(error.message);
	})

	window.scrollTo({top: 0, behavior: "smooth"})

	// resets the average score
	totalScore = 0
	averageScore = 0
	
}


submitButton.addEventListener("click", (e)=> {
	e.preventDefault()
	addWineToDatabase()
	loadingRenderedData()
	landingPage.classList.add("active-flex")
	addWinePage.classList.remove("active-flex")
	
	wineNumber = 1
	addWineNumber.textContent = `Vin nr. 0${wineNumber}`
})	

addAnotherWineButton.addEventListener("click", (e)=> {
	e.preventDefault()
	addWineToDatabase()
	addWineNumber.textContent = `Vin nr. 0${wineNumber += 1}`
})




// submitButton.addEventListener("click", ()=> {
	
// 	importArray.forEach((item)=> {

// 		// replacing , with . 

// 		const newPrice = item.Price.replace(",", ".")
// 		const newMJ = item.MJ.replace(",", ".")
// 		const newHS = item.HS.replace(",", ".")
// 		const newBAL = item.BAL.replace(",", ".")
// 		const newLPW = item.LPW.replace(",", ".")
// 		const newNIB = item.NIB.replace(",", ".")
// 		const newJR = item.JR.replace(",", ".")
// 		const newScore = item.Score.replace(",", ".")

// 		const newWine = {
// 		date: item.Tasting,
// 		host: item.Host.toUpperCase(),
// 		name: item.Wine,
// 		type: item.Type,
// 		year: Number(item.Year),
// 		producer: item.Producer,
// 		country: item.Country,
// 		price: Number(newPrice),
// 		MJ: (newMJ === "") ? 0 : Number(newMJ),
// 		HS: (newHS === "") ? 0 : Number(newHS),
// 		BAL: (newBAL === "") ? 0 : Number(newBAL),
// 		LPW: (newLPW === "") ? 0 : Number(newLPW),
// 		NIB: (newNIB === "") ? 0 : Number(newNIB),
// 		JR: (newJR === "") ? 0 : Number(newJR),
// 		score: Number(newScore)
		
// 	}

// 	addDoc(wineCollection, newWine)
// 	.then(()=> {
// 		console.log("it worked");
// 		addWineForm.reset()
// 		averageScoreContainer.textContent = "- - -"
// 	})
// 	.catch((error)=> {
// 		console.log(error.message);
// 	})
// 	})
	

// 	window.scrollTo({top: 0, behavior: "smooth"})
// })

// fix this, names have commas in them

export default wineArray