app.controller('MainController', ['$scope', function($scope) {$scope.title = 'Amazing Angular App'; $scope.promo = 'Of Astounding Amazingness'; $scope.products = [
  {
    name: 'The Book of Trees',
    price: 19,
    pubdate: new Date('2014', '03', '08'),
    cover: 'img/the-book-of-trees.jpg',
    likes: 0,
    dislikes: 0
  },
  {
  	name: 'Program or be Programmed',
  	price: 8,
  	pubdate: new Date('2013', '08', '01'),
    cover: 'img/program-or-be-programmed.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'The Fellowship of the Ring',
    price: 12,
    pubdate: new Date('1954', '07', '29'),
    cover: 'img/fellowship-of-the-ring.jpg',
    likes: 0,
    dislikes: 0
  },
  {
    name: 'The Two Towers',
    price: 15,
    pubdate: new Date ('1954', '11', '11'),
    cover: 'img/the-two-towers.jpg',
    likes: 0,
    dislikes: 0
  }
]; $scope.plusOne = function(index) {
	$scope.products[index].likes += 1;
}; $scope.minusOne = function(index) {
  $scope.products[index].dislikes += 1;
}