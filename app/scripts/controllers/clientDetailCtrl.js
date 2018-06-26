'use strict';
/**
 * @ngdoc function
 * @name ApsilonApp.controller:ClientDetailCtrl
 * @description
 * # ChartCtrl
 * Controller of the ApsilonApp
 */


   angular.module('ApsilonApp')
       .service('myServices', function () { /* ... */ })
          .controller('ClientDetailCtrl', ['$scope','$http',function ($scope, $http) {
//variable
  $scope.user = {};
/***************function for fetching client details from database***************/
            $scope.fetch_clients = function(){
             $http({
              method: 'get',
              url: 'http://localhost/myfund/Client_details/fetch_clients'
             }).then(function successCallback(response) {
               // Assign response to users object
               $scope.users = response.data;
                //$('#table_id').DataTable();
      angular.element(document).ready(function() {
      $('#table_id').DataTable();
    });
             }).catch(function onError(response) { //debugger;
                console.log("error while fetching client");
                console.log(response);
               });
            }
            $scope.fetch_clients();
            //save form datatable
            $scope.form = {};

/********function for saving client add form data************/
      $scope.saveAdd=function()
       {
       $http({
        method:'post',
        url:'http://localhost/myfund/Client_details/add_clients',
        data : $scope.form, //forms user object
        headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    }).success(function (data)
    {
          if(data=='true'){
               $(".modal").modal("hide");
                 location.reload();
            }
            else{
              alert("Error occured while inserting data..");
            }
            $scope.message=data;
    });
}
/*************fucntion for edit record i.e. making prefilled form for edit.******/
$scope.edit = function(myid){
  //alert(myid);
  $scope.user.id=myid
//  alert($scope.user.id);
    $http({
   method:'post',
   url:'http://localhost/myfund/Client_details/get_clients',
   dataType: 'json',
   data: {id: $scope.user.id },
   headers: { "Content-Type": "application/json" }
 }).success(function (val)
 {
      //console.log(data);
      $scope.form = val;//using this line form will be prefilled with fetched detials
 });
}
/*******function for saving edited form data******/
$scope.saveEdit = function(){
//alert($scope.form.name);
  $http({
   method:'post',
   url:'http://localhost/myfund/Client_details/update_clients',
   data : $scope.form, //forms user object
   headers : {'Content-Type': 'application/x-www-form-urlencoded'}
}).success(function (success)
{
     if(success){
          $(".modal").modal("hide");
            location.reload();
       }else{
         alert("Error occured while inserting data..");
       }
       $scope.message=success;
});
}
/*****function to delete record*******/
$scope.remove = function(item,index){
alert(index);
  var result = confirm("Are you sure delete this item?");
  if (result) {
        $http({
       method:'post',
       url:'http://localhost/myfund/Client_details/del_clients',
       dataType: 'json',
       data: {id: index },
       headers: { "Content-Type": "application/json" }
     }).success(function (val)
     {
       if(val){
          alert("Record deleted successfully..");
          location.reload();
       }else{
         alert("Error occured while deleting data..");
       }
       $scope.message=val;
     });
  }
}
/* del function end*/

}]);
