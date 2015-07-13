<?php

include_once 'dbconfig.php';
session_start();
if(isset($_POST['idProduit'])){
$_SESSION['idP']=$_POST['idProduit'];
}


?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>E-adv Gestion de Contenu </title>
<link rel="stylesheet" href="style.css" type="text/css" />
<script type= "application/javascript" src="../touchPDFJQuery/pdf.js"></script>
</head>
<body>
<div id="header">
<label>Uploader Fichier</label>
</div>
<div id="body">
	<table width="80%" border="1">
    <tr>
    <th colspan="6">Vos fichiers...<label><a href="index.php">uploader un nouveau fichier...</a></label></th>
    </tr>
    <tr>
    <td>ID</td>
    <td>Nom</td>
    <td>Type</td>
    <td>Taille (KB)</td>
    <td>Afficher</td>
    <td>Supprimer</td>
    </tr>
    <?php
    $varID=$_SESSION['idP'];
	
	$sql="SELECT * FROM tbl_uploads where id_produit='$varID'";
	
	$result_set=mysql_query($sql);
	while($row=mysql_fetch_array($result_set))
	{
		?>
        <tr>
        <td><?php echo $row['id_file'] ?></td>
        <td><?php echo $row['file'] ?></td>
        <td><?php echo $row['type'] ?></td>
        <td><?php echo $row['size'] ?></td>       
        <td><button id="btnDisplayPDF" onclick="doGetPDF('<?php echo $row['file'] ?>')" >Afficher PDF</button></td>
		<td><button id="btnDeletePDF" onclick="doDeletePDF('<?php echo $row['id_file'] ?>','<?php echo $row['file'] ?>')" >Supprimer PDF</button></td>
        </tr>
        <?php
	}
	?>
    </table>
    
</div>
</body>
</html>