<?php

class ContactFormTEst
{
    protected array $values;
    public function __construct($data)
    {
        $rules = [
            "name" => ['required'],
            "lastname" => ['required'],
            "email" => ['required', 'email'],
            "phone" => [],
            "message" => ['required'],
        ];

        $_SESSION['custom_contact_form_values'] = $data;

        $errors = $this->validate($data, $rules);

        if ($errors) {
            // Pas bon, afficher erreurs
            $_SESSION['custom_contact_form_errors'] = $errors;
            wp_redirect(wp_get_referer());
            exit;
        } else {
            // C'est good, suite traitement
        }
    }

    static public function errors(): array
    {
        $errors = $_SESSION['custom_contact_form_errors'] ?? [];

        unset($_SESSION['custom_contact_form_errors']);

        return $errors;
    }

    protected function validate(array $data, array $rules): array
    {
        $errors = [];

        // Script de validation
        foreach ($rules as $field => $checks) {

            $value = $data[$field] ?? null;

            foreach ($checks as $check) {
                $method = 'validate_' . $check;
                $result = call_user_func([$this, $method], [$value]);
                if ($result === true) {
                    continue;
                }

                $errors[$field] = $result;
                break;
            }
        }

        return $errors;
    }

    public static function values(): array
    {
        $values = $_SESSION['custom_contact_form_values'] ?? [];

        unset($_SESSION['custom_contact_form_values']);

        return $values;
    }

    public function validate_required(mixed $value): bool|string
    {
        if (isset($value) && $value !== '') {
            return true;
        }

        return 'Ce champ est requis';
    }

    public function validate_email(mixed $value): bool|string
    {
        if (filter_var($value, FILTER_VALIDATE_EMAIL)) {
            return true;
        }

        return 'L\'adresse mail fournit n\'est pas correcte';
    }
}