window.onerror = function(msg,file,line) { // 오류메세지 띄우는거
  alert(msg+"\n"+file+"\n"+line);
  return true;
};

window.onload = function() {

  showChecked_T();
  showChecked_F();

  $("luggage-cover").onclick = function(){
    new Ajax.Request("checklist_luggage.php",{
    method: "post",
    parameters: {checklist : checkFile()},
    onFailure: ajaxFailed,
    onException: ajaxFailed
    });
  }

  /*db id안되서 급한대로 파일로 대체함.ㅠㅠ
  $("luggage-cover").onclick = function(){
  new Ajax.Request("checklist_luggage_db.php",{
  method: "post",
  parameters: {checklist : checkFile()},
  onFailure: ajaxFailed,
  onException: ajaxFailed
});
}
*/
}

function checkFile(){
  var text = "";
  var utext = "";
  var list = $$("#listDoc li input");
  for (var i = 0; i < list.length; i++) {
    if(list[i].checked === true){
        text = text + list[i].value + ",";
    }
    else{
        utext = utext + list[i].value + ",";
    }
  }
  text = text + "\n";
  utext = utext + "\n";
  var list = $$("#listCloth li input");
  for (var i = 0; i < list.length; i++) {
    if(list[i].checked === true){
        text = text + list[i].value + ",";
    }
    else{
        utext = utext + list[i].value + ",";
    }
  }
  text = text + "\n";
  utext = utext + "\n";
  var list = $$("#listMedic li input");
  for (var i = 0; i < list.length; i++) {
    if(list[i].checked === true){
        text = text + list[i].value + ",";
    }
    else{
        utext = utext + list[i].value + ",";
    }
  }
  text = text + "\n";
  utext = utext + "\n";
  var list = $$("#listEtc li input");
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
  new Ajax.Request("checklist_luggage_openfile_T.php",{
  method: "post",
  onSuccess: check,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function showChecked_F(){
  new Ajax.Request("checklist_luggage_openfile_F.php",{
  method: "post",
  onSuccess: uncheck,
  onFailure: ajaxFailed,
  onException: ajaxFailed
  });
}

function check(ajax){
  //var data = JSON.parse(ajax.responseText);jason형식은  db완벽히 하고 나중에ㅠㅠ
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

  var list = $$("#listDoc li input");
  for (var i = 0; i < (doc_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === doc_v[i]){
        list[j].checked = true;
        doc_v[i] = "exit";
      }
    }
    if(doc_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = doc_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",doc_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listDoc").appendChild(newli);
      checkbox.checked = true;
    }
  }

  var list = $$("#listCloth li input");
  for (var i = 0; i < (cloth_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === cloth_v[i]){
        list[j].checked = true;
        cloth_v[i] = "exit";
      }
    }
    if(cloth_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = cloth_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",cloth_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listCloth").appendChild(newli);
      checkbox.checked = true;
    }
  }

  var list = $$("#listMedic li input");
  for (var i = 0; i < (medic_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === medic_v[i]){
        list[j].checked = true;
        medic_v[i] = "exit";
      }
    }
    if(medic_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = medic_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",medic_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listMedic").appendChild(newli);
      checkbox.checked = true;
    }
  }

  var list = $$("#listEtc li input");
  for (var i = 0; i < (etc_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === etc_v[i]){
        list[j].checked = true;
        etc_v[i] = "exit";
      }
    }
    if(etc_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = etc_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",etc_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listEtc").appendChild(newli);
      checkbox.checked = true;
    }
  }
}

function uncheck(ajax){
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

  var list = $$("#listDoc li input");
  for (var i = 0; i < (doc_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === doc_v[i]){
        doc_v[i] = "exit";
      }
    }
    if(doc_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = doc_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",doc_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listDoc").appendChild(newli);

    }
  }

  var list = $$("#listCloth li input");
  for (var i = 0; i < (cloth_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === cloth_v[i]){
        cloth_v[i] = "exit";
      }
    }
    if(cloth_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = cloth_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",cloth_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listCloth").appendChild(newli);
    }
  }

  var list = $$("#listMedic li input");
  for (var i = 0; i < (medic_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === medic_v[i]){
        medic_v[i] = "exit";
      }
    }
    if(medic_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = medic_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",medic_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listMedic").appendChild(newli);
    }
  }

  var list = $$("#listEtc li input");
  for (var i = 0; i < (etc_v.length)-1; i++) {
    for (var j = 0; j < list.length; j++) {
      if(list[j].value === etc_v[i]){
        etc_v[i] = "exit";
      }
    }
    if(etc_v[i] !== "exit"){
      var newli = document.createElement("li");
      newli.innerHTML = etc_v[i];
      var checkbox = document.createElement("input");
      checkbox.setAttribute("type","checkbox");
      checkbox.setAttribute("name","chk_doc");
      checkbox.setAttribute("value",etc_v[i]);
      checkbox.setAttribute("class","doc_item");

      newli.appendChild(checkbox);
      $("listEtc").appendChild(newli);
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
