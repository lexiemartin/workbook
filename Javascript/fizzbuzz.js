// An implementation of the famous (infamous?) Fizzbuzz
// problem. But the program says "Meow" and "Purr" instead
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