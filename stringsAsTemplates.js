/* 
	strings as templates
	defined by using backticks
	evaluate a var or expression is ${ }
*/

	var name = 'gary';
	var num = 7;
	var s1 = `${name} is cool`;  // "gary is cool"
	var s2 = `${num * 3} is cool`;  // "21 is cool"
	var s3 = `A
B
C`;
	// A
	// B
	// C
	// it pays attention to newlines, space and tabs BUT OMG FOR INDENTING




// pass in strings and expressions
	var processTemplate = (strings, ex1, ex2, ex3)=>{
		console.log(strings);
		console.log(ex1, ex2, ex3);
	}

// note we MUST push the string template up against the function name with out parenthesis
	processTemplate`I like ${'Tokyo'} and ${'Paris'} for siteseeing`;
	// ['I like ', ' and ', ' for siteseeing']
	// Tokyo Paris undefined

// WARNING!!
// using parenthesis will evaluate the string template passing in just one arg
	processTemplate(`I like ${'Tokyo'} and ${'Paris'} for siteseeing`);  // 'I like Tokyo and Paris for sightseeing'

// COMBINE with spread operator in capture mode, see my notes under spreadOperator.js
	var processTemplate = (strings, ...ex)=>{
		console.log(strings); // array of strings ['I like ', ' and ', ' for siteseeing']
		console.log(ex); // array of the expressions ['Tokyo', 'Paris']
	}