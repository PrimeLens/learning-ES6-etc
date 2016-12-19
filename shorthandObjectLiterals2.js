/*
	methods on an object can have their function definition assigned at the time of the object creation
	PLEASE NOTE !!!!
	this is not arrow notation,  this is ES5 function definition with the word 'function' removed
*/

	var x = 10;
	var aaa = { 
		x, 
		calc(){ console.log('CALC'); }
	}
	aaa.calc();  // CALC




/* 
	SQUARE BRACKET NOTATION - for assigning properties dynamically
*/

// ES5
	var item = {};
	var propertyType = 'name';
	item[propertyType] = 'fred';
	console.log(item);  // { name: 'fred'}

// ES6,  define object literal with shorthand

	var propertyType = 'name';
	var item = {
		[propertyType] : 'fred'
	}
	console.log(item);  // { name: 'fred'}

