<?php
$servername = "localhost";
$username_DB = "root";
$password_DB = "admin";
$dbname = "tiempo_maya";

// Create connection
$conn = new mysqli($servername, $username_DB, $password_DB, $dbname, '3306');
if ($conn->connect_error) {
    echo 'Conexion fallida: ' . $conn->connect_error;
    die("Connection failed: " . $conn->connect_error);
} else {
    echo '';
    return $conn;
}
?>
