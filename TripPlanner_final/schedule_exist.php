<?php

$trav_num = 1;

$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

  while(file_exists("$userid/$trav_num")){
     $trav_num = $trav_num +1;
  }
   $trav_num = $trav_num;

 for($i=0; $i<$trav_num; $i++){

   if(file_exists("$userid/$i/destination_file.txt")){
     $t = "$userid/$i/destination_file.txt";
     $t = file($t);
     $text = implode("",$t);
     $text = explode(",",$text);
     if($text[0] == "sameInOut"){
       if(array_key_exists(4, $text)){
        $in_date = $text[4];
      }
      if(array_key_exists(5, $text)){
        $out_date = $text[5];
      }
      header("Content-type: text/plain");
      print $i.",".$in_date.",".$out_date."\n";
    }
     else{
       if(array_key_exists(4, $text)){
        $in_date = $text[4];
      }
      if(array_key_exists(7, $text)){
        $in_date = $text[7];
      }
       header("Content-type: text/plain");
       print $i.",".$in_date.",".$out_date."\n";
     }
   }
 }

?>
