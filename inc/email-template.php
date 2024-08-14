<?php

function get_email_template(array $data): string
{
    $message = nl2br($data['message']);

    return <<<HTML
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta name="x-apple-disable-message-reformatting">
            <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
            <title>Document</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Kalnia:wght@100..700&display=swap');
        
                body {
                    font-family: "Poppins", Helvetica, Arial, sans-serif;
                    color: #2C231E;
                    background-color: #F8F7F5;
                    margin: 0;
                    padding: 0;
                    display: flex;
                }
        
                h1, h2, h3, h4 {
                    font-family: "Kalnia", Georgia, "Times New Roman", "Bitstream Charter", Times, serif;
                    font-weight: 600;
                }
        
                .main {
                    width: 100%;
                }
        
                .header {
                    display: flex;
                    align-items: center;
                    padding: 1.8rem;
                    font-size: 1.5rem;
                    background-color: #F0ECE6;
                }
        
                .body {
                    padding: 2rem 1.8rem;
                }
        
                .footer {
                    display: flex;
                    align-items: center;
                    padding: 1.8rem;
                    background-color: #F0ECE6;
        
                }
        
                .logo {
                    max-width: 3rem;
                    height: auto;
                    margin-right: 0.8rem;
                }
        
                .brand {
                    color: inherit;
                    font-family: "Kalnia", Georgia, "Times New Roman", "Bitstream Charter", Times, serif;
                    font-weight: 600;
                    text-decoration: none;
                }
        
                .content {
                    background-color: #F8F7F5;
                    width: 100%;
                }
            </style>
        </head>
        <body>
        <table class="main">
            <tr>
                <td>
                    <table class="content">
                        <tr>
                            <td class="header">
                                <img class="logo" src="https://loicdelanoe.com/wp-content/uploads/2024/05/my-logo.png" alt="Logo de Loïc Delanoë">
                                <a class="brand" href="https://loicdelanoe.com">Loïc D.</a>
                            </td>
                        </tr>
                        <tr>
                            <td class="body">
                                <p>De : <strong>{$data['name']} {$data['lastname']}</strong> (<a href="mailto:{$data['email']}">{$data['email']}</a>)</p>
                                <h2>{$data['subject']}</h2>
                                <p>
                                    $message
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="footer">
                                &copy; 2024 Loïc Delanoë
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
        </body>
        </html>
    HTML;
}
