import firebaseConfig from "../../firebaseConfig.js";
import {initializeApp} from 'firebase/app'
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
initializeApp(firebaseConfig)
const authService = getAuth()

const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".page")

const loginPopup = document.querySelector(".login-popup")
const loginButton = document.querySelector(".login-button")

const loginEmail = document.querySelector(".login-email_input")
const loginPassword = document.querySelector(".login-password_input")

const addWinePage = document.querySelector(".add_wine-page")
const addWineNavButton = document.querySelector(".nav-new_form")
const loginError = document.querySelector(".popup-error")

const logoutButton = document.querySelector(".nav-loguot")
const landingPage = document.querySelector(".landing-page")

let isAthorized = false

navButtons.forEach(navButton => {
	function displayPages(e){
		const clickedButton = e.currentTarget
		const pageToDisplay = clickedButton.dataset.buttons
		
		// checks if user is logged in when clicking "ny vinsmaking"
		
		if(pageToDisplay === "add_wine" && !isAthorized) {
			loginPopup.classList.add("active-flex")
		} else {
			pages.forEach(page => {
			
			page.classList.remove("active-flex")
			if(page.dataset.pages === pageToDisplay) {
				page.classList.add("active-flex")
			}
		})
		}
		
	}
	navButton.addEventListener("click", displayPages)
})

// login popup

loginButton.addEventListener("click", (e)=> {
	e.preventDefault()
	signInWithEmailAndPassword(authService, loginEmail.value, loginPassword.value)
	.then(()=> {
		isAthorized = true
		pages.forEach(page => page.classList.remove("active-flex"))
		addWinePage.classList.add("active-flex")
		logoutButton.classList.add("active-block")
		loginPopup.classList.remove("active-flex")

	})
	.catch((error)=> {
		loginError.classList.add("active-flex")
	})

})

logoutButton.addEventListener("click", (e)=>{
	e.preventDefault()
	signOut(authService)
	.then(()=> {
		console.log("logged out")
		logoutButton.classList.remove("active-block")
		landingPage.classList.add("active-flex")
		isAthorized = false
	})
	.catch(error => console.log(error.message))
})

// function that lets the user click outside of the login box to remove it

document.addEventListener('click', function(e) {
	if (e.target !== addWineNavButton && !loginPopup.contains(e.target)) {
	  loginPopup.classList.remove('active-flex')
	  loginEmail.value = ""
	  loginPassword.value = ""
	  loginError.classList.remove("active-flex")

	}
});