<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

	mysql_connect("10.0.210.173", "moha","moha") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	mysql_query("SET NAMES 'utf8'");	
	$query="select * from user u, role r, attrib_role_user atRU
	where atRU.id_user=u.id_user and atRU.id_role=r.id_role
	and atRU.id_role=4 order by u.id_user desc";
	$reqExec=mysql_query($query);
	
 $users;
 	
 while($users[]=mysql_fetch_assoc($reqExec)){
 		
 }
 
$jsonEncode  = json_encode($users);

echo "{"."\"d\"".":".$jsonEncode."}";


?>