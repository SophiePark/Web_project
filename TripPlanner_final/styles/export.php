<?php  
 //export.php  
$text = file_get_contents("overview.html");

 if(isset($_POST["create_word"]))  
 {  
      if(empty($_POST["heading"]))  
      {  
           echo '<script>alert("Both Fields are required")</script>';  
           echo '<script>window.location = "overview.html"</script>';  
      }  
      else  
      {  
           header("Content-type: application/vnd.ms-word");  
           header("Content-Disposition: attachment;Filename=".rand().".doc");  
           header("Pragma: no-cache");  
           header("Expires: 0");  
           // echo "<html><head><title></title></head>"

            if (preg_match('~<table[^>]*>(.*?)</table>~si', $text, $body))
            {   
                echo "<table>";
                echo $body[1];
                echo "</table>";
            } 
            if (preg_match('~<div class="notice"[^>]*>(.*?)<div class="doc">~si', $text, $body))
            {   
                echo "<div>";
                echo $body[1];
            } 
           // echo $_POST["body"];    
      }  
 }  
 if (isset($_POST["create_pdf"])) 
 {
      if(empty($_POST["heading"]))  
      {  
           echo '<script>alert("Both Fields are required")</script>';  
           echo '<script>window.location = "overview.html"</script>';  
      }  
      else  
      {   
          //file_get_contents is standard function
          require("fpdf/fpdf.php");
          $pdf=new FPDF();
          // var_dump(get_class_methods($pdf));

          $pdf->AddPage();
          $pdf->SetFont("Arial","B","20");
          $pdf->Cell(0,20,"TRIP PLANNER",1,1,"C");
          
          $pdf->SetFont("Arial","","15");
          if (preg_match('~<table[^>]*>(.*?)</table>~si', $text, $body))
          {   
              $pdf->Cell(0,6,"<table>",1,1);
              $pdf->Multicell(0,6,"{$body[1]}",1,1);
              $pdf->Cell(0,6,"</table>",1,1);
          }
          if (preg_match('~<div class="notice"[^>]*>(.*?)<div class="doc">~si', $text, $body))
          {   
              $pdf->SetFont("Arial","","15");
              $pdf->Cell(0,6,"<div>",1,1);
              $pdf->SetFont("Arial","","15");
              $pdf->Multicell(0,6,"{$body[1]}",1,1);
          } 
          
          // $pdf->Image('styles/images');
          $pdf->Output();

      }  

 }
  if (isset($_POST["create_zip"])) 
 {
      $userid = "current_id.txt";
      $userid = file($userid);
      $userid = implode("",$userid);
      $trav = "current_travel_num.txt";
      $trav = file($trav);
      $trav = implode("",$trav);

      $dir = "$userid/$trav";
      $zip_file = "$trav.zip";

      // Get real path for our folder
      $rootPath = realpath($dir);

      // Initialize archive object
      $zip = new ZipArchive();
      $zip->open($zip_file, ZipArchive::CREATE | ZipArchive::OVERWRITE);

      // Create recursive directory iterator
      /** @var SplFileInfo[] $files */
      $files = new RecursiveIteratorIterator(
          new RecursiveDirectoryIterator($rootPath),
          RecursiveIteratorIterator::LEAVES_ONLY
      );

      foreach ($files as $name => $file)
      {
          // Skip directories (they would be added automatically)
          if (!$file->isDir())
          {
              // Get real and relative path for current file
              $filePath = $file->getRealPath();
              $relativePath = substr($filePath, strlen($rootPath) + 1);

              // Add current file to archive
              $zip->addFile($filePath, $relativePath);
          }
      }

      // Zip archive will be created only after closing object
      $zip->close();


      header('Content-Description: File Transfer');
      header('Content-Type: application/octet-stream');
      header('Content-Disposition: attachment; filename='.basename($zip_file));
      header('Content-Transfer-Encoding: binary');
      header('Expires: 0');
      header('Cache-Control: must-revalidate');
      header('Pragma: public');
      header('Content-Length: ' . filesize($zip_file));
      readfile($zip_file);
 }

 ?>  