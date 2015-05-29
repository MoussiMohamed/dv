<?php
header('Access-Control-Allow-Origin: *');
	
	session_start();
	$email = ($_POST['email']);
	$password = ($_POST['password']);

	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	
	$query = mysql_query("select * from user where email='$email' and password='$password'"); //Query the users table if there are matching rows equal to $username

	$exists = mysql_num_rows($query); //Checks if username exists
	
	if($exists > 0) //IF there are no returning rows or no existing username
	{		
					//$_SESSION['user'] = $email; //set the username in a session. This serves as a global variable
					// header("location: ../home.html"); // redirects the user to the authenticated home page
					echo "authentification reussie";			
		}
		else
		{
			echo "Incorrect Email Address or Password!"; //Prompts the user
			//Print '<script>window.location.assign("../index.html");</script>'; // redirects to login.php
			 
		}

	
	
?>