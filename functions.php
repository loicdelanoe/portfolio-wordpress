<?php

if (!session_id()) {
    session_start();
}

require_once(get_template_directory() . '/inc/clean-header.php');
require_once(get_template_directory() . '/inc/ContactForm.php');
require_once(get_template_directory() . '/inc/custom-post.php');
require_once(get_template_directory() . '/inc/helpers.php');
require_once(get_template_directory() . '/inc/sidebar.php');

// Handle contact form submit
add_action('admin_post_custom_contact_form', 'dw_contact_form_controller');
add_action('admin_post_nopriv_custom_contact_form', 'dw_contact_form_controller');

// Disable Gutenberg editor
add_filter('use_block_editor_for_post', '__return_false');
//add_filter('use_widgets_block_editor', '__return_false');

// Enregistrer des menus de navigation :
register_nav_menu('main', 'Navigation principale, en-tête du site');
register_nav_menu('footer', 'Navigation de pied de page');
