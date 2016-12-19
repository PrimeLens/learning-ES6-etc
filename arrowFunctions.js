
/***** Example 1 *****/

	function calc(num){
		return num+2;
	}

	var calc = function(num){
		return num+2;
	}

// translates to
	var calc = (num) => {return num+2;}
// translates to
	var calc = num => num+2;







/***** Example 2 (similarly with multiple params) *****/

	function trxObj(data, num){
		data.num = num;
		return data;
	}

	var trxObj = function(data, num){
		data.num = num;
		return data;
	}

// translates to
	var trxObj = (data, num) => {data.num = num; return data;}






/***** Example 3  (var self = this) *****/
var aaa = {
	x : 10,
	bbb : function(){
		console.log('1: ',this.x); // prints 10
		var calc = function(){
			console.log('2: ', this.x); // prints undefined
		}
		calc();
	}
}
aaa.bbb(); 

// Translates to below, note the second console log this.x will print 10
var aaa = {
	x : 10,
	bbb : function(){
		console.log('1: ',this.x); // prints 10
		var calc = () => {
			console.log('2: ', this.x); // prints 10
		}
		calc();
	}
}

