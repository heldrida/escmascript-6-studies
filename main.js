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

// the const statement, like `let` is a block-level element, which means that exists
// only on it's scope and that is not hoisted to the top, not available elsewhere;
// likewise, the const statement does not allow redeclarations, and as in other languages
// a constant is immutable, when initialised a value needs to be declared immediately.
function myFuncConstTestA () {
	const foo = 1;
	console.log("typeof foo: ", typeof foo);
	//const bar;
	// SyntaxError: missing = in const declaration
}

myFuncConstTestA();