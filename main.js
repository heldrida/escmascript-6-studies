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

// although, using const to declare an object (binding), doesn't stop from changing a property
// the const statement only prevent you from modifying the value it's bound to, that is in this
// case an object;
function myFuncConstTestB () {
	const person = {
		name: "Lucas"
	};

	// works
	person.name = "Richard";

	/*
	// throws an error
	person = {
		name: "Peter"
	};
	*/

}

// with the new let and const statements,  immediately-invoked function expressions are not needed
// // to solve scope issues we are used to
(function () {

	console.log('No need for IIFE example');

	var fns = [];

	for (let i = 0; i < 10; i++) {
		fns.push(function () {
			console.log(i);
		});
	}

	fns.forEach(function (fn) {
		fn();
	});

}());

// template strings
// substitution:
(function () {

	// using the ` char, we're able to access local variables
	let name = "Bela",
		msg = `Hello, ${name}`;

	// or any javascript expression for that mather
	let text = `${name} has a total of $${(5 * 100 / 2).toFixed(2)}.`;

	console.log('text', text);

}());

// default parameter values in ecmascript6
function myFunDefParams (param1, param2 = "foo", param3 = function () { console.log("callback"); }) {

	console.log("param1", param1);
	console.log("param2", param2);
	console.log("param3", param3);

}

myFunDefParams();

// the spread operator `...` the js engine splits the array into individual arguments
(function () {

	const values = [10, 320, 50, 23, 6, 9];

	console.log(Math.max(...values));

}());

// Arrow function syntax
var getName = () => "Nicholas";
var getTotal = (a, b) => a + b;

console.log(getName());
console.log(getTotal(2, 3));

// creating immediately invoked function expressions with arrow functions
(function () {

	let person = ((name) => {

		return {
			getName: function () {
				return name;
			}
		};

	})("Nicholas");

	console.log(person.getName());

}());