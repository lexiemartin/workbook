// An implementation of the famous (infamous?) Fizzbuzz
// problem. But the program says "Meow" and "Purr" instead
// of "Fizz" and "Buzz" because I am a crazy cat lady.

var total = 100;
for (var i=1; i <= total; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
    console.log(i);
    }
}