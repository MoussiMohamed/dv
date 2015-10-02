<?php
header('Access-Control-Allow-Origin: *');
   
    if(isset($_POST['tAffectProduit']) ){
	$tAffectProduit     = $_POST["tAffectProduit"];
    mysql_connect("10.0.210.173", "moha","moha") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
		
	$cleanAffectProduit= stripslashes($tAffectProduit);

	// Convert JSON string to Array
  $someArray = json_decode($cleanAffectProduit, true);
$length=count($someArray);
for($i=0; $i<$length; $i++){
$id_chef_produit=$someArray[$i]["id_chef_produit"];
$id_produit=$someArray[$i]["id_produit"];

	$sqlString="insert into att_produit_chef values('$id_chef_produit','$id_produit') ON DUPLICATE KEY UPDATE id_user='$id_chef_produit'
	, id_Produit='$id_produit'";

  mysql_query($sqlString) or die(mysql_error());

}


}
else {
	echo "data missed";
	
}
	
?>