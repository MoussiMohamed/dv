<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	$query="select * from user";
	$reqExec=mysql_query($query);
	
 $users;
 	
 while($users[]=mysql_fetch_assoc($reqExec)){
 		
 }
 
$jsonEncode  = json_encode($users);
// echo "$jsonEncode";
echo "{"."\"d\"".":".$jsonEncode."}";


// 
// $outp = "[";
// while($rs =mysql_fetch_array($reqExec)) {
    // if ($outp != "[") {$outp .= ",";}
    // $outp .= '{"id":"'  . $rs["id_user"] . '",';
    // $outp .= '"name":"'   . $rs["name"]        . '",';
    // $outp .= '"surname":"'. $rs["surname"]     . '",';
	// $outp .= '"email":"'. $rs["email"]     . '",';
	// $outp .= '"password":"'. $rs["password"]     . '"}'; 
// }
// $outp .="]";
// 
// echo($outp);

?>