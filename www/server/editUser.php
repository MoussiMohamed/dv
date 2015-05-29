<?php
    header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
$id_User=($_POST['id_Usr']);
$name=($_POST['name']);
$surname=($_POST['surname']);
$email=($_POST['email']);
$password=($_POST['password']);

	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	$query="update user 
	set name='$name', surname='$surname', email='$email', password='$password' where id_user='$id_User'";
	$reqExec=mysql_query($query);
 echo "row edited";

mysql_close();
?>