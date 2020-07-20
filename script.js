var logo = document.getElementById('bm');
// var play = document.getElementById('activate');

var invalidEmail = document.getElementById('invalid_mail');

//Animation 1

var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'), // Required
	renderer: 'svg', // Required
	loop: false, // Optional
	autoplay: false, // Optional
	path: 'data.json' // Required

	//   name: 'Hello World' // Name for future reference. Optional.
});

logo.addEventListener('click', function() {
	animation.goToAndPlay(0);
	mail.style.visibility = 'visible';
	stroke.style.visibility = 'visible';
	stroke_invalid.style.visibility = 'hidden';
	invalid_mail.style.visibility = 'hidden';
});

logo.addEventListener('mouseover', function() {
	animation.play();
	mail.style.visibility = 'visible';
	stroke.style.visibility = 'visible';
	stroke_invalid.style.visibility = 'hidden';
	invalid_mail.style.visibility = 'hidden';
	stroke_valid.style.visibility = 'hidden';
	valid_mail.style.visibility = 'hidden';
});

// play.addEventListener('mouseover', function() {
// 	animation.play();
// 	mail.style.visibility = 'hidden';
// 	stroke.style.visibility = 'hidden';
// 	stroke_invalid.style.visibility = 'hidden';
// 	invalid_mail.style.visibility = 'hidden';
// 	stroke_valid.style.visibility = 'visible';
// 	valid_mail.style.visibility = 'visible';
// });

logo.addEventListener('mouseleave', function() {
	animation.goToAndStop(0);
});

// play.addEventListener('mouseleave', function() {
// 	animation.goToAndStop(0);
// });

// Lottie Branch Test Change - Test Local changes

const email = document.getElementById('email');

// Show input error message

function showError(input, message) {
	const formControl = input.parentElement;
	// formControl.className = 'form-control error';
	// const small = formControl.querySelector('small');
	// small.innerText = message;
	mail.style.visibility = 'hidden';
	stroke.style.visibility = 'hidden';
	stroke_invalid.style.visibility = 'visible';
	invalid_mail.style.visibility = 'visible';
	animation.goToAndPlay(0);
}

// Show success outline

function showSuccess(input) {
	// const formControl = input.parentElement;
	// formControl.className = 'form-control success';
	mail.style.visibility = 'hidden';
	stroke.style.visibility = 'hidden';
	stroke_invalid.style.visibility = 'hidden';
	invalid_mail.style.visibility = 'hidden';
	stroke_valid.style.visibility = 'visible';
	valid_mail.style.visibility = 'visible';
	animation.goToAndPlay(0);
}

// Check email is valid
function checkEmail(input) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input);
	}
}

// Check required fields

function checkRequired(inputArr) {
	inputArr.forEach(function(input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

// Get field name

function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners

form.addEventListener('submit', function(e) {
	e.preventDefault();

	// checkRequired([ email ]);
	checkEmail(email);
});
