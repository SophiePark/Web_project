<?php
$checklist = $_POST["checklist"];
list($docs, $cloths, $medics, $etcs) = explode("/n", $checklist);

$db = new PDO("mysql:dbname=trip_planner;host=localhost", "root", "111111");

$doc = explode(",",$docs);
for($i=0; $i < count($doc)-1; $i++){
    $doc_v = $doc[$i];
    $doc_v = $db -> quote($doc_v);
    $query = "INSERT INTO luggage(luggage_type,luggage_name,trav_num)
                VALUES("doc",$doc_v,1)";
    $db->query($query);
}


$cloth = explode(",",$cloths);
for($i=0; $i < count($cloth)-1; $i++){
  if($cloth[$i]!==""){
    $cloth_v = $cloth[$i]
    $colth_v = $db -> quote($cloth_v);
    $query = "INSERT INTO luggage(luggage_type,luggage_name,trav_num)
                VALUES("cloth",$cloth_v,1)";
    $db->query($query);
  }
}

$medic = explode(",",$medics);
for($i=0; $i < count($medic)-1; $i++){
  if($medic[$i]!==""){
    $medic_v = $medic[$i]
    $medic_v = $db -> quote($medic_v);
    $query = "INSERT INTO luggage(luggage_type,luggage_name,trav_num)
                VALUES("medic",$medic_v,1)";
    $db->query($query);
  }
}

$etc = explode(",",$etcs);
for($i=0; $i < count($etc)-1; $i++){
  if($etc[$i]!==""){
    $etc_v = $etc[$i]
    $etc_v = $db -> quote($etc_v);
    $query = "INSERT INTO luggage(luggage_type,luggage_name,trav_num)
                VALUES("etc",$etc_v,1)";
    $db->query($query);
  }
}
$db = null;
?>
