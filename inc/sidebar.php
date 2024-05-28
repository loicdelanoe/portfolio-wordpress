<?php

register_sidebar([
    'name' => 'Réseaux sociaux',
    'id' => 'social',
    'description' => 'Listes de mes réseaux sociaux',
    'before_widget' => '<li class="list__item">',
    'after_widget' => '</li>',
    'before_title' => '<h3>',
    'after_title' => '</h3>',
]);

