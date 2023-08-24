<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $comment = $_POST['comment'];
    $to = "william.waiyan518@education.nsw.gov.au";  // Receiver's email address
    $subject = "New Comment from Quest";
    $message = "Username: $username\nComment: $comment";
    $headers = "From: swanyan2008@gmail.com";  // Sender's email address

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
}
?>

