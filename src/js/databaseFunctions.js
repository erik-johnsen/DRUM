import firebaseConfig from '../../firebaseConfig.js';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  addDoc,
  Firestore,
} from 'firebase/firestore';

import loadingRenderedData from './renderData.js';
import formVali from './FormValidation.js';
initializeApp(firebaseConfig);
const database = getFirestore();
const wineCollection = collection(database, 'wineCollection');
let wineArray = [];
// GET DATA FROM DATABASE
onSnapshot(wineCollection, (snapshot) => {
  snapshot.docs.forEach((item) => {
    wineArray.push({ id: item.id, ...item.data() });
  });
  wineArray.sort((a, b) => a.name.localeCompare(b.name));
  loadingRenderedData();
});

// GET INPUT DATA

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
const MJscoreInput = document.querySelector(
  '.tasting-questions_score-MJ-input'
);
const HSscoreInput = document.querySelector(
  '.tasting-questions_score-HS-input'
);
const BALscoreInput = document.querySelector(
  '.tasting-questions_score-BAL-input'
);
const LPWscoreInput = document.querySelector(
  '.tasting-questions_score-LPW-input'
);
const NIBscoreInput = document.querySelector(
  '.tasting-questions_score-NIB-input'
);
const JRscoreInput = document.querySelector(
  '.tasting-questions_score-JR-input'
);

const allScore = document.querySelectorAll('.score-input');

const addWineForm = document.querySelector('.add_wine-form');
const submitButton = document.querySelector('.tasting-questions-button_submit');
const addAnotherWineButton = document.querySelector(
  '.tasting-questions-button_add-wine'
);

const landingPage = document.querySelector('.landing-page');
const addWinePage = document.querySelector('.add_wine-page');

const averageScoreContainer = document.querySelector(
  '.tasting-questions_average-score_number'
);

const addWineNumber = document.querySelector('.tasting-questions-title');
let wineNumber = 1;

// getting and updating the average score

const countEmptyInputs = () => {
  const scoreArray = [...allScore];
  const numberOfInputs = scoreArray.filter(
    (input) => input.value.trim() !== ''
  );
  return numberOfInputs.length;
};

let totalScore = 0;
let averageScore = 0;
allScore.forEach((score) => {
  score.addEventListener('change', () => {
    const totalScore = [
      Number(MJscoreInput.value),
      Number(HSscoreInput.value),
      Number(BALscoreInput.value),
      Number(LPWscoreInput.value),
      Number(NIBscoreInput.value),
      Number(JRscoreInput.value),
    ].reduce((sum, current) => sum + current, 0);
    const lengthOfInputs = countEmptyInputs();
    averageScore = totalScore / lengthOfInputs;
    averageScore = Math.round(averageScore * 10) / 10;
    averageScoreContainer.textContent = `${averageScore}p`;
  });
});

const addWineToDatabase = () => {
  wineArray = [];
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
    score: averageScore,
  };
  addDoc(wineCollection, newWine)
    .then(() => {
      console.log('it worked');
      addWineForm.reset();
      averageScoreContainer.textContent = '- - -';
    })
    .catch((error) => {
      console.log(error.message);
    });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // resets the average score
  totalScore = 0;
  averageScore = 0;
};

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (formVali()) {
    addWineToDatabase();
    loadingRenderedData();
    landingPage.classList.add('active-flex');
    addWinePage.classList.remove('active-flex');
    wineNumber = 1;
    addWineNumber.textContent = `Vin nr. 0${wineNumber}`;
  }
});

addAnotherWineButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (formVali()) {
    addWineToDatabase();
    addWineNumber.textContent = `Vin nr. 0${(wineNumber += 1)}`;
  }
});

export default wineArray;
