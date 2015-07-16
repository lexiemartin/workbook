// A pet store sells only cats.
// Search the array of cat breeds for a specific type of cat.

var catBreeds = [ 'persian', 'rex', 'american shorthair', 'siamese', 'bengal', 'maine coon' ];
var search;

function print(message) {
  document.write( '<p>' + message + '</p>');
}

while (true) {
  search = prompt("Search for breeds of cat that the pet store has in stock. Type 'list' to list all and 'quit' to leave the store.");
  search = search.toLowerCase();
  if (search === 'quit') {
    break;
  } else if ( search === 'list' ) {
    print(catBreeds.join(', '));
  } else {
    if ( catBreeds.indexOf( search ) > -1 ) {
      print('We have a ' + search + ' cat at this pet store.');
    } else {
      print ('Sorry, there are no ' + search + ' cats at this store. Try leaving a bowl of milk on your porch, you might find a ' + search + 'cat that way.' );
    }
  }
}