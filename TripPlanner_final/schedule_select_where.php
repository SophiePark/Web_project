<?php
  $userid = "current_id.txt";
  $userid = file($userid);
  $userid = implode("",$userid);

  $trav = "current_travel_num.txt";
  $trav = file($trav);
  $trav = implode("",$trav);
  
  $select_data = $_POST["select_data"];

  $select_list = "$userid/$trav/addDestination.txt";
  $lines = file($select_list);



  for ($i = 0; $i < count($lines); $i++) {
   list($country, $city, $in_date, $out_date) = explode(",", trim($lines[$i]));
	 if ($city == $select_data) {
	 	  $select = $country.",".$city.",".$in_date.",".$out_date;
 	  }
  }
  print $select;
 ?>
