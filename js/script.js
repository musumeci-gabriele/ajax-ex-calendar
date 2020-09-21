// FUNZIONE STAMPA CALENDARIO
function printCalendar(date){
  var dateCalendar = moment(date);
  // Pulizia della lista
  $("#days").html("");

  // Intestazione del mese
  $("h1").text(dateCalendar.format("MMMM YYYY"));

  var dayInMonth = dateCalendar.daysInMonth();

  // TEMPLATE DEL CALENDARIO DEI GIORNI
  var source = $("#day-template").html();
  var template = Handlebars.compile(source);

  // STAMPA GIORNI DEL CALENDARIO
  for (var i = 0; i <= dayInMonth; i++) {
    var context = {
      "day": i,
      "month": dateCalendar.format("MMMM"),
      "dateComplete": dateCalendar.format("YYYY-MM-DD")
    };

    var html = template(context);

    $("#days").append(html);
    dateCalendar.add(1, "days");

  }
}

// FUNZIONE STAMPA FESTIVITA' CON CHIAMATA ALL'API E STAMPA LE FESTIVITA'
function printHolidays(date){
  // chiamata al server del calendario 2018
  $.ajax(
    {
      "url": "https://flynn.boolean.careers/exercises/api/holidays?year=2018&month=0",
      "data": {
        "year": 2018,
        "month": date.format("M")-1
      },
      "method": "GET",
      "success": function(data){
        var holidays = data.response;
        for (var i = 0; i < holidays.length; i++) {
          var holidaysDate = holidays[i].date;
          var holidaysName = holidays[i].name;

          $(".day[data-date = '"+ holidaysDate +"']").addClass("redHoliday");
          $(".day[data-date = '"+ holidaysDate +"'] span").text("- "+ holidaysName);
          }
      },
      "error": function(){
        alert("Errore!");
      }
    }
  );
}

$(document).ready(function(){
 // DATA INIZIO CALENDARIO
  var date = moment("2018-01-01");

  printCalendar(date);
  printHolidays(date);

});

$(".prev").click(function(){
  if(date.format("M") == 1){
    alert("non puoi andare indietro");
  }else{
    date.subtract(1, "months");
    printCalendar(date);
    printHolidays(date);
  }
});

$(".next").click(function(){
  if(date.format("M") == 11){
    alert("non puoi andare avanti");
  }else{
    date.add(1, "months");
    printCalendar(date);
    printHolidays(date);
  }
});
