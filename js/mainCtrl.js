angular.module('quoteBook').controller('mainCtrl', function($scope, dataService){

$scope.inputShowing = false;



$scope.showInput = function(){
  $scope.inputShowing = !$scope.inputShowing;
}
$scope.getData = function(){
  $scope.quotes = dataService.getData();
}
$scope.getData();

$scope.addQuote = function(){
  var obj = {
    text: $scope.newQuote,
    author: $scope.newAuthor
  }
  dataService.addData(obj);
  $scope.getData();
  $scope.newQuote = "";
  $scope.newAuthor = "";

}

$scope.removeQuote = function(quote){
  dataService.removeData(quote.text);
  $scope.getData();
}







})
