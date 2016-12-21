/*
	maps and weakmaps below
*/

	var mappy = new Map();

// set
	mappy.set('dog', 'fido');
	mappy.set('robot', 'wall-e');

// get
	mappy.get('dog');  // prints fido
	mappy.get('robot');  // prints wall-e
	mappy.get('whatever');  // prints undefined because it was not set

// has
	mappy.has('dog');  // prints true
	mappy.has('whatever');  // prints false because it was not set

// size is a property not a method
	console.log(mappy.size);  // prints 2

// clear
	mappy.clear();  // clears it
	mappy.get('dog');  // now prints undefined
	mappy.get('robot');  // now prints undefined-e

// iterating must use for...of loop
	for(let item of mappy.keys()){
		console.log(item);  // prints dog robot
	}
	
	for(let item of mappy.values()){
		console.log(item);  // prints fido then wall-e
	}

	for(let item of mappy.entries()){
		console.log(item);  // prints ["dog", "fido"]   ["robot", "wall-e"]
	}
	// AND ...
	// use object shorthand in square bracket syntax
	for(let [key,value] of mappy.entries()){
		console.log(key, value);  // prints "dog", "fido"   "robot", "wall-e"
	}


// funky shit
	delete mappy;
	var mappy = new Map();
// set an object as the key, set a function as the key
	mappy.set(  {}, 'fido'  );
	mappy.set(  ()=>{}, 'wall-e'  );





/*
	WEAK MAPS
*/

var mappy = new WeakMap();
// key cannot be a string (but can be an object or a function)
// cannot have iteration



























