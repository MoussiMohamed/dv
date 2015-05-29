<?php
header('Access-Control-Allow-Origin: *');

	if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']) && isset($_POST['password'])){
	$name = ($_POST['name']);
	$surname = ($_POST['surname']);
	$email = ($_POST['email']);
	$password = ($_POST['password']);


	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	$query = mysql_query("Select * from user"); //Query the users table
	while($row = mysql_fetch_array($query)) //display all rows from query
	{
		$table_users = $row['email']; // the first username row is passed on to $table_users, and so on until the query is finished
		if($email == $table_users) // checks if there are any matching fields
		{
			
			echo "Email address has been taken!"; //Prompts the user
		}
	}

		mysql_query("INSERT INTO user (name, surname, email, password) VALUES ('$name','$surname','$email','$password')"); //Inserts the value to table user
		echo "Successfully Registered!"; // Prompts the user

}
else {
	echo "data missed";
}


?>