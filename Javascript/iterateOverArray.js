var animals = ["A dog", "A parakeet", "A rat", "A cat", "A horse"];
var isCat = [false, false, false, true, false];

//Start variable at the index of 0 
var i = 0;

while (i < isCat.length) {
	if (isCat[i]) {
		console.log(animals[i]) + " is a cat. Best animal ever.");
	}
	else {
		console.log(animals[i]) + " is not a cat. Such a shame."
	}
	i = i + 1; //Increment the counter
}