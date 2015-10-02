<?php
header('Access-Control-Allow-Origin: *');
   
    if(isset($_POST['tAffectRegion']) ){
	$tAffectRegion     = $_POST["tAffectRegion"];
    mysql_connect("10.0.210.173", "moha","moha") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
		
	$cleanAffectRegion= stripslashes($tAffectRegion);

	// Convert JSON string to Array
  $someArray = json_decode($cleanAffectRegion, true);
$length=count($someArray);
for($i=0; $i<$length; $i++){
$id_delegue=$someArray[$i]["id_delegue"];
$id_region=$someArray[$i]["id_region"];

	$sqlString="insert into attr_region_delegue values('$id_delegue','$id_region') ON DUPLICATE KEY UPDATE id_user='$id_delegue'
	, id_region='$id_region'";

  mysql_query($sqlString) or die(mysql_error());

}


}
else {
	echo "data missed";
	
}
	
?>