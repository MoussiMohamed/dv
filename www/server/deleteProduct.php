<?php
    header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
$id_Produit=($_POST['index']);

	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	$query="delete from produit where id_Produit='$id_Produit'";
	$reqExec=mysql_query($query);
	echo "$id_Produit";
 echo "row deleted";

mysql_close();
?>