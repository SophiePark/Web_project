window.onload = function(){

  $("new_plan").onclick=function(){
    	    //construct a Prototype Ajax.request object
          new Ajax.Request("before_schedule.php", {
                  method: "post",
                  parameters: {data : "null"},
                  onSuccess: response,
                  onFailure: ajaxFailed,
                  onException: ajaxFailed
              });

            }

}


function response(ajax){

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
