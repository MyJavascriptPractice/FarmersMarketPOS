var $ = function (id){
	return document.getElementById(id);
}

window.onload = function(){
	$('imgBaggedGreens').onclick = calcBaggedGreens;
	$('imgBunch').onclick = calcBunch;
	$('imgCarrot').onclick = calcCarrot;
	$('imgHerbs').onclick = calcHerbs;
	$('imgLettuce').onclick = calcLettuce;
	$('imgOnion').onclick = calcOnion;
	$('imgPepper').onclick = calcPepper;
	$('imgPotato').onclick = calcPotato;
	$('imgTomato').onclick = calcTomato;
}

var total = 0;

function calcBaggedGreens () {
	var babyGreens = $('imgBaggedGreens');
	$('txtReceipt').innerHTML += '$' + babyGreens.alt + "\tBaby Greens</br>";
	total += parseFloat(babyGreens.alt);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);

}
function calcBunch () {
	var bunch = $('imgBunch');
	$('txtReceipt').innerHTML += '$' + bunch.alt + '\tBunch of Greens</br>';
	total += parseFloat(bunch.alt);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);

}
function calcCarrot () {
	var carrot = $('imgCarrot');
	$('txtReceipt').innerHTML += '$' + carrot.alt + '\tCarrots</br>';
	total += parseFloat(carrot.alt);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);

}
function calcHerbs () {
	var herbs = $('imgHerbs');
	$('txtReceipt').innerHTML += '$' + herbs.alt + '\tHerb</br>';
	total += parseFloat(herbs.alt);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);

}
function calcLettuce () {
	var lettuce = $('imgLettuce');
	$('txtReceipt').innerHTML += '$' + lettuce.alt + '\tHead Lettuce</br>';
	total += parseFloat(lettuce.alt);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);

}
function calcOnion () {
	var onion = $('imgOnion'),
		weight = $('txtOnionWeight').value;
	$('txtReceipt').innerHTML += '$' + (onion.alt * weight) + '\tOnions</br>';
	total += (parseFloat(onion.alt) * weight);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);
	$('txtOnionWeight').value = "";
}

function calcPepper () {
	var pepper = $('imgPepper'),
		weight = $('txtPepperWeight').value;
	$('txtReceipt').innerHTML += '$' + (pepper.alt * weight) + '\tPeppers</br>';
	total += (parseFloat(pepper.alt) * weight);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);
	$('txtPepperWeight').value = "";
}
function calcPotato () {
	var potato = $('imgPotato'),
		weight = $('txtPotatoWeight').value;
	$('txtReceipt').innerHTML += '$' + (potato.alt * weight) + '\tPotatoes</br>';
	total += (parseFloat(potato.alt) * weight);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);
	$('txtPotatoWeight').value = "";
}
function calcTomato () {
	var tomato = $('imgTomato'),
		weight = $('txtTomatoWeight').value;
	$('txtReceipt').innerHTML += '$' + (tomato.alt * weight) + '\tTomatos</br>';
	total += (parseFloat(tomato.alt) * weight);
	$('total').innerHTML = "Total:\t\t  $" + total.toFixed(2);
	$('txtTomatoWeight').value = "";
}
