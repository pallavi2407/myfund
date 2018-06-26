'use strict';

/**
 * @ngdoc directive
 * @name izzyposWebApp.directive:adminPosHeader
 * @description
 * # adminPosHeader
 */

angular.module('ApsilonApp')
  .directive('sidebarSearch',function() {
    return {
      templateUrl:'app/scripts/directives/header/header-search/header-search.html',
      restrict: 'E',
      replace: true,
      // scope: {
      // },
      // controller:function($scope){
      //   $scope.selectedMenu = 'home';
      // }
    }
  });
