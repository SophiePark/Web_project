<?php

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

$luggage_file = fopen("$userid/$trav/luggage_file.txt","w+") or die("Unable to open file!");
$un_luggage_file = fopen("$userid/$trav/un_luggage_file.txt","w+") or die("Unable to open file!");

$checklist = $_POST["checklist"];
$texts = explode("|",$checklist);

fwrite($luggage_file,$texts[0]);
fwrite($un_luggage_file,$texts[1]);

fclose($luggage_file);
fclose($un_luggage_file);

?>
