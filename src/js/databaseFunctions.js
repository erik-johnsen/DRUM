import firebaseConfig from "./firebaseConfig";
import {initializeApp} from 'firebase/app'
import {getFirestore, collection, deleteDoc, doc, onSnapshot, addDoc} from 'firebase/firestore'
initializeApp(firebaseConfig)
const database = getFirestore()
const wineCollection = collection(database, 'wineCollection')
const wineArray = []
// GET DATA FROM DATABASE
onSnapshot(wineCollection, (snapshot)=>{
	
	snapshot.docs.forEach(item => {
		wineArray.push({id: item.id, ...item.data()})
	})

})

// GET INPUT DATA

const dateInput = document.querySelector(".pre-tasting-questions_date-input")
const hostInput = document.querySelector(".pre-tasting-questions_host-input")
const nameInput = document.querySelector(".tasting-questions_info-name-input")
const typeInput = document.querySelector(".tasting-questions_info-type-input")
const yearInput = document.querySelector(".tasting-questions_info-year-input")
const producerInput = document.querySelector(".tasting-questions_info-producer-input")
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

const averageScoreContainer = document.querySelector(".tasting-questions_average-score_number")

// getting and updating the average score 
// FIX THIS

let totalScore = 0
let averageScore = 0
allScore.forEach((score, index)=> {
	score.addEventListener("change", ()=> {
		totalScore += Number(score.value) 
		averageScore = totalScore / (index + 1)
		averageScore = Math.round(averageScore * 10) / 10
		console.log(averageScore);
		averageScoreContainer.textContent = `${averageScore}p`
	})

})


addWineForm.addEventListener("submit", (e)=> {
	e.preventDefault()
	const newWine = {
		date: dateInput.value,
		host: hostInput.value,
		name: nameInput.value,
		type: typeInput.value,
		year: Number(yearInput.value),
		producer: producerInput.value,
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
		averageScoreContainer = "- - -"
	})
	.catch((error)=> {
		console.log(error.message);
	})
})




export default wineArray