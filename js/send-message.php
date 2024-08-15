<?php
header('Content-Type: application/json');

$response = array('success' => false);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (!empty($name) && !empty($email) && !empty($message)) {
        // Замените этот код на вашу логику обработки сообщения
        // Например, отправка email или запись в базу данных

        // Пример: отправка email
        $to = 'rudnevaalina708@gmail.com'; // Замените на ваш email
        $subject = 'Новое сообщение с сайта';
        $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
        $headers = "From: $email\r\n";

        if (mail($to, $subject, $body, $headers)) {
            $response['success'] = true;
        }
    }
}

echo json_encode($response);
?>
