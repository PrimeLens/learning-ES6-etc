/*
	lets create a generator called calc
	we do this by placing an asterisk after the word function
	create a pointer or handle to the generator at the time you execute it
	code inside the generator pauses
*/

function* calc(){
	console.log('first person shooter');
	console.log('first in line');
	yield 'first';
	console.log('second chance to win');
	console.log('seconds left to score a goal');
	yield 'second';
	console.log('third is the ending');
}

var handle = calc();   // handle == object with next, throw and return methods { next, throw, return }   


var other;
other = handle.next();      // 'first person shooter'
							// 'first in line'
console.log(other); 	    // {value: "first", done: false}

other = handle.next(); 		// 'second chance to win'
							// 'seconds left to score a goal'
console.log(other); 	    // {value: "second", done: false}

other = handle.next();		// 'third is the ending'
console.log(other); 	    // {value: undefined, done: true}