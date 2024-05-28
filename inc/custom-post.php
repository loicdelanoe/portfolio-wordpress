<?php

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
