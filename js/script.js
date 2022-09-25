const integerInputEl = document.querySelector('#integerInput');
const romanNumeralEl = document.querySelector('#romanNumeralInput');
const converterFormEl = document.querySelector('.converter-form');
const submitBtnEl = document.querySelector('.submit-btn');
const loaderEl = document.querySelector('.loader');

/**
 * This function returns the current value in the integer input
 * @return {number}
 */
const getIntegerValue = () => {
	return +integerInputEl.value;
};

/**
 * This function displays the roman numeral output in the DOM
 * @param {string} str
 */
const setRomanNumeral = (str) => {
	romanNumeralEl.value = str;
};

/**
 * This function adds d-none class to an element
 * @param {Element} el
 */
const showElement = (el) => {
	el.classList.remove('d-none');
};

/**
 * This function removes d-none class from an element
 * @param {Element} el
 */
const hideElemet = (el) => {
	el.classList.add('d-none');
};

/**
 * Handle onsubmit event
 */
converterFormEl.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const integerInputValue = getIntegerValue();

	const result = intToRoman(integerInputValue);
	hideElemet(submitBtnEl);
	showElement(loaderEl);

	setTimeout(() => {
		hideElemet(loaderEl);
		showElement(submitBtnEl);
		setRomanNumeral(result);
	}, 1000);
});
