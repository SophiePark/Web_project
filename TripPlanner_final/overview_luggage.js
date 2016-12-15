window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};

window.onload = function() {

    new Ajax.Request("checklist_luggage_openfile_F.php",{
    method: "post",
    onSuccess: showCheck,
    onFailure: ajaxFailed,
    onException: ajaxFailed
    });
}

function showCheck(ajax){
  var text = ajax.responseText;
  var text = text.split("\n");
  var doc = text[0];
  var cloth = text[1];
  var medic = text[2];
  var etc = text[3];
  var doc_v = doc.split(",");
  var cloth_v = cloth.split(",");
  var medic_v = medic.split(",");
  var etc_v = etc.split(",");

  while($("lugg").firstChild) {
  	$("lugg").removeChild($("lugg").firstChild);
  }

  for (var i = 0; i < (doc_v.length)-1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = doc_v[i];
    $("lugg").appendChild(newli);
  }
  for (var i = 0; i < (cloth_v.length)-1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = cloth_v[i];
    $("lugg").appendChild(newli);
  }

  for (var i = 0; i < (medic_v.length)-1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = medic_v[i];
    $("lugg").appendChild(newli);
  }

  for (var i = 0; i < (etc_v.length)-1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = etc_v[i];
    $("lugg").appendChild(newli);
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
