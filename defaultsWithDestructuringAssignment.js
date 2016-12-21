/*

	the destructuring assignement covered in the other turorial 
	can be used to set defaults

*/

var makeCall = ({
	type = 'get',
	url = 'myPath/myEndpoint'
})=>{ 
	/* ajax with the input args */ 
	console.log('url ', url);
	console.log('type ', type);
};


makeCall({type:'post'});
// prints
// url  myPath/myEndpoint
// type  post


// IMPORTANT NOTE.  this is very different to setting the args in the other lesson defaultArgs.js
// because the defaults are set as one arg inside an object
// when calling makeCall we must pass in one arg as an object
// the other lesson concerns many args