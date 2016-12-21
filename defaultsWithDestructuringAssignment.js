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