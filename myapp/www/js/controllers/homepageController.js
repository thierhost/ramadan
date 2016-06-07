'use strict';

    /* recuperation de la date d'aujourdhui */
    var now = new Date();
    var mois    = now.getMonth()+1;
    var jour    = now.getDate();
    var moisString="";
    if(mois ==6){
      moisString="juin";
    }else
    {
      moisString="juillet";
    }
    var slug =" "+jour+" "+moisString;

app.controller('homepageIndex',function ($scope,prayProvider) {
  $scope.prayers = prayProvider.getAll();

})
  .controller('today',function ($scope,prayProvider) {

    /* recuperation de l'heure de priere en fonction de la date de today */
  $scope.pray=prayProvider.getOne(slug);

  })

  .controller('one',function ($scope,prayProvider,$stateParams) {
    var parms = $stateParams.slug;
   $scope.pray= prayProvider.getOne(parms);
  })
  .controller('nafila',function ($scope,prayProvider) {
    $scope.nafila= prayProvider.getOne(slug);
  })
;
