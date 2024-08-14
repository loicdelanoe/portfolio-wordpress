<?php

add_action('init', function () {
    if (function_exists('pll_register_string')) {
        pll_register_string('my-projects', 'Mes projets');
        pll_register_string('discover-me', 'Me découvrir');
        pll_register_string('see-my-projects', 'Voir mes projets');
        pll_register_string('contact-me', 'Contactez-moi');
        pll_register_string('contact-text', 'N’hésitez pas à me contacter pour l’un de vos projets !');
        pll_register_string('copyright', '© 2024 Loïc Delanoë - Tous droits réservés.');
        pll_register_string('end-projects', 'Vous êtes arrivé au bout !');
        pll_register_string('legal', 'Mentions légales');
        pll_register_string('tools', 'Mes Outils');
        pll_register_string('home-cta', 'Accueil');
        pll_register_string('not-found', 'Page non trouvée');
        pll_register_string('not-found-text', "La page que vous avez recherché n'existe pas, a été déplacée ou n'existe plus.");
        pll_register_string('lets-talk', 'Discutons :)');
        pll_register_string('last-update', 'Dernière mise à jour');

        pll_register_string('back-project', 'Retour aux projets', 'Projet post');
        pll_register_string('unavailable', 'Site indisponible', 'Projet post');
        pll_register_string('visit', 'Visiter le site', 'Projet post');
        pll_register_string('colors', 'Palette de couleurs', 'Projet post');
        pll_register_string('gallery', 'Galerie', 'Projet post');
        pll_register_string('other-projects', 'Mes autres projets', 'Projet post');
        pll_register_string('all-projects', 'Tous mes projets', 'Projet post');

        // Form translation
        pll_register_string('contact-phone', 'Téléphone', 'Contact form');
        pll_register_string('contact-email', 'Email', 'Contact form');
        pll_register_string('contact-family-name', 'Nom', 'Contact form');
        pll_register_string('contact-name', 'Prénom', 'Contact form');
        pll_register_string('contact-subject', 'Sujet', 'Contact form');
        pll_register_string('contact-message', 'Message', 'Contact form');
        pll_register_string('contact-message-placeholder', "J'ai un projet pour vous...", 'Contact form');
        pll_register_string('contact-send', 'Envoyer', 'Contact form');
        pll_register_string('contact-subject-placeholder', 'Projet, question...', 'Contact form');
        pll_register_string('contact-required-field-text', 'Ce champ est requis', 'Contact form');
        pll_register_string('contact-required-email-text', "L'adresse mail n'est pas valide", 'Contact form');
        pll_register_string('contact-feedback-text', "Merci ! Votre message a bien été envoyé :)", 'Contact form');
        pll_register_string('contact-recaptcha', "La vérification reCAPTCHA a échoué. Veuillez réessayer.", 'Contact form');
    }
});

function dw_get_permalink(string $path): string
{
    return get_the_permalink(pll_get_post(get_page_by_path($path)->ID));
}