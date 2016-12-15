
window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};
var flag = 0;
window.onload = function() {
  // alert("djw");
  check();
  $("login").onclick = function(){
    if (flag==1){
      new Ajax.Request("login_remove.php",{
      method: "post",
      parameters: {data: null},
      onFailure: ajaxFailed,
      onException: ajaxFailed
      });
      flag =0;
    }
  }
}
function check(){
  new Ajax.Request("loginCheck.php",{
  method: "post",
  onSuccess: loginC,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}


function loginC(ajax){
  var texts = ajax.responseText;
  if (texts == 1 ){
    // alert(1);
    $("login").textContent="LOGOUT";
    flag = 1;
  } else {
    $("login").textContent="LOGIN";
    flag=0;
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

