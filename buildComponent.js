lineButton.onclick = function() {
    var componentTitle  = document.getElementById('componentTitle').value;
    //$('#divForComponents').append('<canvas id="Cnvs" width=900 height=430 style="border:1px solid #000000; margin: 0 auto;"> </canvas>');
    var elem = document.getElementById('Cnvs');
    var canvas = document.createElement('canvas');
    elem.parentNode.insertBefore(canvas, elem.nextSibling);
    elem.parentNode.removeChild(elem);
    canvas.id = 'Cnvs';
    canvas.width = "900"; 
    canvas.height = "430"
    canvas.style = "border:1px solid #000000; margin: 0 auto;";
    option.title.text = componentTitle;
    var lineChart = new Chart(Cnvs, {
      type: 'line',
      data: petrol_price_years_line,
      options: option
  });
    currentChart = lineChart;
  };

barButton.onclick = function() {
    var componentTitle  = document.getElementById('componentTitle').value;
    var elem = document.getElementById('Cnvs');
    var canvas = document.createElement('canvas');
    elem.parentNode.insertBefore(canvas, elem.nextSibling);
    elem.parentNode.removeChild(elem);
    canvas.id = 'Cnvs';
    canvas.width = "900"; 
    canvas.height = "430"
    canvas.style = "border:1px solid #000000; margin: 0 auto;";
    option.title.text = componentTitle;
    var barChart = new Chart(Cnvs, {
      type: 'bar',
      data: top_cars_per_capita,
      options: option
    });
    currentChart = barChart;
  };

pieButton.onclick = function() {
    var componentTitle  = document.getElementById('componentTitle').value;
    var elem = document.getElementById('Cnvs');
    var canvas = document.createElement('canvas');
    elem.parentNode.insertBefore(canvas, elem.nextSibling);
    elem.parentNode.removeChild(elem);
    canvas.id = 'Cnvs';
    canvas.width = "900"; 
    canvas.height = "430"
    canvas.style = "border:1px solid #000000; margin: 0 auto;";
    option.title.text = componentTitle;
    var pieChart = new Chart(Cnvs, {
      type: 'pie',
      data: top_cars_per_capita,
      options: option
    });
    currentChart = pieChart;
  };

var coor1;
var coor2;

mapButton.onclick = function() {
    var componentTitle  = document.getElementById('componentTitle').value;
    option.title.text = componentTitle;
    var elem = document.getElementById('Cnvs');
    var canvas = document.createElement('div');
    elem.parentNode.insertBefore(canvas, elem.nextSibling);
    elem.parentNode.removeChild(elem);
    canvas.id = 'Cnvs';
    canvas.style="height: 430px; width: 900px; border:1px solid #000000; margin: 0 auto;"
    //canvas.style = "border:1px solid #000000; margin: 0 auto;";
    var myMap = new ymaps.Map('Cnvs', {
        center: [55.755768, 37.617671],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    myMap.events.add('click', function (event) {
      coor1 = event.get('coordPosition')[0];
      coor2 = event.get('coordPosition')[1];
      console.log(coor1);
      console.log(coor2);
      //как получить координаты щелчка по маркеру (типа event.get('target').geometry.getCoordinates() при щелчке по маркеру)?

    })  

    currentChart = myMap;
  };