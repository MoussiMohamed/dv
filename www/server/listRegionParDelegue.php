<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
	mysql_connect("10.0.210.173", "moha","moha") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database

if(isset($_POST['id_delegue']) ){
$idDelegue=$_POST['id_delegue'];
//echo=$idDelegue;
/*$condition=" and id_user='$idDelegue'";*/
	$query="select * from user u, role r, attrib_role_user atRU, region rg, attr_region_delegue atRD
where atRU.id_user=u.id_user and atRU.id_role=r.id_role
and rg.id_region=atRD.id_region and atRD.id_user=u.id_user
and atRU.id_role=2 and atRD.id_user='$idDelegue' order by u.id_user desc";
	$reqExec=mysql_query($query);
	
 $users;
 	
 while($users[]=mysql_fetch_assoc($reqExec)){
 		
 }
 
$jsonEncode  = json_encode($users);
// echo "$jsonEncode";
echo "{"."\"d\"".":".$jsonEncode."}";
} else {echo "data missed";}
?>