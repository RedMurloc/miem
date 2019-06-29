  component1.onclick = function() {
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

    component2.onclick = function() {
  	if(!$(this).hasClass('checked')){
  		$('#report').append('<div class="col-lg-4">\
					<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
						<canvas id="Cnvs2" width="300" height="300"> \
					</div>');
  		var Cnvs = document.getElementById('Cnvs2').getContext('2d');
  		var barChart = new Chart(Cnvs, {
	      type: 'pie',
	      data: petrol_producer_and_amount,
	      options: option
	    });
	    currentChart = barChart;
  	}
  	else{
  		$('#Cnvs2').parent().parent().remove();
  	}
  }

    component3.onclick = function() {
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

    component4.onclick = function() {
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

    component5.onclick = function() {
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

  component6.onclick = function() {
    if(!$(this).hasClass('checked')){
      $('#report').append('<div class="col-lg-4">\
          <div id="Cnvs6" style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
           \
          </div>');
        myMap = new ymaps.Map('Cnvs6', {
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
                hintContent: '48   собак'
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
                hintContent: '27 собак'
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
                hintContent: '61 собака'
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
                iconContent: 'МИЭМ',
                hintContent: '2 собаки'
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
    else{
      myMap.destroy();
      $('#Cnvs6').parent().remove();
    }
  }

  component7.onclick = function() {
    if(!$(this).hasClass('checked')){
      $('#report').append('<div class="col-lg-4">\
          <div id="text1" style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
            Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции представляет собой интересный эксперимент проверки позиций, занимаемых участниками в отношении поставленных задач. С другой стороны реализация намеченных плановых заданий\
          </div>');

    }
    else{
      $('#text1').parent().remove();
    }
  }

  component8.onclick = function() {
    if(!$(this).hasClass('checked')){
      $('#report').append('<div style="height: 300px; width: 300px; margin-top: 40px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">\
          <table id="table1">\
  <tr>\
    <th>Company</th>\
    <th>Contact</th>\
    <th>Country</th>\
  </tr>\
  <tr>\
    <td>Alfreds Futterkiste</td>\
    <td>Maria Anders</td>\
    <td>Germany</td>\
  </tr>\
  <tr>\
    <td>Centro comercial Moctezuma</td>\
    <td>Francisco Chang</td>\
    <td>Mexico</td>\
  </tr>\
  <tr>\
    <td>Ernst Handel</td>\
    <td>Roland Mendel</td>\
    <td>Austria</td>\
  </tr>\
  <tr>\
    <td>Island Trading</td>\
    <td>Helen Bennett</td>\
    <td>UK</td>\
  </tr>\
</table>');

    }
    else{
      $('#table1').parent().remove();
    }
  }

  