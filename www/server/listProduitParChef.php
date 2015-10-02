<?php
header('Access-Control-Allow-Origin: *');

	mysql_connect("10.0.210.173", "moha","moha") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database

if(isset($_POST['id_chef_produit']) ){
$id_chef_produit=$_POST['id_chef_produit'];
//echo=$idDelegue;
/*$condition=" and id_user='$idDelegue'";*/
	$query="select * from user u, role r, attrib_role_user atRU, produit p, att_produit_chef atPC
where atRU.id_user=u.id_user and atRU.id_role=r.id_role
and p.id_Produit=atPC.id_Produit and atPC.id_user=u.id_user
and atRU.id_role=4 and atPC.id_user='$id_chef_produit' order by u.id_user desc";
	$reqExec=mysql_query($query);
	
 $users;
 	
 while($users[]=mysql_fetch_assoc($reqExec)){
 		
 }
 
$jsonEncode  = json_encode($users);
// echo "$jsonEncode";
echo "{"."\"d\"".":".$jsonEncode."}";
} else {echo "data missed";}
?>