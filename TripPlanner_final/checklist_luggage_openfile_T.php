<?php
$userid = "current_id.txt";
$userid = file($userid);
$userid = implode("",$userid);

$trav = "current_travel_num.txt";
$trav = file($trav);
$trav = implode("",$trav);

$luggage_file ="$userid/$trav/luggage_file.txt";
$textArray = file($luggage_file);
$text = implode("",$textArray);
//$categoryArray = explode("\n",$text);

header("Content-type: text/plain");
print $text;

/* jason 형식으로 보내기. 필요할때
header("Content-type: application/json");
print "{\n  \"checklist_luggage\": [\n";

for($i=0; $i < count($categoryArray); $i++){
  $category_num = "category" + $i;
  print "     {\"category_num\": \"$category_num\" ";
  $valueArray = explode(",",$categoryArray[$i]);

  for($j=0; $j < count($valueArray)-1; $j++){
    $p = $j + 1;
    $value_num = "value$p";
    $value = $valueArray[$j];
    print ", \"$value_num\": \"$value\"";
  }
  if($i == count($categoryArray)-1){
    print "}\n";
  }
  else{
    print "},\n";
  }
}

print"   ]\n}";
*/

?>
