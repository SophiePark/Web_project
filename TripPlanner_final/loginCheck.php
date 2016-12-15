<?php
if (file_exists("current_id.txt")){
	$text=1;
}else {
	$text=0;
}

header("Content-type: text/plain");
print $text;
?>