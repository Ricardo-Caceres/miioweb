
<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);


require 'vendor/autoload.php'; // If you're using Composer (recommended)
// Comment out the above line if not using Composer
// require("<PATH TO>/sendgrid-php.php");
// If not using Composer, uncomment the above line and
// download sendgrid-php.zip from the latest release here,
// replacing <PATH TO> with the path to the sendgrid-php.php file,
// which is included in the download:
// https://github.com/sendgrid/sendgrid-php/releases

if(isset($_POST) && isset($_POST['nombre']) && isset($_POST['asunto']) && isset($_POST['correo']) && isset($_POST['numero']) && isset($_POST['comentarios'])) {
  $nombre       = $_POST['nombre'];
  $asunto       = $_POST['asunto'];
  $correo       = $_POST['correo'];
  $numero       = $_POST['numero'];
  $comentarios  = $_POST['comentarios'];

  $emailTo      = "hola@miio.mx";  //<-- este es el correo a donde lo vas a enviar, en este caso la cuenta donde lo vas a recibir
  $nameTo       = "Operaciones Miio";             // <-- el nombre de quien recibe el correo...

  // echo gettype($nombre) . " " . $nombre . "\n";
  // echo gettype($asunto) . " " . $asunto . "\n";
  // echo gettype($correo) . " " . $correo .  "\n";
  // echo gettype($comentarios) . " " . $comentarios . "\n";

  $API_KEY = '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';

  $email = new \SendGrid\Mail\Mail();
  $email->setFrom($correo, $nombre);
  $email->setSubject($asunto);
  $email->addTo($emailTo, $nameTo);
  $email->addContent("text/plain",$comentarios); // <-- este campo no sé qué pedo porque no se manda al correo
  $email->addContent(
      "text/html", "<strong>" . $numero  . " </strong>" ."<br>" . $comentarios
  ); // <-- AMBOS SON OBLIGATORIOS!!!

  $sendgrid = new \SendGrid($API_KEY);


  try {
      $response = $sendgrid->send($email);
      // echo $response->statusCode() . "\n";
      echo ($response->statusCode() == 200 || $response->statusCode() == 201 || $response->statusCode() == 202) ? true : false;
        // print $response->statusCode() . "puta \n";
        // print_r($response->headers()) . "\n";
        // print $response->body() . "ñaka \n";
  } catch (Exception $e) {
      echo 'Caught exception: '. $e->getMessage() ."\n";
  }

} else {
  echo 'Faltan campos por enviar';
}

?>
