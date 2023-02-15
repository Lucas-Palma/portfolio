<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $emailFrom = $_POST['email'];
    $message = $_POST['message'];
    $to = "lucaspalmadev@gmail.com";

     

    mail($to, $subject, $message);
}