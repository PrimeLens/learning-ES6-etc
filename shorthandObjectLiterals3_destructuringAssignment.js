/*
	'destructuring assignment'
	is really reverse shorthand for object literals
*/

	var getStudentRecord = ()=>{
		// send back stubbed data
		var stubData = {
			id: 9901004,
			name: 'mary',
			age: 15,
			gender: 'female'
		}
		return stubData;
	}

// instead of
	let r = getStudentRecord();
	let name = r.name;
// ES6 assigns multible vars at once using reverse of object shorthand
	let {name, age} = getStudentRecord();
	console.log(name); // 'mary'
	console.log(age); // 15

// using different var names,  trick to remember think of key : value as 'key : varName'
	let {name: firstname, age: years} = getStudentRecord();
	console.log(firstname); // 'mary'
	console.log(years); // 15	

// square bracket notation for Arrays
	var [a, , ,b ] = [1, 2, 3, 4, 5, 6];
	// a == 1
	// b == 4



// .forEach(e,i)  or _.each(e,i)
	var students = [
		{name:'mary', age: 15, gender: 'female'},
		{name:'bob', age: 12, gender: 'male'},
		{name:'gary', age: 11, gender: 'male'}
	];
	_.each(students, function(e,i){console.log(e.name)});  // underscore
	students.forEach((e,i)=>{console.log(e.name)});   // forEach

	// but using destructuring assignment
	students.forEach(({name, age},i)=>{
		console.log(name);
		console.log(age);
	});

