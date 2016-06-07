'use strict';

// cette variable sert à mettre la gestion du cache à vrai ou faux
// le cache doit etre activer en mode production et false en mode dev
var cacheActive = false;

app
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('homepage',{

        cahe : cacheActive,
        url :'/',
        templateUrl:'js/views/homepage/index.html',
        controller: 'homepageIndex'
      })
      .state('pray',{
        cahe : cacheActive,
        url :'/prayers/:slug',
        templateUrl:'js/views/homepage/one.html',
        controller: 'one'
      })
      .state('today',{
        cahe : cacheActive,
        url :'/today',
        templateUrl:'js/views/homepage/today.html',
        controller: 'today'
      })
      .state('nafila',{
        cahe : cacheActive,
        url :'/nafila',
        templateUrl:'js/views/homepage/nafila.html',
        controller: 'nafila'
      })
      .state('apropos',{
        cahe : cacheActive,
        url :'/apropos',
        templateUrl:'js/views/homepage/apropos.html',
        controller:''
      })

    $urlRouterProvider.otherwise('/');

  });
