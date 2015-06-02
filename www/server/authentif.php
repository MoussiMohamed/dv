<?php
header('Access-Control-Allow-Origin: *');
	
	session_start();
	$email = ($_POST['email']);
	$password = ($_POST['password']);

	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	
	//Query the users table if there are matching rows equal to $email and $password
	$query = mysql_query("select * from user where email='$email' and password='$password'"); 

	$exists = mysql_num_rows($query); //Checks if username exists
	
	if($exists > 0) //IF there are no returning rows or no existing email
	{		
					
					echo "authentification reussie";
		}
		else
		{
			echo "Incorrect Email Address and/or Password!"; //Prompts authentication error message
			
			 
		}

	
	
?>