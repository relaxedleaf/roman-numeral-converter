const integerInputEl = document.querySelector('#integerInput');
const romanNumeralEl = document.querySelector('#romanNumeralInput');
const converterFormEl = document.querySelector('.converter-form');
const submitBtnEl = document.querySelector('.submit-btn');

const ZERO = 'nulla';

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

converterFormEl.addEventListener('submit', (evt) => {
	evt.preventDefault();
	const integerInputValue = getIntegerValue();

	if (!integerInputValue) {
		setRomanNumeral(ZERO);
		return;
	}

	setRomanNumeral(intToRoman(integerInputValue));
});
