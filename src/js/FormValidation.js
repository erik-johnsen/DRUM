// get the inputfields

const dateInput = document.querySelector('.pre-tasting-questions_date-input');
const hostInput = document.querySelector('.pre-tasting-questions_host-input');
const nameInput = document.querySelector('.tasting-questions_info-name-input');
const typeInput = document.querySelector('.tasting-questions_info-type-input');
const yearInput = document.querySelector('.tasting-questions_info-year-input');
const producerInput = document.querySelector(
  '.tasting-questions_info-producer-input'
);
const areaInput = document.querySelector('.tasting-questions_info-area-input');
const countryInput = document.querySelector(
  '.tasting-questions_info-country-input'
);
const priceInput = document.querySelector(
  '.tasting-questions_info-price-input'
);

const allMandatoryInputs = document.querySelectorAll(".mandatory-inputs")

const formVali = () => {
  if (
    !dateInput.value.trim() ||
    !hostInput.value.trim() ||
    !nameInput.value.trim() ||
    !yearInput.value.trim() ||
    !producerInput.value.trim() ||
    !areaInput.value.trim() ||
    !countryInput.value.trim() ||
    !priceInput.value.trim() ||
	typeInput.value === "velg"
  ) {
	allMandatoryInputs.forEach((input) => {
		!input.checkValidity() ? input.classList.add("missing-input") : input.classList.remove("missing-input")
		window.scrollTo({top: 0, behavior: "smooth"})
	})
	return false
  } else {
	return true
  }
};

// removes red outline when user types in the field

allMandatoryInputs.forEach((input)=> {
	input.addEventListener("change", ()=> {
		input.classList.remove("missing-input")
	})
})


export default formVali