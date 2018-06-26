'use strict';
/**
 * @ngdoc overview
 * @name ApsilonApp
 * @description
 * # ApsilonApp
 *
 * Main module of the application.
 */

var app=angular.module('ApsilonApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider',
    function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
        debug: false,
        events: true,
      });

      $urlRouterProvider.otherwise('/dashboard/Home');

      $stateProvider
        .state('dashboard', {
          url: '/dashboard',
          templateUrl: 'dashboard/main',
          resolve: {
            loadMyDirectives: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                  name: 'ApsilonApp',
                  files: [
                    'app/scripts/directives/header/header.js',
                    'app/scripts/directives/header-search/header-search.js',
                    'app/scripts/directives/header/header-notification/header-notification.js',
                    'app/scripts/directives/sidebar/sidebar.js'

                  ]
                }),
                $ocLazyLoad.load({
                  name: 'toggle-switch',
                  files: ["app/js/libs/angular-toggle-switch.min.js",
                    "app/styles/libs/angular-toggle-switch.css"
                  ]
                }),
                $ocLazyLoad.load({
                  name: 'ngCookies',
                  files: ['app/js/libs/angular-cookies.min.js']
                })
              $ocLazyLoad.load({
                name: 'ngResource',
                files: ['app/js/libs/angular-resource.min.js']
              })
              $ocLazyLoad.load({
                name: 'ngSanitize',
                files: ['app/js/libs/angular-sanitize.min.js']
              })
              $ocLazyLoad.load({
                name: 'ngTouch',
                files: ['app/js/libs/angular-touch.min.js']
              })
            }
          }
        })
        .state('dashboard.home', {
          url: '/Home',
          controller: 'MainCtrl',
          templateUrl: 'dashboard/home',
          resolve: {
            loadMyFiles: function($ocLazyLoad) {
              return $ocLazyLoad.load({
                name: 'ApsilonApp',
                files: [
                  'app/scripts/controllers/main.js'
                  // 'app/scripts/directives/dashboard/stats/stats.js',
                  // 'app/scripts/directives/timeline/timeline.js',
                  // 'app/scripts/directives/notifications/notifications.js',
                  // 'app/scripts/directives/chat/chat.js',
                ]
              })
            }
          }
        })
      //   .state('dashboard.form', {
      //     templateUrl: 'form',
      //     url: '/form'
      //   })
      //   .state('dashboard.blank', {
      //     templateUrl: 'blank',
      //     url: '/blank'
      //   })
      //   .state('login', {
      //     templateUrl: 'login',
      //     url: '/login'
      //   })
        //@pallavi
        /*state for the Client Details */
        .state('dashboard.client_details', {
          templateUrl: 'client_details',
          url: '/client_details',
          controller: 'ClientDetailCtrl',
          resolve: {
            loadMyFile: function($ocLazyLoad) {
              return  $ocLazyLoad.load({
                  name: 'ApsilonApp',
                  files: ['app/scripts/controllers/clientDetailCtrl.js',
                 'https://cdn.datatables.net/1.10.18/css/jquery.dataTables.min.css',
                 'https://cdn.datatables.net/1.10.18/js/jquery.dataTables.min.js'
                ]
                })
            }

          }
        })
        /*State for the transaction import*/
        .state('dashboard.manual_import', {
          templateUrl: 'manual_import',
          url: '/manual_import',
          controller: 'ManualImportCtrl',
          resolve: {
            loadMyFile: function($ocLazyLoad) {
              return  $ocLazyLoad.load({
                  name: 'ApsilonApp',
                  files: ['app/scripts/controllers/manualImportCtrl.js',
                   'plugins/dropzone/dropzone.js',
                   'plugins/dropzone/dropzone.css'
                    ]
                })
            }

          }
        })
      //   .state('dashboard.chart', {
      //     templateUrl: 'chart',
      //     url: '/chart',
      //     controller: 'ChartCtrl',
      //     resolve: {
      //       loadMyFile: function($ocLazyLoad) {
      //         return $ocLazyLoad.load({
      //             name: 'chart.js',
      //             files: [
      //               'app/js/Chart.min.js',
      //               'app/js/angular-chart.min.js',
      //               'app/styles/libs/angular-chart.css'
      //             ]
      //           }),
      //           $ocLazyLoad.load({
      //             name: 'ApsilonApp',
      //             files: ['app/scripts/controllers/chartContoller.js']
      //           })
      //       }
      //     }
      //   })
      //   .state('dashboard.table', {
      //     templateUrl: 'table',
      //     url: '/table'
      //   })
      //
      // .state('dashboard.hello', {
      //     templateUrl: 'hello'
      //   })
      //   .state('dashboard.panels-wells', {
      //     templateUrl: 'app/views/ui-elements/panels-wells.html',
      //     url: '/panels-wells'
      //   })
      //   .state('dashboard.buttons', {
      //     templateUrl: 'app/views/ui-elements/buttons.html',
      //     url: '/buttons'
      //   })
        .state('dashboard.notifications', {
          templateUrl: 'app/views/ui-elements/notifications.html',
          url: '/notifications'
        })
      //   .state('dashboard.typography', {
      //     templateUrl: 'app/views/ui-elements/typography.html',
      //     url: '/typography'
      //   })
      //   .state('dashboard.icons', {
      //     templateUrl: 'app/views/ui-elements/icons.html',
      //     url: '/icons'
      //   })
      //   .state('dashboard.grid', {
      //     templateUrl: 'app/views/ui-elements/grid.html',
      //     url: '/grid'
      //   })

    }
  ]);
