<?php


require("class.phpmailer.php");
require("class.smtp.php");

// Valores enviados desde el formulario
if ( $_POST ) {

    $destino = "caceres@miio.mx";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];


    // Datos de la cuenta de correo utilizada para enviar v�a SMTP
    $smtpHost = "10.0.1.128";  // Dominio alternativo brindado en el email de alta
    $smtpUsuario = "miioweb@miio.mx";  // Mi cuenta de correo
    $smtpClave = "";  // Mi contrase�a


    $mail = new PHPMailer();
    $mail->IsSMTP();
    $mail->SMTPAuth = true;
    $mail->Port = 25;
    $mail->IsHTML(true);
    $mail->CharSet = "utf-8";

    // VALORES A MODIFICAR //
    $mail->Host = $smtpHost;
    $mail->Username = $smtpUsuario;
    $mail->Password = $smtpClave;


    $mail->From = $email; // Email desde donde env�o el correo.
    $mail->FromName = $nombre;
    $mail->AddAddress($destino); // Esta es la direcci�n a donde enviamos los datos del formulario

    $mail->Subject = "Formulario desde el Miio Web"; // Este es el titulo del email.
    $mensajeHtml = nl2br($mensaje);
    $mail->Body = "
    <html>

    <body>

    <h1>Recibiste un nuevo mensaje desde el formulario de contacto</h1>

    <p>Informacion enviada por el usuario de la web:</p>

    <p>nombre: {$nombre}</p>

    <p>email: {$email}</p>

    <p>telefono: {$telefono}</p>

    <p>asunto: {$asunto}</p>

    <p>mensaje: {$mensaje}</p>

    </body>

    </html>

    <br />"; // Texto del email en formato HTML
    $mail->AltBody = "{$mensaje} \n\n "; // Texto sin formato HTML
    // FIN - VALORES A MODIFICAR //

    $mail->SMTPOptions = array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        )
    );

    $estadoEnvio = $mail->Send();
    if($estadoEnvio){
        header("https://miio.com.mx/");
    } else {
        echo "Ocurrió un error inesperado.";
        exit();
    }
  }else {
    echo "no hay datos que procesar";
    exit();
  }
?>
