<?php  // phpcs:disable Generic.Commenting.MissingFileComment


$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$website = $_POST["website"];
$message = $_POST["message"];

if (!empty($email) && !empty($message)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $receiver = "bilalbeny@gmail.com";
        $subject ="From: $name <$email>" ;
        $body = "Name: $name\n
        Email: $email\n
        Phone: $phone\n
        website: $website\n
        message: $message\n";
        $sender = "From: $email";
        if (mail($receiver, $subject, $body, $sender)) {
            echo "Your message has been sent!";
        } else {
            echo "Sorry! failed to send your message";
        }
    } else {
        echo "Enter a valid email";
    }
} else {
    echo "Email and password field are required";
}