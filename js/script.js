$(document).ready(function(){
 // data inizio calendario
  var date = moment("2018-01-01");

  printCalendar(date);
  printHolidays(date);

});

function printCalendar(date){
    var momentDate = moment(date);

    $("h1").text(momentDate.format("MMMM YYYYY"));
    // TEMPLATE DEL CALENDARIO dei giorni
    var source = $("#day-template").html();
    var template = Handlebars.compile(source);

        // STAMPO GIORNI del calendario
    for (var i = 0; i <= momentDate.daysInMoment(); i++) {
      var dateComplate = momentDate.format("YYYY")+"-"+ momentDate.format("MM")+"-"+addZero(i);
      var context = {
        "day": i,
        "month": momentDate.format("MMMM"),
        "dateComplete": dateComplate
      };

      var html = template(context);

      $("#days").append(html);

    }
}


function printHolidays(holidays){
  var month = momentDate.format("M")-1;

  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/holidays",
      "data": {
        "year": 2018,
        "month": month
      },
      "method": "GET",
      "success": function(data){
        var holidays = data.response;

        if(holidays.lenght > 0){
          for (var i = 0; i < holidays.length; i++) {

            var holidaysDate = holidays[i].date;
            var holidaysName = holidays[i].name;

            $(".day[data-date = '"+holidayDate+"']").addClass("holiday");
            $(".day[data-date = '"+holidayDate+"'].holidayType").text("- "+ holidayName);
          }
        }
      },
      "error": function(prova){
        alert("Errore!");
      }
    }
  );

}


function addZero(num){
  if(num < 10){
    return "0"+num;
  }
}
