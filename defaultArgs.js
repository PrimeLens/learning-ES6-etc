/*
	its important to note the difference between a parameter and an arg
	parameter - is that specified in the function definition
	arg - is the value assigned to the parameter at time of use
*/

// we can set default args to the parameters at time of definition

function greet(word = 'hello', name = 'fred'){
	console.log(word+' '+name);
}
greet();  // hello fred
greet('goodbye', 'bill') // goodbye bill



/*
	default args can be functions
*/

function calc(task = function(){ console.log('task') }){
	task();
}
calc(); // 'task'

// translates to 
function calc(task = ()=>console.log('task')){
	task();
}
calc(); // 'task'

// translates to 
// THIS IS PROBLEMATIC. NO NEED FOR NESTED ARROW FUNC's ON ONE LINE
var calc = (task = ()=>console.log('task')) => task();