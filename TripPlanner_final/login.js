window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};

window.onload = function() {


  $("login_submit").onclick=function(){
      if($("id").value === "" || $("password").value === ""){
        alert(" ID or password error :(");
      }else{

    	    //construct a Prototype Ajax.request object
          new Ajax.Request("login.php", {
                  method: "post",
                  parameters: {login_data:getData_id()},
                  onSuccess: check_user,
                  onFailure: ajaxFailed,
                  onException: ajaxFailed
              });

      }
  }

    $("register_submit").onclick = function(){

        if($("register_id").value == ""){
          $("register_id").placeholder = "Please enter your Username.";
        }
        else if($("register_password").value == ""){
          $("register_password").placeholder = "Please enter a Password.";
        }
        else if($("password_check").value == ""){
          $("password_check").placeholder = "Please enter Password Check.";
        }
        else if($("password_check").value !== $("register_password").value){
          $("password_check").value = "";
          $("password_check").placeholder = "Please re-enter your password.";
        }
        else{
          new Ajax.Request("register.php",{
            method: "post",
            parameters: {register_data: getData_reg()},
            onSuccess: register_user,
            onFailure: ajaxFailed,
            onException: ajaxFailed
          });
        }
    }

}



function getData_id(){
  var login_data = $("id").value + "," + $("password").value;
  return login_data;
}

function getData_reg(){
  var register_data = $("register_id").value + "," + $("register_password").value;
  return register_data;
}

function check_user(ajax){
  var user = ajax.responseText;
  alert(ajax.responseText);
  if(user === "fail"){
    alert("ID or password error :(");
  }else if(user === "nothing"){
    alert("Register first");
  }else{
    location.href="before_schedule.html";
    alert("Login success!");
  }
}

function register_user(ajax){
  var check = ajax.responseText;
  if(check === "fail"){
    alert("The same ID already exists.");
  }else{
    alert("Successfully registered");
    location.href="login.html";
  }
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
