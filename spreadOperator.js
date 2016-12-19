
// the ES6 SPREAD operator

	var first = [1, 2, 3];
	var second = [4, 5, 6];	
	first.push(...second);   // [1, 2, 3, 4, 5, 6]
	// if we had done first.push(second) it would be array within an array
	// back in ES5 we also used to just use .concat() by writing first = first.concat(second)


// the ES6 SPREAD operator used to specify args

	var args = [ 'mary', 15, 'female'];
	var addStudent = (name, age, gender) => { 
		console.log(name + ' is ' + gender + ' and ' + age + 'yrs old');
	};
	addStudent(...args);  // 'mary is female and 15yrs old'

