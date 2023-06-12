<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $apellidos = $_POST["apellidos"];
    $email = $_POST["email"];

    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
    
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cursosql";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $error = '';

    if (empty($nombre) || empty($apellidos) || empty($email)) {
        $error = 'Por favor, rellene todos los campos';
    } else {
        $sql = "INSERT INTO USUARIO (NOMBRE, APELLIDOS, EMAIL) VALUES ('$nombre', '$apellidos', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Registro creado con éxito <br>";
        echo "Nombre: " . $nombre . "<br>";
        echo "Apellidos: " . $apellidos . "<br>";
        echo "Email: " . $email . "<br>";;
    } else {
        echo "¡Error!: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}

}

?>

