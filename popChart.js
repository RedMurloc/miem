//var popCanvas = document.getElementById('popChart').getContext("2d");
Chart.defaults.global.maintainAspectRatio = false;
var	Cnvs = document.getElementById('Cnvs').getContext('2d');

var option = {
	animation: {
        duration:5000
    },
    responsive:false,
    maintainAspectRatio: false,
    position: 'center'
};

var numbers = [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398];
var increasingNums = [1, 2, 3, 4, 5, 6, 7, 8];
var someNums = [228, 359, 123, 321, 832, 232, 120, 333];
var countries = ["China", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Japan"];
var backgroundColors = [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)'
      ];
var dataClass = {
    labels: countries,
    datasets: [{
      label: 'Population',
      data: numbers,
      backgroundColor: backgroundColors
    }]
  };

var dataClass2 = {
    labels: increasingNums,
    datasets: [{
      label: 'Data',
      data: someNums,
      pointBackgroundColor: 'rgba(255,150,0,0.5)'
    }]
  }

lineButton.onclick = function() {
    var lineChart = new Chart(Cnvs, {
  		type: 'line',
  		data: dataClass2,
  		options: option
	});
  };

barButton.onclick = function() {
    var barChart = new Chart(Cnvs, {
  		type: 'bar',
  		data: dataClass,
  		options: option
	});
  };

pieButton.onclick = function() {
    var pieChart = new Chart(Cnvs, {
  		type: 'pie',
  		data: dataClass,
  		options: option
	});
  };