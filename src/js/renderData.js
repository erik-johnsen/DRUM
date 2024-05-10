import wineArray from './databaseFunctions';
const tableContent = document.querySelector('.table-content');

// SETTIMEOUT is a temp solution
setTimeout(() => {
  wineArray.forEach((item) => {
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('table-item');
    tableContent.append(itemContainer);

    // creating and appending the accordion title

    const accordionTitle = document.createElement('div');
    const accordionContent = document.createElement('div');

    accordionTitle.classList.add('table-item_accordion-title');
    accordionContent.classList.add('table-item_accordion-content');
    itemContainer.append(accordionTitle, accordionContent);

    const name = document.createElement('span');
    const year = document.createElement('span');
    const price = document.createElement('span');
    const type = document.createElement('span');
    const score = document.createElement('span');
    const caret = document.createElement('span');

    const caretImg = document.createElement('img');
    caretImg.src = '../src/assets/SVG/caret-accordion.svg';
    caret.append(caretImg);

    name.classList.add('table-name');
    name.textContent = item.name;
    year.classList.add('table-year');
    year.textContent = item.year;
    price.classList.add('table-price');
    price.textContent = item.price;
    type.classList.add('table-type');
    type.textContent = item.type;
    score.classList.add('table-score');
    score.textContent = item.score;
    caret.classList.add('table-caret');

    accordionTitle.append(name, year, price, type, score, caret);

    // creating and appending the accordion content

    const producerContainer = document.createElement('div');
    const producerTitle = document.createElement('div');
    const producerInfo = document.createElement('div');

    producerContainer.classList.add('table-item_accordion-content_producer');
    producerContainer.append(producerTitle, producerInfo);

    const areaContainer = document.createElement('div');
    const areaTitle = document.createElement('div');
    const areaInfo = document.createElement('div');

    areaContainer.classList.add('table-item_accordion-content_area');
    areaContainer.append(areaTitle, areaInfo);

    const MJscoreContainer = document.createElement('div');
    const MJscoreTitle = document.createElement('div');
    const MJscoreInfo = document.createElement('div');

    MJscoreContainer.classList.add('table-item_accordion-content_MJ');
    MJscoreContainer.append(MJscoreTitle, MJscoreInfo);

    const BALscoreContainer = document.createElement('div');
    const BALscoreTitle = document.createElement('div');
    const BALscoreInfo = document.createElement('div');

    BALscoreContainer.classList.add('table-item_accordion-content_BAL');
    BALscoreContainer.append(BALscoreTitle, BALscoreInfo);

    const NIBscoreContainer = document.createElement('div');
    const NIBscoreTitle = document.createElement('div');
    const NIBscoreInfo = document.createElement('div');

    NIBscoreContainer.classList.add('table-item_accordion-content_NIB');
    NIBscoreContainer.append(NIBscoreTitle, NIBscoreInfo);

    const countryContainer = document.createElement('div');
    const countryTitle = document.createElement('div');
    const countryInfo = document.createElement('div');

    countryContainer.classList.add('table-item_accordion-content_country');
    countryContainer.append(countryTitle, countryInfo);

    const tasteDateContainer = document.createElement('div');
    const tasteDateTitle = document.createElement('div');
    const tasteDateInfo = document.createElement('div');

    tasteDateContainer.classList.add('table-item_accordion-content_taste-date');
    tasteDateContainer.append(tasteDateTitle, tasteDateInfo);

    const HSscoreContainer = document.createElement('div');
    const HSscoreTitle = document.createElement('div');
    const HSscoreInfo = document.createElement('div');

    HSscoreContainer.classList.add('table-item_accordion-content_HS');
    HSscoreContainer.append(HSscoreTitle, HSscoreInfo);

    const LPWscoreContainer = document.createElement('div');
    const LPWscoreTitle = document.createElement('div');
    const LPWscoreInfo = document.createElement('div');

    LPWscoreContainer.classList.add('table-item_accordion-content_LPW');
    LPWscoreContainer.append(LPWscoreTitle, LPWscoreInfo);

    const JRscoreContainer = document.createElement('div');
    const JRscoreTitle = document.createElement('div');
    const JRscoreInfo = document.createElement('div');

    JRscoreContainer.classList.add('table-item_accordion-content_JR');
    JRscoreContainer.append(JRscoreTitle, JRscoreInfo);

    accordionContent.append(
      producerContainer,
      areaContainer,
      MJscoreContainer,
      BALscoreContainer,
      NIBscoreContainer,
      countryContainer,
      tasteDateContainer,
      HSscoreContainer,
      LPWscoreContainer,
      JRscoreContainer
    );

    const elementsToAddUndertitleClassTo = [
      producerTitle,
      areaTitle,
      MJscoreTitle,
      BALscoreTitle,
      NIBscoreTitle,
      countryTitle,
      tasteDateTitle,
      HSscoreTitle,
      LPWscoreTitle,
      JRscoreTitle,
    ];
    const elementsToAddInfoClassTo = [
      producerInfo,
      areaInfo,
      MJscoreInfo,
      BALscoreInfo,
      NIBscoreInfo,
      countryInfo,
      tasteDateInfo,
      HSscoreInfo,
      LPWscoreInfo,
      JRscoreInfo,
    ];

    elementsToAddUndertitleClassTo.forEach((element) => {
      element.classList.add('table-item_accordion-undertitle');
    });
    elementsToAddInfoClassTo.forEach((element) => {
      element.classList.add('table-item_accordion-info');
    });

    // Adding text to the elements

    producerTitle.textContent = 'PRODUCER';
    producerInfo.textContent = item.producer;

    areaTitle.textContent = 'AREA';
    areaInfo.textContent = item.area;

    MJscoreTitle.textContent = 'MJ';
    MJscoreInfo.textContent = item.MJ;

    BALscoreTitle.textContent = 'BAL';
    BALscoreInfo.textContent = item.BAL;

    NIBscoreTitle.textContent = 'NIB';
    NIBscoreInfo.textContent = item.NIB;

    countryTitle.textContent = 'COUNTRY';
    countryInfo.textContent = item.country;

    tasteDateTitle.textContent = 'SMAKING';
    tasteDateInfo.textContent = item.date;

    HSscoreTitle.textContent = 'HS';
    HSscoreInfo.textContent = item.HS;

    LPWscoreTitle.textContent = 'LPW';
    LPWscoreInfo.textContent = item.LPW;

    JRscoreTitle.textContent = 'JR';
    JRscoreInfo.textContent = item.JR;

    // toggleing accordion

    itemContainer.addEventListener('click', (e) => {
      const clickedItem = e.currentTarget;
      const secondChild = clickedItem.children[1];
      if (secondChild.classList.contains('active-grid')) {
        secondChild.classList.remove('active-grid');
        caretImg.style.transform = "rotate(360deg)"
      } else {
        secondChild.classList.add('active-grid');
        caretImg.style.transform = "rotate(180deg)"
      }
    });
  });
}, 1000);
