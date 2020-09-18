<?php

$conn = mysqli_connect('localhost', 'root', 'root', 'peerxp', '3306');

if(!$conn) {
    throw new Exception(mysqli_connect_error());
  }

?>