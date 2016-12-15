<?php

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

$todo_file ="$userid/$trav/todo_file.txt";
$textArray = file($todo_file);
$text = implode("",$textArray);

header("Content-type: text/plain");
print $text;

?>
