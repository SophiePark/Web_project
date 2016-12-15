<?php
  $userid = "current_id.txt";
  $userid = file($userid);
  $userid = implode("",$userid);

  $trav = "current_travel_num.txt";
  $trav = file($trav);
  $trav = implode("",$trav);

  $stay_data = $_POST["stay_data"];
  $array = explode(",", $stay_data);




  $stay_file = fopen("$userid/$trav/stay_file.txt","w+") or die("Unable to open file!");

  $tmp = array();
  $tmp2 = array();

  for ($i=0; $i < sizeof($array); $i=$i+5) {
    if($array[$i] != '' && $array[$i+1] != '' && $array[$i+2] != '' && $array[$i+3] != '' && $array[$i+4] != ''){
      array_push($tmp,$array[$i]);
      array_push($tmp,$array[$i+1]);
      array_push($tmp,$array[$i+2]);
      array_push($tmp,$array[$i+3]);
      array_push($tmp,$array[$i+4]);
      array_push($tmp2,implode(",",$tmp));
   }
     $tmp = array();
  }

  $add_array = implode("\n", $tmp2);

  fwrite($stay_file,$add_array);

  fclose($stay_file);

  print $stay_data;
?>
