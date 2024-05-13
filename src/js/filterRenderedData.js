import wineArray from './databaseFunctions';
import loadingRenderedData from './renderData';

const headerCategory = document.querySelectorAll('.table-sort');

let isClicked = false;

headerCategory.forEach((category) => {
  const handleSorting = (e) => {
    const currentClick = e.currentTarget;
    let sortedArray = [...wineArray];

	if (currentClick.classList.contains('table-name')) {
		if (!isClicked) {
		  isClicked = true;
		  sorting('LowName');
		} else {
		  isClicked = false;
		  sorting('HighName');
  
		}
	  }
    if (currentClick.classList.contains('table-year')) {
      if (!isClicked) {
        isClicked = true;
        sorting('LowYear');
      } else {
        isClicked = false;
        sorting('HighYear');

      }
    }
    if (currentClick.classList.contains('table-price')) {
      if (!isClicked) {
        isClicked = true;
        sorting('LowPrice');
      } else {
        isClicked = false;
        sorting('HighPrice');

      }
    }
    if (currentClick.classList.contains('table-type')) {
      if (!isClicked) {
        isClicked = true;
        sorting('LowType');
      } else {
        isClicked = false;
        sorting('HighType');

      }
    }
    if (currentClick.classList.contains('table-score')) {
      if (!isClicked) {
        isClicked = true;
        sorting('LowScore');
      } else {
        isClicked = false;
        sorting('HighScore');
      }
    }

    function sorting(attribute) {
      switch (attribute) {
		    case 'LowName':
          sortedArray.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'HighName':
          sortedArray.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case 'LowYear':
          sortedArray.sort((a, b) => a.year - b.year);
          break;
        case 'HighYear':
          sortedArray.sort((a, b) => b.year - a.year);
          break;
        case 'LowPrice':
          sortedArray.sort((a, b) => a.price - b.price);
          break;
        case 'HighPrice':
          sortedArray.sort((a, b) => b.price - a.price);
          break;
        case 'LowType':
          sortedArray.sort((a, b) => a.type.localeCompare(b.type));
          break;
        case 'HighType':
          sortedArray.sort((a, b) => b.type.localeCompare(a.type));
          break;
        case 'LowScore':
          sortedArray.sort((a, b) => a.score - b.score);
          break;
        case 'HighScore':
          sortedArray.sort((a, b) => b.score - a.score);
          break;
        default:
          break;
      }
    }
	wineArray = sortedArray
	loadingRenderedData()
  };

  category.addEventListener('click', handleSorting);
});
