<?php

include_once 'dbconfig.php';
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>E-adv Gestion de Contenu</title>
<link rel="stylesheet" href="style.css" type="text/css" />
</head>
<body onload="fillIdProd()">
	
		
<div id="header">
<label>Ajouter Document </label>
</div>
<div id="body">
	<script>
			 function fillIdProd(){
			 var prodId = sessionStorage.getItem("id_Produit");
			 document.getElementById('idProd').value = prodId;
			 
			 }
			 
		</script>
	<form name="forma" action="upload.php" method="post" enctype="multipart/form-data">
	
	Type : <select>
  <option value="PDF">Presentation</option>
  <option value="saab">Article</option>
  	</select>
	<br><br>
	<input type="file" name="file" />
	
	<input type="text" style="display:none" id="idProd" name="idProd"  />
	<button type="submit" name="btn-upload">upload</button>
	</form>
    <br /><br />
    <?php
	if(isset($_GET['success']))
	{
		?>
        <label>File Uploaded Successfully...  <a href="view.php">Veuillez cliquer ici pour voir les fichiers</a></label>
        <?php
	}
	else if(isset($_GET['fail']))
	{
		?>
        <label>Problem While File Uploading !</label>
        <?php
	}
	else
	{
		?>
        <label>Veuillez inserer un fichier (PDF)</label>
        <?php
	}
	?>
</div>
<div id="footer">
<label>By <a href="http://www.interactions.tn/">Interactions</a></label>
</div>
</body>
</html>