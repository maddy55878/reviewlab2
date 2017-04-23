angular.module('myApp').controller('food', function($http) {
var vm = this;
vm.myInput = "food";
vm.success = ""
$http.get('/api/food/guacamole').then(function(data){
vm.success = data;
});
})