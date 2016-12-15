<?php
/*
if (!file_exists('userid')) {
    mkdir('userid', 0777, true);
}
$todo_file = fopen("userid/todo_file.txt","w+") or die("Unable to open file!");*/

//current id는 제일 밖에 꺼내놓고 directory찾기

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

$todo_file = fopen("$userid/$trav/todo_file.txt","w+") or die("Unable to open file!");
$un_todo_file = fopen("$userid/$trav/un_todo_file.txt","w+") or die("Unable to open file!");

$checklist = $_POST["checklist"];
$texts = explode("|",$checklist);

fwrite($todo_file,$texts[0]);
fwrite($un_todo_file,$texts[1]);

fclose($todo_file);
fclose($un_todo_file);
//$_SERVER['DOCUMENT_ROOT'] . '/블라블라
?>
