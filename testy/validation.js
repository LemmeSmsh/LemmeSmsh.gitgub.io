const cardholder = $('.cardholderField');
const cardNum = $('.cardNumberField');
const cardCVV = $('.cardCVV');

const regLetters = /[^A-Z\s]/;
const regNumbers = /^\D/;
const CVV = 3;
const cardField = 4;

const checkCardField = (regNumbers, cardField) => {
	if (cardholder.val().search(regNumbers) == -1 | cardholder.val() == '' | card) 
		cardholder.addClass('invalidField');
	else cardholder.removeClass('invalidField').addClass('validField');
}

const checkCardCVV = (regNumbers, CVV) => {
	if (cardholder.val().search(regNumbers) == -1 | cardholder.val() == '') 
		cardholder.addClass('invalidField');
	else cardholder.removeClass('invalidField').addClass('validField');
}

const checkLetters = (regLetters) => {
	if (cardholder.val().search(regLetters) == -1 | cardholder.val() == '') 
		cardholder.addClass('invalidField');
	else cardholder.removeClass('invalidField').addClass('validField');
}

cardholder.on('blur', checkLetters)

cardNum.on('blur', () => {

	if (cardNum.val().match(/^\D/) != null | cardNum.val() == '') 
		cardNum.addClass('invalidField');
	else cardNum.removeClass('invalidField').addClass('validField');

})

cardCVV.on('blur', () => {

	if (cardCVV.val().match(/^\D/) != null | cardCVV.val() == '') 
		cardCVV.addClass('invalidField');
	else cardCVV.removeClass('invalidField').addClass('validField');

})


$('.cardFrom').ajax() {

	
}