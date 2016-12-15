/**
 * Created by SOPHIE on 2016. 11. 24..
 */
function openTabS(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabS-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTabL(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabL-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTabC(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabC-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function addList(ul_id,input_id,li_id) {
  if ($(input_id).value !== "") {
      var addedLi = document.createElement('li');
      addedLi.innerHTML = '<li>' + $(input_id).value + '<input type=\'checkbox\' name=\'chk_doc\' value=' + $(input_id).value + ' class=' + li_id + '></li>';
      document.getElementById(ul_id).appendChild(addedLi);
      $(input_id).value = "";
  }
}
function addTodo(ul_id,input_id,li_id) {
  var inputTodo = document.getElementById(input_id).value;
    if (inputTodo !== "") {
      var todo = inputTodo.toString();
      var check = todo.split('/');
      if (check.length === 3) {
        var addedTodo = document.createElement('li');
        addedTodo.innerHTML = '<li>' + inputTodo + '<input type=\'checkbox\' name=\'chk_doc\' value=' + inputTodo + ' class=' + li_id + '></li>';
        document.getElementById(ul_id).appendChild(addedTodo);
      }
    }
  document.getElementById(input_id).value = "";
}
function changeTripType(id) {
    if(id == "same")
    {
        document.getElementById("same").style.display = '';
        document.getElementById("diff").style.display = 'none';
    }
    else
    {
        document.getElementById("diff").style.display = 'block';
        document.getElementById("same").style.display = 'none';

    }
}

function updateDB() {
  var tempMSG = "have to save changed list!!";
  alert(tempMSG);
  //check if there are changed lists or not?
  //if changed lists exist, save them and INSERT DB!
}

function addLine(div_id, line_id) {
  var ori_div = document.getElementById(line_id);
  var remover = document.getElementById(div_id).children;
  for(var i = 0; i<remover.length;i++){
    if(remover[i].className === 'addMsg'){
      document.getElementById(div_id).removeChild(remover[i]);
    }
  }
  var cnt = document.getElementById(div_id).childElementCount;
  var num = cnt+1;
  var newLineId = line_id.substring(0,3)+num;
  var newLineClass =line_id.substring(0,3)+'line';
  var clone = ori_div.cloneNode(true);
  var clone_div = document.createElement('div');
  clone_div.id = newLineId;
  clone_div.className = newLineClass;
  clone_div.innerHTML = clone.innerHTML;
  document.getElementById(div_id).appendChild(clone_div);
}

