<?php

  $login_data=$_POST["login_data"];
  $array = explode(",", $login_data);
  $login_id = $array[0];
  $login_pw = $array[1];


if(!file_exists("register_file.txt")){
  header("Content-type: text/plain");
  print "nothing";
}
else{

  $register_file = "register_file.txt";
  $ftexts = file($register_file);
  $ftexts = implode("",$ftexts); //파일 불러오면 배열이기때문에 스트링으로 항상 만들어줘야함!!

  $ftext = explode("|",$ftexts);
  $idpw="";

  for($i=0; $i<sizeof($ftext); $i++ ){//length 아니고 sizeof!

    if($ftext[$i] == $login_data){
      header("Content-type: text/plain");
      print "success";

      if (!file_exists($login_id)) {
        mkdir($login_id, 0777, true);
      }

      $login_file = fopen("current_id.txt","w+") or die("Unable to open file!");
      fwrite($login_file,$login_id);
      fclose($login_file);
      $idpw = "exist";
      break;
    }

  }

  if($idpw !== "exist"){
    header("Content-type: text/plain");
    print "fail";
  }
}


/*
  $db = new PDO("mysql:dbname=trip_planner;host=localhost", "root", "111111");
  $login_id = $db->quote($login_id);
  $login_pw = $db->quote($login_pw);
  $query = "select customer_id from customer where customer_id = $login_id and customer_pw = $login_pw";
  $rows = $db->query($query);



  foreach ($rows as $row){
    $id = $row['customer_id'];
  }

  if($id != ''){
    header("Location:before_schedule.html");
  } else{
    header("Content-type: text/plain");
    print 'nothing';
  }
*/

 ?>
