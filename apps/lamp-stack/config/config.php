<?php
    $host='localhost';
    $username='root';
    $password='';
    $database='test';

    $sql = mysqli_connect($host,$username,$password,$database) or die(mysqli_error);
?>