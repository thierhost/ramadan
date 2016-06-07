'use strict';
/*var prayers= [{"Date":" 6 juin","Sobh":"03:23","Chorouq":"05:46","Dohr":"13:49","Asr":"18:05","Maghreb":"21:52","Icha":"00:06","Rakas":"10","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Khoul Ya Ayouhal Kafirouna + 2 Ikhlass"},
  {"Date":" 7 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:05","Maghreb":"21:53","Icha":"00:06","Rakas":"6","Sourates":"1 Fatiha + 10 Inna Ahtaynakal"},
  {"Date":" 8 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:06","Maghreb":"21:53","Icha":"00:06","Rakas":"6","Sourates":"1 Fatiha + 4 Inna Anzalnahou + 4 Khoul Ya Ayouhal Kafirouna"},
  {"Date":" 9 juin","Sobh":"03:23","Chorouq":"05:45","Dohr":"13:49","Asr":"18:06","Maghreb":"21:54","Icha":"00:07","Rakas":"4","Sourates":"1 Fatiha + 3 Khoul Ya Ayouhal Kafirouna"},
  {"Date":" 10 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:06","Maghreb":"21:55","Icha":"00:07","Rakas":"4","Sourates":"1 Fatiha + 1 Alam Nasra + 3 Ikhlass"},
  {"Date":" 11 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:55","Icha":"00:08","Rakas":"2","Sourates":"1 Fatiha + 12 Ikhlass"},
  {"Date":" 12 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:56","Icha":"00:08","Rakas":"6","Sourates":"1 Fatiha + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
  {"Date":" 13 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:07","Maghreb":"21:57","Icha":"00:08","Rakas":"2","Sourates":"1 Fatiha + 12 Ikhlass"},
  {"Date":" 14 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:50","Asr":"18:08","Maghreb":"21:57","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 3 Tabat Yada + 1 Ikhlass"},
  {"Date":" 15 juin","Sobh":"03:23","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 1 Ayatoul Koursiyou + 12 Inna Anzalnahou"},
  {"Date":" 16 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:09","Rakas":"4","Sourates":"1 Fatiha + 7 Inna Anzalnahou + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
  {"Date":" 17 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:08","Maghreb":"21:58","Icha":"00:10","Rakas":"10","Sourates":"1 Fatiha + 6 Ikhlass"},
  {"Date":" 18 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:51","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"2","Sourates":"1 Fatiha + 5 Ikhlass"},
  {"Date":" 19 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"8","Sourates":"1 Fatiha + 7 Iza Diaha"},
  {"Date":" 20 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:10","Rakas":"6","Sourates":"1 Fatiha + 1 Iza Diaha + 35 Ikhlass"},
  {"Date":" 21 juin","Sobh":"03:24","Chorouq":"05:44","Dohr":"13:52","Asr":"18:09","Maghreb":"21:59","Icha":"00:11","Rakas":"2","Sourates":"1 Fatiha + 10 Iza Zoulzilati"},
  {"Date":" 22 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:52","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"12","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Ikhlass"},
  {"Date":" 23 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:52","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"10","Sourates":"1 Fatiha + 1 Sabihis ma Rabika + 1 Khoul Ya Ayouhal Kafirouna +1 Ikhlass"},
  {"Date":" 24 juin","Sobh":"03:25","Chorouq":"05:45","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"6","Sourates":"1 Fatiha + 7 Ikhlass"},
  {"Date":" 25 juin","Sobh":"03:25","Chorouq":"05:46","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"8","Sourates":"1 Fatiha + 1 Inna Anzalnahou + 3 Ikhlass"},
  {"Date":" 26 juin","Sobh":"03:26","Chorouq":"05:46","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:11","Rakas":"4","Sourates":"1 Fatiha + 20 Ikhlass"},
  {"Date":" 27 juin","Sobh":"03:26","Chorouq":"05:47","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:12","Rakas":"2","Sourates":"1 Fatiha + 3 Sabihis ma Rabika + 3 Inna Anzalnahou + 3 Ikhlass + Falakhi + 3 Nassi"},
  {"Date":" 28 juin","Sobh":"03:26","Chorouq":"05:47","Dohr":"13:53","Asr":"18:10","Maghreb":"22:00","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Iza Diaha + 5 Ikhlass"},
  {"Date":" 29 juin","Sobh":"03:27","Chorouq":"05:48","Dohr":"13:54","Asr":"18:11","Maghreb":"22:00","Icha":"00:12","Rakas":"6","Sourates":"1 Fatiha + 3 Ikhlass"},
  {"Date":" 30 juin","Sobh":"03:27","Chorouq":"05:48","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"8","Sourates":"1 Fatiha + 4 Ikhlass"},
  {"Date":" 01 juillet","Sobh":"03:27","Chorouq":"05:49","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"10","Sourates":"1 Fatiha + 1 Al Khariatou + 5 Ikhlass (+ Demander Pardon à DIEU après salut final"},
  {"Date":" 02 juillet","Sobh":"03:28","Chorouq":"05:50","Dohr":"13:54","Asr":"18:11","Maghreb":"21:59","Icha":"00:12","Rakas":"12","Sourates":"1 Fatiha + 10 Inna Anzalnahou"},
  {"Date":" 03 juillet","Sobh":"03:28","Chorouq":"05:50","Dohr":"13:54","Asr":"18:11","Maghreb":"21:58","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
  {"Date":" 04 juillet","Sobh":"03:29","Chorouq":"05:51","Dohr":"13:55","Asr":"18:11","Maghreb":"21:58","Icha":"00:12","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
  {"Date":" 05 juillet","Sobh":"03:29","Chorouq":"05:52","Dohr":"13:55","Asr":"18:11","Maghreb":"21:58","Icha":"00:11","Rakas":"6","Sourates":"1 Fatiha + 11 Ikhlass (Si le croissant n'est pas apparu)"}
];*/
var prayers =[{"Date":" 7 juin","Sobh":"05:20","Chorouq":"06:39","Dohr":"13:09","Asr":"16:33","Maghreb":"19:38","Icha":"20:53","Rakas":"10","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Khoul Ya Ayouhal Kafirouna + 2 Ikhlass"},
  {"Date":" 8 juin","Sobh":"05:20","Chorouq":"06:39","Dohr":"13:09","Asr":"16:33","Maghreb":"19:39","Icha":"20:53","Rakas":"6","Sourates":"1 Fatiha + 10 Inna Ahtaynakal"},
  {"Date":" 9 juin","Sobh":"05:20","Chorouq":"06:39","Dohr":"13:09","Asr":"16:34","Maghreb":"19:39","Icha":"20:53","Rakas":"6","Sourates":"1 Fatiha + 4 Inna Anzalnahou + 4 Khoul Ya Ayouhal Kafirouna"},
  {"Date":" 10 juin","Sobh":"05:20","Chorouq":"06:39","Dohr":"13:09","Asr":"16:34","Maghreb":"19:39","Icha":"20:54","Rakas":"4","Sourates":"1 Fatiha + 3 Khoul Ya Ayouhal Kafirouna"},
  {"Date":" 11 juin","Sobh":"05:20","Chorouq":"06:39","Dohr":"13:10","Asr":"16:34","Maghreb":"19:40","Icha":"20:54","Rakas":"4","Sourates":"1 Fatiha + 1 Alam Nasra + 3 Ikhlass"},
  {"Date":" 12 juin","Sobh":"05:20","Chorouq":"06:40","Dohr":"13:10","Asr":"16:35","Maghreb":"19:40","Icha":"20:54","Rakas":"4","Sourates":"1 Fatiha + 12 Ikhlass"},
  {"Date":" 13 juin","Sobh":"05:20","Chorouq":"06:40","Dohr":"13:10","Asr":"16:35","Maghreb":"19:40","Icha":"20:55","Rakas":"6","Sourates":"1 Fatiha + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
  {"Date":" 14 juin","Sobh":"05:20","Chorouq":"06:40","Dohr":"13:10","Asr":"16:35","Maghreb":"19:40","Icha":"20:55","Rakas":"2","Sourates":"1 Fatiha + 12 Ikhlass"},
  {"Date":" 15 juin","Sobh":"05:21","Chorouq":"06:40","Dohr":"13:10","Asr":"16:36","Maghreb":"19:41","Icha":"20:55","Rakas":"4","Sourates":"1 Fatiha + 3 Tabat Yada + 1 Ikhlass"},
  {"Date":" 16 juin","Sobh":"05:21","Chorouq":"06:40","Dohr":"13:11","Asr":"16:36","Maghreb":"19:41","Icha":"20:56","Rakas":"4","Sourates":"1 Fatiha + 1 Ayatoul Koursiyou + 12 Inna Anzalnahou"},
  {"Date":" 17 juin","Sobh":"05:21","Chorouq":"06:40","Dohr":"13:11","Asr":"16:36","Maghreb":"19:41","Icha":"20:56","Rakas":"4","Sourates":"1 Fatiha + 7 Inna Anzalnahou + 7 Khoul Ya Ayouhal Kafirouna + 7 Ikhlass"},
  {"Date":" 18 juin","Sobh":"05:21","Chorouq":"06:41","Dohr":"13:11","Asr":"16:36","Maghreb":"19:41","Icha":"20:56","Rakas":"10","Sourates":"1 Fatiha + 6 Ikhlass"},
  {"Date":" 19 juin","Sobh":"05:21","Chorouq":"06:41","Dohr":"13:11","Asr":"16:37","Maghreb":"19:42","Icha":"20:56","Rakas":"2","Sourates":"1 Fatiha + 5 Ikhlass"},
  {"Date":" 20 juin","Sobh":"05:21","Chorouq":"06:41","Dohr":"13:11","Asr":"16:37","Maghreb":"19:42","Icha":"20:57","Rakas":"8","Sourates":"1 Fatiha + 7 Iza Diaha"},
  {"Date":" 21 juin","Sobh":"05:22","Chorouq":"06:41","Dohr":"13:12","Asr":"16:37","Maghreb":"19:42","Icha":"20:57","Rakas":"6","Sourates":"1 Fatiha + 1 Iza Diaha + 35 Ikhlass"},
  {"Date":" 22 juin","Sobh":"05:22","Chorouq":"06:41","Dohr":"13:12","Asr":"16:37","Maghreb":"19:42","Icha":"20:57","Rakas":"2","Sourates":"1 Fatiha + 10 Iza Zoulzilati"},
  {"Date":" 23 juin","Sobh":"05:22","Chorouq":"06:42","Dohr":"13:12","Asr":"16:38","Maghreb":"19:43","Icha":"20:57","Rakas":"12","Sourates":"1 Fatiha + 2 Inna Anzalnahou + 2 Ikhlass"},
  {"Date":" 24 juin","Sobh":"05:22","Chorouq":"06:42","Dohr":"13:12","Asr":"16:38","Maghreb":"19:43","Icha":"20:57","Rakas":"10","Sourates":"1 Fatiha + 1 Sabihis ma Rabika + 1 Khoul Ya Ayouhal Kafirouna +1 Ikhlass"},
  {"Date":" 25 juin","Sobh":"05:23","Chorouq":"06:42","Dohr":"13:13","Asr":"16:38","Maghreb":"19:43","Icha":"20:58","Rakas":"6","Sourates":"1 Fatiha + 7 Ikhlass"},
  {"Date":" 26 juin","Sobh":"05:23","Chorouq":"06:42","Dohr":"13:13","Asr":"16:38","Maghreb":"19:43","Icha":"20:58","Rakas":"8","Sourates":"1 Fatiha + 1 Inna Anzalnahou + 3 Ikhlass"},
  {"Date":" 27 juin","Sobh":"05:23","Chorouq":"06:43","Dohr":"13:13","Asr":"16:38","Maghreb":"19:43","Icha":"20:58","Rakas":"4","Sourates":"1 Fatiha + 20 Ikhlass"},
  {"Date":" 28 juin","Sobh":"05:24","Chorouq":"06:43","Dohr":"13:13","Asr":"16:38","Maghreb":"19:43","Icha":"20:58","Rakas":"2","Sourates":"1 Fatiha + 3 Sabihis ma Rabika + 3 Inna Anzalnahou + 3 Ikhlass + Falakhi + 3 Nassi"},
  {"Date":" 29 juin","Sobh":"05:24","Chorouq":"06:43","Dohr":"13:13","Asr":"16:38","Maghreb":"19:43","Icha":"20:58","Rakas":"4","Sourates":"1 Fatiha + 5 Iza Diaha + 5 Ikhlass"},
  {"Date":" 30 juin","Sobh":"05:24","Chorouq":"06:44","Dohr":"13:14","Asr":"16:38","Maghreb":"19:44","Icha":"20:58","Rakas":"6","Sourates":"1 Fatiha + 3 Ikhlass"},
  {"Date":" 01 juillet","Sobh":"05:25","Chorouq":"06:44","Dohr":"13:14","Asr":"16:38","Maghreb":"19:44","Icha":"20:58","Rakas":"8","Sourates":"1 Fatiha + 4 Ikhlass"},
  {"Date":" 02 juillet","Sobh":"05:25","Chorouq":"06:44","Dohr":"13:14","Asr":"16:39","Maghreb":"19:44","Icha":"20:58","Rakas":"10","Sourates":"1 Fatiha + 1 Al Khariatou + 5 Ikhlass (+ Demander Pardon à DIEU après salut final)"},
  {"Date":" 03 juillet","Sobh":"05:25","Chorouq":"06:44","Dohr":"13:14","Asr":"16:39","Maghreb":"19:44","Icha":"20:58","Rakas":"12","Sourates":"1 Fatiha + 10 Inna Anzalnahou"},
  {"Date":" 04 juillet","Sobh":"05:26","Chorouq":"06:45","Dohr":"13:14","Asr":"16:39","Maghreb":"19:44","Icha":"20:58","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
  {"Date":" 05 juillet","Sobh":"05:26","Chorouq":"06:45","Dohr":"13:14","Asr":"16:39","Maghreb":"19:44","Icha":"20:58","Rakas":"4","Sourates":"1 Fatiha + 5 Watini + 5 Khoul Ayouhal Kafirouna + 5 Ikhlass (+Demander Pardon)"},
  {"Date":" 06 juillet","Sobh":"05:26","Chorouq":"06:45","Dohr":"13:15","Asr":"16:39","Maghreb":"19:44","Icha":"20:58","Rakas":"6","Sourates":"1 Fatiha + 11 Ikhlass (Si le croissant n'est pas apparu)"}
  
]
app.factory('prayProvider',function(){

  function getAll()
  {
      return prayers;
  };

  function getOne(slug)
  {
    var bool = false;
    var num =0;
    var taiile = prayers.length;
    while(bool==false)
    {
      if(prayers[num].Date==slug)
      {
        bool =true;
      }else
      {
        num +=1;
      }
   }
    return prayers[num];
  }
  return{
  getAll: getAll,
  getOne:getOne
  }

});
