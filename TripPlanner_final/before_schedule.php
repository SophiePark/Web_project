<?php
  $userid = "current_id.txt";
  $userid = file($userid);
  $userid = implode("",$userid);


  $trav_num = 1;

  while(file_exists("$userid/$trav_num")){
      $trav_num = $trav_num +1;
  }

  mkdir("$userid/$trav_num", 0777, true);

  $trav_file = fopen("current_travel_num.txt","w+") or die("Unable to open file!");

  fwrite($trav_file,$trav_num);
  fclose($trav_file);

  header("Content-type: text/plain");
  print "$userid/$trav_num";

 ?>
