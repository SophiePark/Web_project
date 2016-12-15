$(document).ready(function(){
	// var $jq = jQuery.noConflict();
	var api = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=';
	// var input = select('#city');
	var apiKey = '&APPID=69a079122a4fb7347a09040c1a139a87';
	var units = '&units=metric';
	var cnt = '&cnt=16';
	var urlArr = [];
	var cityArr = [];
	var city = j$('.city th');
	var tdDate = j$('.date td');
	var resultData = [];
	var j = 0;

	var cityColspan = [];
	for (var i=0; i<city.length; i++){
		cityColspan.push(city[i].colSpan);
	}

	for (var i=0; i<tdDate.length; i++){
		var cityName = city[j].textContent;
		if (cityColspan[j] > 1){
			cityColspan[j] = cityColspan[j]-1;
		} else if (cityColspan[j] == 1) {
			j = j+1;
		}
		urlArr.push(api+cityName+apiKey+units+cnt);
	}

	for (j=0; j<tdDate.length; j++){
		(function(j){
			j$.getJSON(urlArr[j], function(json){
				var data = JSON.stringify(json);
				var parsedData = JSON.parse(data);
				for (var i=0; i<parsedData.list.length; i++){
					var cityJSON = parsedData.city.name;
					var dt = parsedData.list[i].dt;
					var date = new Date(dt*1000);
					var month = date.getMonth()+1;
					var day = date.getDate()+1;
					var resultDate = month+"/"+day;
					var weather = parsedData.list[i].weather[0].main;
					var temp = parsedData.list[i].temp.day;
					if (resultDate == tdDate[j].textContent ){
						var tmpResult = (j+":"+cityJSON+"-"+resultDate+" "+weather+", "+temp+"°C");
						// alert(tmpResult);
						j$("tr.weather td:nth-child("+(j+1)+")").html(weather+", "+temp+"°C");
						break;
					}
				}
		    });
		})(j)
	}
	// alert(resultData);
	// for (var i=0; i<resultData.length; i++){
	// 	// var line = 
	// 	alert(resultData[i]);
	// 	// if (resultData[i].startsWith(i)){
	// 	// 	$('.weather:nth-child(1)').textContent = resultData[i];
	// 	// }
	// }
});
