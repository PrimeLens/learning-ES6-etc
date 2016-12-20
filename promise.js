
/*
	example from the tutorial shows the skeleton structure of the promise
*/

	var handle = new Promise((resolve, reject) => {
		setTimeout(() => {
			if (true) {  // ajax call may succeed or fail, lets assume it succeeds
				resolve('hello world');
			} else {
				reject('no bueno');
			}
		}, 2000);
	});

	handle.then((data) => console.log('success : ', data));

	handle.then((data) => console.log('success 2 : ', data)); // both thens will resolve sequentially

	handle.catch((error) => console.error('error : ', error));



/*
	multiple calls with the same resolve
	this is the real world example that should have been in the tutorial
	example: multiple ajax calls made at same time, we need callback to fire when they all come in
*/

	var p1 = new Promise((resolve, reject) => {
		setTimeout(() => { 
			if (true) resolve({data:'one'});   // ajax call may succeed or fail, lets assume it succeeds
		}, 1000);  
	}); 
	var p2 = new Promise((resolve, reject) => { 
	 	setTimeout(() => { 
	 		if (true) resolve({data:'two'}); 
	 	}, 2000); 
	});
	var p3 = new Promise((resolve, reject) => {
	 	setTimeout(() => { 
	 		if (true) resolve({data:'three'}); 
	 	}, 3000);
	});
	var p4 = new Promise((resolve, reject) => {
	 	setTimeout(() => { 
	 		if (true) resolve({data:'four'}); 
	 	}, 4000);
	});

	Promise.all([p1, p2, p3, p4])
	.then((data) => console.log('success : ', data))
	.catch((error) => console.error('error : ', error));





// fallback for IE 
// use jQuery $.when
// I'm oldschool... this is the way we used to do it

	function makeCall() url , callback ) {
		var requestpointer = $.ajax({
			type: 'GET',
			url: url,
			dataType: "json",
			async: true,
			success: function( data, textStatus, jqXHR ){
				callback( data );
			}
		});
		return requestpointer;
	}

	var myarray = [];
	var pointer1 = makeCall( 'url', function(){  /* do stuff when this call completes */ } );
	myarray.push( pointer1 );
	var pointer2 = makeCall( 'url', function(){  /* do stuff when this call completes */ } );
	myarray.push( pointer2 );
	// promise
	$.when.apply( this, myarray ).done( function() {
		// do stuff when all calls complete
	});

