<?php

include_once 'dbconfig.php';
session_start();
if(isset($_POST['idProduit'])){
$_SESSION['idP']=$_POST['idProduit'];
}

// if (isset($_POST['idProduit'])) {
    // $idProd = $_POST['idProduit'];
	// echo $idProd;
// }


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
    <th colspan="4">Vos fichiers...<label><a href="index.php">uploader un nouveau fichier...</a></label></th>
    </tr>
    <tr>
    <td>File Name</td>
    <td>File Type</td>
    <td>File Size(KB)</td>
    <td>View</td>
    </tr>
    <?php
    $varID=$_SESSION['idP'];
	$sql="SELECT * FROM tbl_uploads where id_produit='$varID'";
	
	$result_set=mysql_query($sql);
	while($row=mysql_fetch_array($result_set))
	{
		?>
        <tr>
        <td><?php echo $row['file'] ?></td>
        <td><?php echo $row['type'] ?></td>
        <td><?php echo $row['size'] ?></td>
      <!--  <td><a href="uploads/<?php echo $row['file'] ?>" target="_blank">view file</a></td>-->
        <td><button id="btnDisplayPDF" onclick="doGetPDF('<?php echo $row['file'] ?>')" >view pdf</button></td>
        </tr>
        <?php
	}
	?>
    </table>
    
</div>
</body>
</html>