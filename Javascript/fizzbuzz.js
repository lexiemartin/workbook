// A solution to the famous (infamous?) Fizzbuzz
// problem. The program says "Meow" and "Purr" instead
// of "Fizz" and "Buzz" because I am a crazy cat lady.

var totalCats = 100;
for (var i=1; i <= totalCats; i++) {
    if (i % 15 === 0) {
        console.log("MeowPurr");
    }
    else if (i % 3 === 0) {
        console.log("Meow");
    } else if (i % 5 === 0) {
        console.log("Purr");
    } else {
    console.log(i);
    }
}

// This was my original solution to the problem.
// I looked up the question afterwards and discovered that
// although my answer worked there's a better way to do it.

// The following version is largely based on a post by
// Trevor Dixon at http://stackoverflow.com/a/17623252

var totalCats = 100;
for (var i = 1; i <= totalCats; i++) {
	var blank = '';
	if (i % 3 === 0) blank += 'Meow';
	if (i % 5 === 0) blank += 'Purr';
	console.log(blank || i);
	}

