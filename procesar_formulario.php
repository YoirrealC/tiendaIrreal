<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

if ($nombre === '') {
  die('El campo nombre es obligatorio');
}

if ($email === '') {
  die('El campo email es obligatorio');
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  die('El campo email no es válido');
}

if ($mensaje === '') {
  die('El campo mensaje es obligatorio');
}


echo 'Formulario enviado correctamente';
?>
