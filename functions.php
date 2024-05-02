<?php

require_once(__DIR__ . '/src/ContactForm.php');

ini_set('display_errors','Off');
ini_set('error_reporting', E_ALL );
define('WP_DEBUG', false);
define('WP_DEBUG_DISPLAY', false); // Disable warning for undefined feedback array key

// Démarrer la session
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// Disable Gutenberg editor
add_filter('use_block_editor_for_post', '__return_false');

add_theme_support( 'post-thumbnails' );
add_image_size('project_thumbnail', 600, 600);

// Enregistrer des menus de navigation :
register_nav_menu('main', 'Navigation principale, en-tête du site');
register_nav_menu('footer', 'Navigation de pied de page');

// Si les pages archive ne marche pas, aller settings -> permalinks -> save changes
register_post_type('projets', [
    'label' => 'Projets',
    'description' => 'Mes projets',
    'public' => true,
    'hierarchical' => false,
    'menu_position' => 21,
    'menu_icon' => 'dashicons-portfolio',
    'has_archive' => true,
    'rewrite' => [
        'slug' => 'projets',
    ]
]);

register_post_type('formations', [
    'label' => 'Formations',
    'description' => 'Mes formations',
    'public' => true,
    'hierarchical' => false,
    'menu_position' => 22,
    'menu_icon' => 'dashicons-portfolio',
    'has_archive' => false,
    'rewrite' => [
        'slug' => 'formations',
    ]
]);

function dw_asset(string $file): string
{
    return get_template_directory_uri() . '/public/' . $file;
}

// Retrouver les éléments d'un menu pour une location donnée
function dw_get_navigation_links(string $location): array
{
    // Pour $location, retrouver le menu.
    $locations = get_nav_menu_locations();
    $menuId = $locations[$location] ?? null;

    // Au cas où il n'y a pas de menu assignés à $location, renvoyer un tableau de liens vide.
    if(is_null($menuId)) {
        return [];
    }

    // Pour ce menu, récupérer les liens
    $items = wp_get_nav_menu_items($menuId);

    // Formater les liens en objets pour ne garder que "URL" et "label" comme propriétés
    foreach ($items as $key => $item) {
        $items[$key] = new stdClass();
        $items[$key]->url = $item->url;
        $items[$key]->label = $item->title;
    }

    // Retourner le tableau de liens formatés
    return $items;
}

function dw_contact_form_controller()
{
    new ContactForm($_POST);
}

add_action( 'admin_post_nopriv_custom_contact_form', 'dw_contact_form_controller' );
add_action( 'admin_post_custom_contact_form', 'dw_contact_form_controller' );