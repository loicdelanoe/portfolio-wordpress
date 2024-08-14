<?php

namespace inc;

if (!session_id()) {
    session_start();
}

class ContactForm
{
    public function __construct($data)
    {
        switch_to_locale($data['lang']);

        $_SESSION['errors'] = [];
        $_SESSION['old'] = [];
        $_SESSION['feedback'] = '';

        $rules = [
            "name" => ['required'],
            "lastname" => ['required'],
            "email" => ['required', 'email'],
            "phone" => [],
            "subject" => ['required'],
            "message" => ['required'],
            "g-recaptcha-response" => ['recaptcha'],
        ];

        self::validate($data, $rules);

        if (count($_SESSION['errors']) > 0) {
            $_SESSION['old'] = $data;
        } else {
            $_SESSION['feedback'] = pll__("Merci ! Votre message a bien été envoyé :)");
            self::sendMail($data);
        }

        wp_redirect(wp_get_referer());
        exit();
    }

    protected static function validate(array $data, array $rules): void
    {
        foreach ($rules as $field => $checks) {

            $key = $field ?? null;

            foreach ($checks as $check) {
                $method = $check;

                self::$method($key, $data);
            }
        }
    }

    public static function feedback(): string
    {
        $feedback = $_SESSION['feedback'] ?? '';

        unset($_SESSION['feedback']);

        return $feedback;
    }

    private static function required(string $key, array $data): bool
    {
        if (empty($data[$key])) {
            $_SESSION['errors'][$key] = pll__("Ce champ est requis");
            return false;
        }

        return true;
    }

    private static function email(string $key, array $data): bool
    {
        if (!filter_var($data[$key], FILTER_VALIDATE_EMAIL)) {
            $_SESSION['errors'][$key] = pll__("L'adresse mail n'est pas valide");
            return false;
        }
        return true;
    }

    private static function sendMail(array $data): void
    {
        $headers = [
            "Content-Type: text/html; charset=UTF-8",
        ];

        wp_mail(get_bloginfo('admin_email'), $data['subject'], get_email_template($data), $headers);
    }

    private static function recaptcha(string $key, array $data)
    {
        $secret_key = '6LchZCQqAAAAAIvctA_-YSlhZK9ZlPKAFiw9pumk';

        $response = wp_remote_post("https://www.google.com/recaptcha/api/siteverify", [
            'body' => [
                'secret' => $secret_key,
                'response' => $data[$key],
            ]
        ]);

        $response_body = wp_remote_retrieve_body($response);
        $result = json_decode($response_body, true);

        if (!$result['success']) {
            $_SESSION['errors'][$key] = pll__("La vérification reCAPTCHA a échoué. Veuillez réessayer.");
            return false;
        }

        return true;
    }
}