<?php

header("Content-type: text/plain");
if (!unlink("current_id.txt"))
  {
  print ("Error deleting current_id.txt");
  }
else
  {
  print ("Deleted current_id.txt");
  }

?>