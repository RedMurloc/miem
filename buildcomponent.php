<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/dataTables.min.js"></script>
<title>Создание компонента отчета</title>
<script> 
    $(function(){
      $("#navigationMenu").load("navigationMenu.html"); 
    });
    $(function(){
      $("#feedback").load("feedback.html"); 
    });
    </script>
    <style type="text/css">
    	.table-names > li{
    		list-style-image: url("images/table_icon_small.png");
    	}
    	.table-names li > ul > li{
    		list-style-image: url("images/checkbox_icon_small.png");
    	}
    </style>
</head>
<body>
<div id="navigationMenu"></div>
<div id="content" class="container-fluid">
	<div class="row" style="margin-top: 10px;">
		<div class="col-lg-9 border-right border-dark" style="font-family: 'Arial'; font-size: 14pt;">
			<!-- <div class="row">
				<div class="col-lg-8">
					<h3 style="font-family: Arial;">New element name</h3>
				</div>
				<div class="col-lg-4">
					<button type="button" class="btn btn-outline-primary">Добавить элемент</button>
					<button type="button" class="btn btn-outline-danger">Удалить элемент</button>
					<button type="button" class="btn btn-outline-success">Сохранить</button>
				</div>
			</div> -->
			<div class="row">
				<div class="col-lg-12 text-center">
					<h1>Создание нового компонента отчета</h1>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12">
					<h3 style="font-family: Arial;">New element name</h3>
					<div class="float-right">
						<button type="button" class="btn btn-outline-primary">Добавить элемент</button>
						<button type="button" class="btn btn-outline-danger">Удалить элемент</button>
						<button type="button" class="btn btn-outline-success">Сохранить</button>
					</div>
				</div>
			</div>
			<div class="row" style="margin-top: 40px;">
			</div>
			<div class="row" style="margin-top: 40px;">
				<div class="col-lg-2"></div>
				<div class="col-lg-8">
					<div style="height: 500px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); text-align: center; border: 1px solid black;">
						<p>some block title</p>
						<hr style="border-color: black;">
						<p>some visualization</p>
					</div>
				</div>
				<div class="col-lg-2"></div>
			</div>
		</div>
		<div class="col-lg-3" style="min-height: 900px;">
			<div class="row">
				<div class="col-lg-12">
					<h4 style="font-family: Arial;">Доступные таблицы и атрибуты</h3>
						<?php
						$link = mysqli_connect("localhost", "root", "", "project4");

						$query = "show tables FROM project4";
						$elementList = '<ul class="table-names">';

						if ($result = $link->query($query)) {

    					/* извлечение ассоциативного массива */
   						 while ($row = $result->fetch_all(MYSQLI_NUM)) {
   						 	$i = 0;
   						 	while ($i < count($row)) {
   						 		$elementList .= "<li>" . $row[$i][0];
        						$queryNew = "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA = 'project4' AND TABLE_NAME = '". $row[$i][0] . "'";
        						$i +=1;
        						if ($resultNew = $link->query($queryNew)){
	        						$elementList .= "<ul>";
	        						$j = 0;
	        						while($rowNew = $resultNew->fetch_ALL(MYSQLI_NUM)){
	        							$j = 0;
	        							while ($j < count($rowNew)) {
	        								$elementList .= "<li>" . $rowNew[$j][0] . "</li>";
									    	$j += 1;
	        							}
									}
									$elementList .= "</ul>";
	        					}
	        					$resultNew->free();
   						 	}
        					$elementList .= "</li>";

    					}
    					$elementList .= "</ul>";
    					echo $elementList;

						    /* удаление выборки */
						    $result->free();
						}

						mysqli_close($link);
						?>
				</div>
			</div>
 			<div class="row border-top">
				<div class="col-lg-12">
					<h4 style="font-family: Arial;">Виды элементов (диаграммы)</h4>
					<p>Здесь список всех диаграм, доступных для отображения</p>
				</div>
			</div>
		</div>
	</div>
</div>
<div id="feedback"></div>
</body>
</html>