<?php

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

if(file_exists("$userid/$trav/destination_file.txt")){
  $destination_file = "$userid/$trav/destination_file.txt";
  $destination_file = file($destination_file);
  $texts = implode("",$destination_file);

  header("Content-type: text/plain");
  print $texts;

}
else{
  header("Content-type: text/plain");
  print "null";
}

?>
