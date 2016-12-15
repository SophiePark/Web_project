window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};
window.onload = function() {

	get_Start_End();
	get_Citys();
	get_Sleeps();
	var rows =7;
	var cols = 7;
	// startDate[2]-endDate[2];
	alert(cols);
	var table = document.getElementById("table");
	// while (table.firstChild) table.removeChild(table.firstChild);
	for (var i=0; i<rows; i++){
		var tr = document.createElement("tr");
		var cell;
		for (var j=0; j<cols; j++){
			if (i<2){
				if (i==0){
					tr.setAttribute("class","country");
				}else if (i==1){
					tr.setAttribute("class","city");
				}
				cell = document.createElement("th");
			}else {
				if (i==2){
					tr.setAttribute("class","weather");
				}else if (i==3){
					tr.setAttribute("class","date");
				}else if (i==4){
					tr.setAttribute("class","arrivals");
				}else if (i==5){
					tr.setAttribute("class","todo");
				}else if (i==6){
					tr.setAttribute("class","etc");
				}
				cell = document.createElement("td")
			}
			cell.textContent = "value";
			tr.appendChild(cell);
		}
		table.appendChild(tr);
	}
}

function get_Start_End(){
  new Ajax.Request("overview_table_startend.php",{
  method: "post",
  onSuccess: startend,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function startend(ajax) {
	var text = ajax.responseText;
	var text = text.split(",");
	startDate = text[4].split("-");
	endDate = text[5].split("-");
	alert("start: "+startDate[1]+"/"+startDate[2]+"\nend: "+endDate[1]+"/"+endDate[2]);
}

function get_Citys(){
  new Ajax.Request("overview_table_cities.php",{
  method: "post",
  onSuccess: citys,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function citys(ajax) {
	var text = ajax.responseText;
	var lines = text.split("\n");
	var country = [];
	var city = [];
	var cityStart = [];
	var cityEnd = [];
	for (var line=0; line<lines.length; line++){
		data = lines[line].split(",");
		country.push(data[0]);
		city.push(data[1]);
		cityStart.push(data[2].split("-"));
		cityEnd.push(data[3].split("-"));
	}
	alert("country: "+country[0]+"\ncity: "+city[0]+"\nstart: "+cityStart[0][1]+"/"+cityStart[0][2]+"\nend: "+cityEnd[0][1]+"/"+cityEnd[0][2]);
}

function get_Sleeps(){
  new Ajax.Request("overview_table_sleeps.php",{
  method: "post",
  onSuccess: sleeps,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function sleeps(ajax) {
	var text = ajax.responseText;
	var lines = text.split("\n");
	var city = [];
	var date = [];
	var sleep = [];
	var important = [];
	var memo = [];
	for (var line=0; line<lines.length; line++){
		data = lines[line].split(",");
		city.push(data[0]);
		date.push(data[1].split("-"));
		sleep.push(data[2]);
		important.push(data[3]);
		memo.push(data[4]);
	}
	alert("city: "+city[0]+"\ndate: "+date[0][1]+"/"+date[0][2]+"\nsleep: "+sleep[0]+"\nmemo: "+memo[0]);
}