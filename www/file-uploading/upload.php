
<?php

include_once 'dbconfig.php';

if(isset($_POST['btn-upload']))
{    
    $idProd = $_POST['idProd'];
	$file = rand(1000,100000)."-".$_FILES['file']['name'];
    $file_loc = $_FILES['file']['tmp_name'];
	$file_size = $_FILES['file']['size'];
	$file_type = $_FILES['file']['type'];
	$folder="uploads/";
	$fileData =addslashes(file_get_contents($_FILES['file']['tmp_name']));
	
	$fileProperties = getimageSize($_FILES['file']['tmp_name']);
	
	// new file size in KB
	$new_size = $file_size/1024;  
	// new file size in KB
	
	// make file name in lower case
	$new_file_name = strtolower($file);
	// make file name in lower case
	
	$final_file=str_replace(' ','-',$new_file_name);
	
	if(move_uploaded_file($file_loc,$folder.$final_file))
	{
		$sql="INSERT INTO tbl_uploads(file,type,size,id_produit)
		VALUES('$final_file','$file_type','$new_size','$idProd')";
		ini_set('mysql.connect_timeout', 300);
		ini_set('default_socket_timeout', 300);
		mysql_query($sql);
		
		
		?>
		<script>
		alert('successfully uploaded');
		
        window.location.href='index.php?success';
        </script>
		<?php
	}
	else
	{
		?>
		<script>
		alert('error while uploading file');
         window.location.href='index.php?fail';
        </script>
		<?php
	}
}
?>