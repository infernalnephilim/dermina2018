<?php

	$email = $_POST['emailV'] ;
	$subject = $_POST['nameV'] ;
	$message = $_POST['textV'] ;
	mail("dermina@interia.pl", "E-Mail od: " .$subject. " (" .$email.") z formularza dermina.pl",
	$message, "From:" . $email);
  
  ?>