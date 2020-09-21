$(document).ready(function(){
 // data iniozio calendario
  var date = "2018-01-01";

  var momentDate = moment(date);

// TEMPLATE DEL CALENDARIO dei giorni
  var source = $("#day-template").html();
  var template = handlebars.compile(source);

// stamppo i giorni del mio calendario
  var dateCompleteMoment = moment(date);

  // STAMPO GIORNI del calendario
  for (var i = 0; i <= momentDate.daysInMoment(); i++) {
    var context = {
      "day": i,
      "month": momentDate.format("MMMM"),
      "dateComplete": momentDate.format("YYYY-MM-DD")
    };

    var html = template(context);

    $("#days").append(html);
    console.log(momnetDate);
    dateComplateMoment.add(1, "date");

  }

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      "data": {
        "year": 2018,
        "month": 0
      },
      "method": "GET",
      "success": function(data){
        printHolidays(data.response)
      },
      "error": function(prova){
        alert("Errore!");
      }
    }
  );

  function printHolidays(holidays){
    if(holidays.lenght > 0){
      for (var i = 0; i < holidays.length; i++) {
        var holidaysDate = holidays[i].date;
        var holidaysName = holidays[i].name;
        $(".dav[data-date = '"+holidavDate+"']").addClass("holidav";)
    }
  }



});
