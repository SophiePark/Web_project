<?php

  $userid = "current_id.txt";
  $userid = file($userid);
  $userid = implode("",$userid);

  $trav = "current_travel_num.txt";
  $trav = file($trav);
  $trav = implode("",$trav);

  $addDest_file = fopen("$userid/$trav/addDestination.txt","w+") or die("Unable to open file!");


  $dest_add = $_POST["dest_add"];
  $array = explode("|", $dest_add);

  $tmp = array();
  $tmp2 = array();

  for ($i=0; $i < sizeof($array); $i=$i+4) {
    if($array[$i] != '' && $array[$i+1] != '' && $array[$i+2] != '' && $array[$i+3] != ''){
      array_push($tmp,$array[$i]);
      array_push($tmp,$array[$i+1]);
      array_push($tmp,$array[$i+2]);
      array_push($tmp,$array[$i+3]);
      array_push($tmp2,implode(",",$tmp));
   }
     $tmp = array();
  }

   $add_array = implode("\n", $tmp2);


   fwrite($addDest_file,$add_array);

   fclose($addDest_file);

   print $add_array;

  /*
  $db = new PDO("mysql:dbname=trip_planner;host=localhost", "root", "111111");
  $query = "select id from login_id";
  $rows = $db->query($query);

  foreach ($rows as $row){
    $id = $row['id'];
  }
  $id = $db ->quote($id);

  $trav_query = "select trav_num from travel_num";
  $trav_rows = $db->query($trav_query);

  foreach ($trav_rows as $trav_row){
    $trav_num = $trav_row['trav_num'];
  }
  $trav_num = $db ->quote($trav_num);

  list($country_name, $city_name, $city_in_date, $city_out_date) = $array;
  if($country_name != '' && $city_name != '' && $city_in_date !='' && $city_out_date !=''){
    $country_name = $db -> quote($country_name);
    $city_name = $db -> quote(trim($city_name));
    $city_in_date = $db -> quote($city_in_date);
    $city_out_date = $db -> quote($city_out_date);

    $city = "INSERT INTO city(trav_num, country_name, city_name, city_in_date, city_out_date)
             VALUES($trav_num, $country_name, $city_name, $city_in_date, $city_out_date)";
    $db->query($city);
    $tmp = "SELECT city_num FROM city
    WHERE trav_num = $trav_num and country_name = $country_name city_name = $city_name";
    $rows = $db->query($tmp);

    foreach ($rows as $row) {
      $city_num = $row['city_num'];
    }

    $city_num = $db ->quote($city_num);

    $dropTable = "DROP TABLE city_num";
    $creatTable = "create table city_num (city_num int)";
    $input = "INSERT INTO city_num(city_num) VALUES($city_num)";
    $db -> query($dropTable);
    $db -> query($creatTable);
    $db -> query($input);

    header("Content-type: text/plain");
    print 'success';

  } else{
    header("Content-type: text/plain");
    print 'fail';
  }

  $db = null;
  */

 ?>
