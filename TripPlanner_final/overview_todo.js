window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};

window.onload = function() {

    new Ajax.Request("checklist_todo_openfile_F.php",{
    method: "post",
    onSuccess: showCheck,
    onFailure: ajaxFailed,
    onException: ajaxFailed
    });
}


function showCheck(ajax){

  while($("todo1").firstChild) {
  	$("todo1").removeChild($("todo1").firstChild);
  }

  while($("todo2").firstChild) {
  	$("todo2").removeChild($("todo2").firstChild);
  }

  while($("todo3").firstChild) {
    $("todo3").removeChild($("todo3").firstChild);
  }

  var texts = ajax.responseText;
  var text = texts.split(",");

  for (var i = 0; i < (text.length)-1; i++) {
    var newli = document.createElement("li");
    newli.innerHTML = text[i];
    $("text").appendChild(newli);
  }
}
