window.onload = function(){

  show_plans();

}

function show_plans(){

          new Ajax.Request("schedule_exist.php", {
                  method: "post",
                  parameters: {data : "null"},
                  onSuccess: response,
                  onFailure: ajaxFailed,
                  onException: ajaxFailed
              });


}

function response(ajax){
  var text = ajax.responseText;
  while ($("list").firstChild) $("list").removeChild($("list").firstChild);

   var lines = text.split("\n");
   for(var line = 0; line < lines.length-1; line++){
     var items = lines[line].split(",");

     var newli = document.createElement("li");
     var a = document.createElement("a");
     a.setAttribute("href","schedule.html");
     //newli.setAttribute("onclick",changeTnum(items[0]));
     a.setAttribute("id",line);
     a.innerHTML = "plan"+ items[0] + " (" + items[1] + " , " + items[2] + ")" ;
     newli.appendChild(a);
     a.style.color = "#757266"//change!!!T.T
     $("list").appendChild(newli);

    }
    //var l = lines.length

    //changeTnum(l);
}
/*
function changeTnum(l){

for(var i = 0; i<l; i++){
  $$("list li")[i].onclick = function(){
    new Ajax.Request("schedule_exist_change.php",{
      method: "post",
      parameters: {plan_num: i},
      onSuccess: check,
      onFailure: ajaxFailed,
      onException: ajaxFailed
    });
  }

}*/

//}
//
// function check(ajax){
//   var a = ajax.responseText;
//   alert(a);
// }

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
