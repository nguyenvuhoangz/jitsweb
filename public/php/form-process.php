<?php

$EmailTo = "hoangnv@jist.com.vn";
$Subject = "New Message Received";

$success = false;
$errorMSG = array();
$fname = $lname = $email = $phone = $subject = $message = null;
$fields = array(
    'fname' => "Name is required ",
    'lname' => "Name is required ",
    'email' => "Email is required ",
    'phone' => "Phone is required ",
    'subject' => "Subject is required ",
    'message' => "Message is required "
);

foreach($fields as $key => $e_message){
    if (empty($_POST[$key])) {
        $errorMSG[] = $e_message;
    } else {
        $$key = $_POST[$key];
    }
}

// prepare email body text
$Body = null;
$Body .= "<p><b>First Name:</b> {$fname}</p>";
$Body .= "<p><b>Last Name:</b> {$lname}</p>";
$Body .= "<p><b>Email:</b> {$email}</p>";
$Body .= "<p><b>Phone:</b> {$phone}</p>";
$Body .= "<p><b>Subject:</b> {$subject}</p>";
$Body .= "<p><b>Message:</b> </p><p>{$message}</p>";

// send email
$headers = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From:  ' . $first_name . ' <' . $email .'>' . " \r\n" .
            'Reply-To: '.  $email . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

if($fname && $lname && $email && $phone && $subject && $message){
    $success = mail($EmailTo, $Subject, $Body, $headers );
}

if(empty($errorMSG)){
    $errorMSG[] = "Something went wrong :(";
}

echo json_encode(array(
    'success' => $success,
    'message' => $errorMSG
));

die();