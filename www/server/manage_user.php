<?php
header('Access-Control-Allow-Origin: *');

   
    if(isset($_POST['name']) && isset($_POST['surname']) && isset($_POST['email']) && isset($_POST['password' ])){
	$name     = $_POST["name"];
	$surname   = $_POST["surname"];
	$email    = $_POST["email"];
	$password       = $_POST["password"];
	mysql_connect("localhost", "root","") or die(mysql_error()); //Connect to server
	mysql_select_db("db_e_adv") or die("Cannot connect to database"); //Connect to database
	$query = mysql_query("Select * from user"); //Query the users table
	
	while($row = mysql_fetch_array($query)) //display all rows from query
	{
		$table_users = $row['email']; // the first username row is passed on to $table_users, and so on until the query is finished
		if($email == $table_users) // checks if there are any matching fields
		{

			$data = array(
            "response"     => "Email address has been taken!",
            
        );
		echo json_encode($data);
		}
	}
$timestamp = date('Y-m-d G:i:s');


		$result = mysql_query("INSERT INTO user (name, surname, email, password, dateInsert) VALUES ('$name','$surname','$email','$password','$timestamp')"); //Inserts the value to table user
		if (!$result) {
    die('Requête invalide : ' . mysql_error());
}
			$data = array(
            "response"     => "Successfully Registered!",
            
        );
		
		echo json_encode($data);

}
else {
	
	$data = array(
            "response"     => "data missed",
            
        );
		echo json_encode($data);
}

?>