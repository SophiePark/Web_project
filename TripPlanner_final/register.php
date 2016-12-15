<?php

header("Content-type: text/plain");

  $register_data = $_POST["register_data"];
  $array = explode(",",$register_data);
  $register_id = $array[0];
  $register_password = $array[1];
  $text = $register_data . "|";

// 일단 파일이 없으면 만들고, 내용을 저장한다
// 파일이 있으면 불러와서 내용을 보고, 이미 아이디가 있는지 체크한 후, 거기에 새로운 정보를 저장한다.
if(!file_exists("register_file.txt")){
   print "success";
   $register_file = fopen("register_file.txt","w+") or die("Unable to open file!");
   fwrite($register_file,$text);
   fclose($register_file);
}
else{
    $register_file = "register_file.txt";
    $ftexts = file($register_file);
    $ftexts = implode("",$ftexts); //파일 불러오면 배열이기때문에 스트링으로 항상 만들어줘야함!!

    $ftext = explode("|",$ftexts);
    $id = "";
    for($i=0; $i<sizeof($ftext); $i++ ){//length 아니고 sizeof!
      $id = explode(",",$ftext[$i]);
      if($register_id == $id[0]){
        print "fail";
        $id = "exist";
        break;
      }
    }

    if($id !== "exist"){
      file_put_contents($register_file,$text,FILE_APPEND);
      fclose($register_file);
      print "success";
    }
}

/*
$db = new PDO("mysql:dbname=trip_planner;host=localhost", "root", "111111");
$register_id = $db -> quote($register_id);
$register_password = $db -> quote($register_password);

$query = "SELECT * FROM customer WHERE customer_id = $register_id";
$rows = $db->query($query);
$id = "";

if(isset($rows)){
  foreach ($rows as $row){
    $id = $row["customer_id"];
  }
}

if($id != ""){
  header("Content-type: text/plain");
  print "The same ID already exits.";
}
else{

    $query = "INSERT INTO customer(customer_id,customer_pw)
              VALUES($register_id,$register_password)";
    $db->query($query);
    header("Content-type: text/plain");
    print "Congratulations!You have joined.";
}

$db = null;*/
?>
