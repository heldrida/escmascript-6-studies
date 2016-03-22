// let declarations
function myFuncLetTestA () {

	if (typeof param !== 'undefined' & param) {

		var param = true;

	} else {

		return null;

	}

	console.log(param);

}

// let declarations
function myFuncLetTestB () {

	if (typeof param !== 'undefined' & param) {

		let param = true;

	} else {

		return null;

	}

	console.log(param);

}

// because of hoisting, the param declaration is pushed to the top scope
// returns param is null
// console.log('myFuncLetTestA', myFuncLetTestA());

// in es6, scope exists under brackets {}, as long we use `let`
// returns para is not defined
// console.log('myFuncLetTestB', myFuncLetTestB());

// for the reason state before, we can not redeclare a variable from var/let or vice-versa
// under the same scope, but it's ok to do it in a different scope
/*
function myFuncLetTestC () {
	var count = 1;
	let count = 5;

	console.log(count);
}
*/
function myFuncLetTestD () {
	console.log('myFuncLetTestD call');

	var count = 1;

	if (true) {
		let count = 5;
		console.log(count);
	}

	console.log(count);
}


//myFuncLetTestC();
myFuncLetTestD();