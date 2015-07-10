/*
	Parsing strings as integers.
	I have four cats, so we're taking the word "four" and converting it to the integer "4"  
*/

function parseCats (catString) {
	numCats = parseInt(catString);
	// If "four" does not exist in our string it will return -1 to the indexOf method
	// If that is not the case then multiply numCats by 4 and return that value
		if (catString.indexOf("four") != -1) {
			numCats *= 4;
			return numCats;
		}
	}
