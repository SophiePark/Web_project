<?php

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

$un_luggage_file ="$userid/$trav/un_luggage_file.txt";
$textArray = file($un_luggage_file);
$text = implode("",$textArray);

header("Content-type: text/plain");
print $text;
?>
