<?php


$name = $_POST['visitors_name'];
$email = $_POST['visitors_email'];
$message = $_POST['visitors_message'];


$emailheader = "from:" . $name . "<" . $email . ">\r\n";

$recipient = "example@gmail.com";

$subject = "Email from Portfolio Site";

mail($recipient, $subject, $message, $emailheader) or die("Error!");

echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Professional Portfolio Template</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">


<link rel="stylesheet" href="css/bootstrap.min.css">

<link rel="stylesheet" href="css/style.css">

</head>

<body class="bg-dark-1">
  <div class="container text-center min-vh-100 d-flex flex-column justify-content-center ">

    <div class="col-lg-8 mx-auto">
      <h1 class="pb-4">Thankyou for contacting me, I will get back to you as soon as possible</h1>
      <p class="text-danger" class="text-white">Go back to the <a href="index.html">homepage</a>.</p>
    </div>

  </div>
    
   








      




</body>
</html>';

