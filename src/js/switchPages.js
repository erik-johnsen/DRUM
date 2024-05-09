
const navButtons = document.querySelectorAll(".nav-button")
const pages = document.querySelectorAll(".page")

navButtons.forEach(navButton => {
	function displayPages(e){
		const clickedButton = e.currentTarget
		const pageToDisplay = clickedButton.dataset.buttons

		pages.forEach(page => {
			page.classList.remove("active-flex")
			if(page.dataset.pages === pageToDisplay) {
				page.classList.add("active-flex")
			}
		})
	}
	navButton.addEventListener("click", displayPages)
})
