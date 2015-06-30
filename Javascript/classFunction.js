// Javascript is a classless language, but classes are nice.

// You can use functions to create classes like this.

// I want to create a class of "Cat" to describe the perfect cat.
// My cat Fritz is the perfect cat.
// He was adopted from a shelter so I don't know what breed he is,
// so when I create my Cat class I have not set a value for "breed."

function Cat(breed) {
	this.breed = breed;
	this.color = "orange";
	this.gender = "male";

	this.getInfo = function () {
		return this.breed + " " + this.color + this.gender;
	};
}

// Fritz is a new object instantiated by using the Cat constructor.
// We're going to put in a guess for the parameter "breed" and
// then log the information we know about my cat.

var Fritz = new Cat("AmericanShortHair");
console.log(Fritz.getInfo()) ;