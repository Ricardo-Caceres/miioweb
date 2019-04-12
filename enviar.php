<?php

// use actual sendgrid username and password in this section
$url = 'https://api.sendgrid.com/';
$user = 'Ricardo_Caceres'; // place SG username here
$pass = 'Salem2018'; // place SG password here
// grabs HTML form's post data; if you customize the form.html parameters then you will need to reference their new new names here
$curl = curl_init();
$name = $_POST['name'];
$email = $_POST['subject'];
$subject = $_POST['email'];
$message = $_POST['message'];
// note the above parameters now referenced in the 'subject', 'html', and 'text' sections
// make the to email be your own address or where ever you would like the contact form info sent
$params = array(
    'api_user'  => "$user",
    'api_key'   => "$pass",
    'to'        => "caceres@miio.mx", // set TO address to have the contact form's email content sent to
    'subject'   => "Contact Form Submission", // Either give a subject for each submission, or set to $subject
    'html'      => "<html><head><title> Contact Form</title><body>
    Name: $name\n<br>
    Email: $email\n<br>
    Subject: $subject\n<br>
    Message: $message <body></title></head></html>", // Set HTML here.  Will still need to make sure to reference post data names
    'text'      => "
    Name: $name\n
    Email: $email\n
    Subject: $subject\n
    $message",
    'from'      => "miio@miio.mx", // set from address here, it can really be anything
  );
curl_setopt($curl, CURLOPT_SSLVERSION, CURL_SSLVERSION_TLSv1_2);
$request =  $url.'api/mail.send.json';
// Generate curl request
$session = curl_init($request);
// Tell curl to use HTTP POST
curl_setopt ($session, CURLOPT_POST, true);
// Tell curl that this is the body of the POST
curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
// Tell curl not to return headers, but do return the response
curl_setopt($session, CURLOPT_HEADER, false);
curl_setopt($session, CURLOPT_RETURNTRANSFER, true);
// obtain response
$response = curl_exec($session);
curl_close($session);
// Redirect to thank you page upon successfull completion, will want to build one if you don't alreday have one available
header('Location: thanks.html'); // feel free to use whatever title you wish for thank you landing page, but will need to reference that file name in place of the present 'thanks.html'
exit();
// print everything out
print_r($response);
curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.sendgrid.com/v3/mail/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "{\n  \"personalizations\": [\n    {\n      \"to\": [\n        {\n          \"email\": \"[Email Address to send Contact to]\"\n        }\n      ],\n      \"subject\": \"New Contact\"\n    }\n  ],\n  \"from\": {\n    \"email\": \"[FROM EMAIL]\"\n  },\n  \"content\": [\n    {\n      \"type\": \"text/html\",\n      \"value\": \"$name<br>$email<br>$subject<br>$message\"\n    }\n  ]\n}",
  CURLOPT_HTTPHEADER => array(
    "authorization: Bearer [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]",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));
$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
header('Location: thanks.html');
if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;




?>
