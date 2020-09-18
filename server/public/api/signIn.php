<?php

require_once('./functions.php');

startup();


require_once('./db_connection.php');

$json_input = file_get_contents('php://input');
$obj = json_decode($json_input, true);

$username = $obj['username'];
$email = $obj['email'];
$user_password = $obj['user_password'];

$query = "INSERT INTO users(username, email, user_password)
          VALUES ('$username', '$email', '$user_password')";

$result = mysqli_query($conn, $query);



if ($result){
    print(json_encode(['message'=>'User entry created successfully']));
} else {
    http_response_code(500);
    print(json_encode(['error'=>mysqli_error($conn)]));
}



?>