<?php

require_once('./functions.php');
set_exception_handler('error_handler');

startup();

set_error_handler('error_handler');
require_once('./db_connection.php');
if ( empty( $_GET['username'] ) ) {
    $whereClause = '';
  } else {
    $whereClause = "WHERE username = '{$_GET['username']}'";
  }


$query = "SELECT id, username, email FROM users $whereClause ";

$result = mysqli_query($conn, $query);


$output = array();

while ($row = mysqli_fetch_assoc($result)) {
  $output[] = $row;
};

print(json_encode($output));

?>

