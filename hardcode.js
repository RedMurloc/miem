  function comp1() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs1" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs1').getContext('2d');
		var barChart = new Chart(Cnvs, {
	      type: 'bar',
	      data: top_cars_per_capita,
	      options: option
	    });
	    currentChart = barChart;	
  	}
  	else{
  		$('#Cnvs1').parent().parent().remove();
  	}
  }

  function comp2() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs2" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs2').getContext('2d');
  		var barChart = new Chart(Cnvs, {
	      type: 'bar',
	      data: petrol_producer_and_amount,
	      options: option
	    });
	    currentChart = barChart;
  	}
  	else{
  		$('#Cnvs2').parent().parent().remove();
  	}
  }

  function comp3() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs3" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs3').getContext('2d');
		var lineChart = new Chart(Cnvs, {
	      type: 'line',
	      data: Mordovia_population_line,
	      options: option
	    });
	    currentChart = lineChart;	
  	}
  	else{
  		$('#Cnvs3').parent().parent().remove();
  	}
  }

  function comp4() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs4" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs4').getContext('2d');
  		var barChart = new Chart(Cnvs, {
	      type: 'bar',
	      data: petrol_consumers_and_amount,
	      options: option
	    });
	    currentChart = barChart;
  	}
  	else{
  		$('#Cnvs4').parent().parent().remove();
  	}
  }

  function comp5() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs5" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs5').getContext('2d');
  		var lineChart = new Chart(Cnvs, {
	      type: 'line',
	      data: petrol_price_years_line,
	      options: option
	    });
	    currentChart = lineChart;
  	}
  	else{
  		$('#Cnvs5').parent().parent().remove();
  	}
  }

  function comp6() {
      $('#report').append('<div class="col-lg-4">\
          <div id="Cnvs6" style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
           \
          </div>');
        var myMap = new ymaps.Map('Cnvs6', {
        center: [55.755768, 37.617671],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects 
    .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.720753, 37.774104]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'DogParking',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })
    )
    .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.744528, 37.733295]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Альма',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })
    )
    .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.789255, 37.504842]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Приют для животных',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })
    )
    .add(new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.803369, 37.409787]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Собачий приют',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        })
    );
  }