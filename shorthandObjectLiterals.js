/* 
	can use shorthand to define object literals with values from vars
	not sure if I like this one but I suppose it means no more visual duplicates 
	in the return part of crockfords module/reveal pattern
*/


	var lib = (function(){
		function calc(){
			console.log('CALC');
		}
		function doing(){
			console.log('DOING');
		}
		return {
			calc : calc,
			doing : doing
		}
	})();



// translates to
	var lib = (function(){
		function calc(){
			console.log('CALC');
		}
		function doing(){
			console.log('DOING');
		}
		return { calc, doing } // changed here
	})();



// translates to
	var lib = (()=>{  // changed here
		function calc(){
			console.log('CALC');
		}
		function doing(){
			console.log('DOING');
		}
		return { calc, doing }
	})();



