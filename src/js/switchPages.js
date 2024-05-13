import firebaseConfig from "../../firebaseConfig";
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

navButtons.forEach(navButton => {
	function displayPages(e){
		const clickedButton = e.currentTarget
		const pageToDisplay = clickedButton.dataset.buttons
		if(pageToDisplay === "add_wine") {
			loginPopup.style.display = "flex"
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

loginButton.addEventListener("click", (e)=> {
	e.preventDefault()
	signInWithEmailAndPassword(authService, loginEmail.value, loginPassword.value)
	.then(()=> {
		console.log("it works");
	})
	.catch((error)=> {
		console.log(error);
	})

})