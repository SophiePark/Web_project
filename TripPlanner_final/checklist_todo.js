window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};
window.onload = function() {

  showChecked_T();
  showChecked_F();

  $("todo-cover").onclick = function(){
    new Ajax.Request("checklist_todo.php",{
    method: "post",
    parameters: {checklist : checkFile()},
    onFailure: ajaxFailed,
    onException: ajaxFailed
    });
  }
}

function checkFile(){
  var text = "";
  var utext = "";
  var list = $$("#listTodo li input");
  for (var i = 0; i < list.length; i++) {
    if(list[i].checked === true){
        text = text + list[i].value + ",";
    }
    else{
        utext = utext + list[i].value + ",";
    }
  }
  return text + "|" + utext;
}

function showChecked_T(){
  new Ajax.Request("checklist_todo_openfile_T.php",{
  method: "post",
  onSuccess: check,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function showChecked_F(){
  new Ajax.Request("checklist_todo_openfile_F.php",{
  method: "post",
  onSuccess: uncheck,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function check(ajax){
  var texts = ajax.responseText;
  var text = texts.split(",");
  var list = $$("#listTodo li input");
  for (var i = 0; i < (text.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === text[i]){
        list[j].checked = true;
        text[i] = "exit";
      }
    }
    if(text[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = text[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",text[i]);
      checkbox.setAttribute("class","todo_item");

      newli.appendChild(checkbox);
      $("listTodo").appendChild(newli);
      checkbox.checked = true;
    }
  }
}

function uncheck(ajax){
  var texts = ajax.responseText;
  var text = texts.split(",");

  var list = $$("#listTodo li input");
  for (var i = 0; i < (text.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === text[i]){
        text[i] = "exit";
      }
    }
    if(text[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = text[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",text[i]);
      checkbox.setAttribute("class","todo_item");

      newli.appendChild(checkbox);
      $("listTodo").appendChild(newli);
    }
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
