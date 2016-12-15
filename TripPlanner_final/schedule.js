
window.onload = function(){


  $("next_dest").onclick=function(){
    	    //construct a Prototype Ajax.request object
          new Ajax.Request("schedule_destination.php", {
                  method: "post",
                  parameters: {dest_data: getData_dest()},
                  onSuccess: getDestination,
                  onFailure: ajaxFailed,
                  onException: ajaxFailed
              });

            }

    $("next_addDest").onclick = function(){
      new Ajax.Request("schedule_addDest.php", {
              method: "post",
              parameters: {dest_add: getData_add()},
              onSuccess: getAddDestination,
              onFailure: ajaxFailed,
              onException: ajaxFailed
          });
    }



    $("next_stay").onclick = function(){
      new Ajax.Request("schedule_stay.php", {
              method: "post",
              parameters: {stay_data: getData_stay()},
              onSuccess: getStay,
              onFailure: ajaxFailed,
              onException: ajaxFailed
          });
    }

    $("finish_schedule").onclick = function(){
      new Ajax.Request("schedule_check.php", {
              method: "post",
              parameters: {check_data: getData_check()},
              onSuccess: getCheck,
              onFailure: ajaxFailed,
              onException: ajaxFailed
          });
    }
}

function getCheckedRadio(radio_button){
	for (var i = 0; i < radio_button.length; i++) {
		if(radio_button[i].checked){
			return radio_button[i].value;
		}
	}
	return undefined;
}

function getData_dest(){
  var dest = new Array();
  var radio_button = getCheckedRadio($$("#trip_type input"));
  if(radio_button ==='sameInOut'){
    dest.push(radio_button);
    for (var i = 0; i < ($$("#same input")).length; i++) {
      dest.push(($$("#same input"))[i].value);
    }
  }else{
    dest.push(radio_button);
    for (var i = 0; i < ($$("#diff input")).length; i++) {
      dest.push(($$("#diff input"))[i].value);
    }
  }

  var dest_data = dest.join(',');
  return dest_data;
}

function getData_add(){
  var add_dest = new Array();

  for (var i = 0; i < ($$("#add-city input")).length; i++) {
    add_dest.push(($$("#add-city input"))[i].value.trim());
  }

  var add_data = add_dest.join('|');
  return add_data;
}

function getData_stay(){
  var stay = ($$("#add-hotel input"));
  var data = new Array();

  var option_data = new Array();

  option_data.push($("sleep_where").value);
  option_data.push($("sleep_when").value);

  for(var i = 0; i<stay.length; i++){
    if(stay[i].value !== "" && stay[i].value !== "important"){
      data.push(stay[i].value.trim());
      if(stay[i].checked === true){
        data.push("checked");
      }else{
        data.push("null");
      }
    }
  }

  var stay_data = option_data.join(',') +","+ data.join(',');
  return stay_data;
}

function getData_check(){
  var check = ($$("add-visit input"));
  var data = new Array();

  var option_data = new Array();

  option_data.push($("visit_where").value);
  option_data.push($("visit_when").value);

  for(var i = 0; i<check.length; i++){
    if(check[i].value !== "" && check[i].value !== "important"){
      data.push(check[i].value.trim());
      if(check[i].checked === true){
        data.push("checked");
      }else{
        data.push("null");
      }
    }
  }

  var check_data = option_data.join(',') +","+ data.join(',');
  return check_data;
}

function getDestination(ajax){
    var check = ajax.responseText;
    alert(check);
    if(check ==='fail'){
      //location.href="schedule.html";
    }

}

function getAddDestination(ajax){
  var stay_list =ajax.responseText;
  var stay_array = stay_list.split("\n");

  //where select 초기화
  while($("sleep_where").firstChild) {
		$("sleep_where").removeChild($("sleep_where").firstChild);
	}

  //when select 초기화
  while($("sleep_when").firstChild) {
		$("sleep_when").removeChild($("sleep_when").firstChild);
	}
  //where 출력
  var where = document.createElement("option");
  where.innerHTML = "WHERE?";
  $("sleep_where").appendChild(where);

  //when 출력
  var when = document.createElement("option");
  when.innerHTML = "WHEN?";
  $("sleep_when").appendChild(when);

  for(var i = 0; i < stay_array.length; i++){
    var tmp = stay_array[i].split(",");

    var country = tmp[0];
    var city = tmp[1]
    var in_date = tmp[2];
    var out_date = tmp[3];
    var date = new Array();

    //where
    var optgroup = document.createElement("optgroup");
    var option = document.createElement("option");
    optgroup.setAttribute("label", country);
    option.innerHTML = city;
    option.setAttribute("value", city);

    optgroup.appendChild(option);
    $("sleep_where").appendChild(optgroup);
  }

  $("sleep_where").onchange = function(){
    new Ajax.Request("schedule_select_where.php", {
            method: "post",
            parameters: {select_data: getSelect_data()},
            onSuccess: getSelect,
            onFailure: ajaxFailed,
            onException: ajaxFailed
        });
  }

  function getSelect_data(){
    var select = $("sleep_where").value;
    return select;
  }

  function getSelect(ajax){

    while($("sleep_when").firstChild) {
      $("sleep_when").removeChild($("sleep_when").firstChild);
    }

    var when = document.createElement("option");
    when.innerHTML = "WHEN?";
    $("sleep_when").appendChild(when);

    var select = ajax.responseText;
    //alert(select);
    var tmp = select.split(",");

    var country = tmp[0];
    var city = tmp[1]
    var in_date = tmp[2];
    var out_date = tmp[3];
    var date = new Array();


    //when
    var date_optgroup = document.createElement("optgroup");
    var date_option = document.createElement("option");
    date_optgroup.setAttribute("label","in "+country+", " + city);
    date_option.innerHTML = in_date;
    date_option.setAttribute("value", in_date);

    date_optgroup.appendChild(date_option);
    $("sleep_when").appendChild(date_optgroup);

  }



}


function getStay(ajax){

  var check_list =ajax.responseText;
  var check_array = check_list.split("\n");
  alert(ajax.responseText);

  //where select 초기화
  while($("visit_where").firstChild) {
		$("visit_where").removeChild($("visit_where").firstChild);
	}

  //when select 초기화
  while($("visit_when").firstChild) {
		$("visit_when").removeChild($("visit_when").firstChild);
	}
  //where 출력
  var where_visit = document.createElement("option");
  where_visit.innerHTML = "WHERE?";
  $("visit_where").appendChild(where_visit);

  //when 출력
  var when_visit = document.createElement("option");
  when_visit.innerHTML = "WHEN?";
  $("visit_when").appendChild(when_visit);

  for(var i = 0; i < check_array.length; i++){
    var v_tmp = check_array[i].split(",");

    var country = v_tmp[0];
    var city = v_tmp[1]
    var in_date = v_tmp[2];
    var out_date = v_tmp[3];
    var date = new Array();

    //where
    var optgroup = document.createElement("optgroup");
    var option = document.createElement("option");
    optgroup.setAttribute("label", country);
    option.innerHTML = city;
    option.setAttribute("value", city);

    optgroup.appendChild(option);
    $("visit_where").appendChild(optgroup);
  }

  $("visit_where").onchange = function(){
    new Ajax.Request("schedule_visit_where.php", {
            method: "post",
            parameters: {visit_data: getVisit_data()},
            onSuccess: getSelectVisit,
            onFailure: ajaxFailed,
            onException: ajaxFailed
        });
  }

  function getVisit_data(){
    var select = $("visit_where").value;
    return select;
  }

  function getSelectVisit(ajax){

    while($("visit_when").firstChild) {
      $("visit_when").removeChild($("visit_when").firstChild);
    }

    var when_visit = document.createElement("option");
    when_visit.innerHTML = "WHEN?";
    $("visit_when").appendChild(when_visit);

    var select = ajax.responseText;
    //alert(select);
    var v_tmp = select.split(",");

    var country = v_tmp[0];
    var city =  v_tmp[1]
    var in_date = v_tmp[2];
    var out_date = v_tmp[3];
    var date = new Array();


    //when
    var date_optgroup = document.createElement("optgroup");
    var date_option = document.createElement("option");
    date_optgroup.setAttribute("label","in "+country+", " + city);
    date_option.innerHTML = in_date;
    date_option.setAttribute("value", in_date);

    date_optgroup.appendChild(date_option);
    $("visit_when").appendChild(date_optgroup);

  }



}

function getCheck(ajax){
  alert(ajax.responseText);
}


function ajaxFailed(ajax, exception) {
	var errorMessage = "Error making Ajax request:\n\n";
	if (exception) {
		errorMessage += "Exception: " + exception.message;
	} else {
		errorMessage += "Server status:\n" + ajax.status + " " + ajax.statusText +
		                "\n\nServer response text:\n" + ajax.responseText;
	}
	alert(errorMessage);
}
