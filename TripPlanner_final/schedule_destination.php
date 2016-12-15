<?php

  $userid = "current_id.txt";
  $userid = file($userid);
  $userid = implode("",$userid);

  $trav = "current_travel_num.txt";
  $trav = file($trav);
  $trav = implode("",$trav);

  $destination_file = fopen("$userid/$trav/destination_file.txt","w+") or die("Unable to open file!");

  $dest_data = $_POST["dest_data"];
  $data = explode(",", $dest_data);


  if($data[0] =='sameInOut'){
    list($option, $departure, $dest_country, $dest_city, $in_date, $out_date) = $data;
    if($departure != '' && $dest_country != '' && $dest_city != '' && $in_date !='' && $out_date !=''){
      fwrite($destination_file,$dest_data);
      fclose($destination_file);

      header("Content-type: text/plain");
      print 'success';
    }else{
      header("Content-type: text/plain");
      print 'fail';
    }
  } else{
    list($option, $departure, $first_dest, $first_city, $in_date, $last_dest, $last_city, $out_date) = $data;
    if($departure != '' && $first_dest != '' && $first_city !='' && $in_date !='' && $last_dest != '' && $last_city !='' && $out_date !=''){
      fwrite($destination_file,$dest_data);
      fclose($destination_file);
      header("Content-type: text/plain");
      print 'success';
    }else{
      header("Content-type: text/plain");
      print 'fail';
    }
  }



  /*
  $db = new PDO("mysql:dbname=trip_planner;host=localhost", "root", "111111");
  $query = "select id from login_id";
  $rows = $db->query($query);

  foreach ($rows as $row){
    $id = $row['id'];
  }
  $id = $db ->quote($id);


  if($array[0] == 'sameInOut'){
    list($option, $departure, $dest_country, $dest_city, $in_date, $out_date) = $array;
    if($departure != '' && $dest_country != '' && $dest_city != '' && $in_date !='' && $out_date !=''){

      $option = $db ->quote($option);
      $departure = $db ->quote($departure);
      $dest_country = $db ->quote($dest_country);
      $dest_city = $db ->quote(trim($dest_city));
      $in_date = $db ->quote($in_date);
      $out_date = $db ->quote($out_date);

      $travel = "INSERT INTO travel(customer_id, trav_in_date, trav_out_date) VALUES($id, $in_date, $out_date)";
      $db->query($travel);
      $tmp = "SELECT trav_num FROM travel WHERE customer_id = $id and trav_in_date = $in_date and trav_out_date = $out_date";
      $rows = $db->query($tmp);

      foreach ($rows as $row) {
        $trav_num = $row['trav_num'];
      }

      $trav_num = $db ->quote($trav_num);

      $dropTable = "DROP TABLE travel_num";
      $creatTable = "create table travel_num (trav_num int)";
      $input = "INSERT INTO travel_num(trav_num) VALUES($trav_num)";
      $db -> query($dropTable);
      $db -> query($creatTable);
      $db -> query($input);

      header("Content-type: text/plain");
      print 'success';

    }else{
      header("Content-type: text/plain");
      print 'fail';
    }


  }else{
    list($option, $departure, $first_dest, $first_city, $in_date, $last_dest, $last_city, $out_date) = $array;
    if($departure != '' && $first_dest != '' && $first_city !='' && $in_date !='' && $last_dest != '' && $last_city !='' && $out_date !=''){

      $option = $db ->quote($option);
      $departure = $db ->quote($departure);
      $first_dest = $db ->quote($first_dest);
      $first_city = $db ->quote(trim($first_city));
      $in_date = $db ->quote($in_date);
      $last_dest = $db ->quote($last_dest);
      $last_city = $db ->quote(trim($last_city));
      $out_date = $db ->quote($out_date);

      $travel = "INSERT INTO travel(customer_id, trav_in_date, trav_out_date) VALUES($id, $in_date, $out_date)";
      $db->query($travel);
      $tmp = "SELECT trav_num FROM travel WHERE customer_id = $id and trav_in_date = $in_date and trav_out_date = $out_date";
      $rows = $db->query($tmp);

      foreach ($rows as $row) {
        $trav_num = $row['trav_num'];
      }

      $trav_num = $db ->quote($trav_num);

      $dropTable = "DROP TABLE travel_num";
      $creatTable = "create table travel_num (trav_num int)";
      $input = "INSERT INTO travel_num(trav_num) VALUES($trav_num)";
      $db -> query($dropTable);
      $db -> query($creatTable);
      $db -> query($input);
      header("Content-type: text/plain");
      print 'success';


    }else{
      header("Content-type: text/plain");
      print 'fail';
    }

  }


  $db = null;

*/


 ?>
