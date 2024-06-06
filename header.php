<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Loïc Delanoë">
    <meta name="title" content="Loïc D.">
    <meta name="keywords"
          content="Portfolio, Loïc Delanoë, développeur web, développeur, front-end, back-end, full-stack, HEPL, étudiant">
    <meta name="description" content="<?= get_bloginfo('description') ?>">
    <!-- Open Graph -->
    <meta property="og:locale" content="fr_FR">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php dw_og_page_title() ?>">
    <meta property="og:url" content="<?= home_url($_SERVER['REQUEST_URI']) ?>">
    <meta property="og:site_name" content="<?= get_bloginfo('name') ?>">
    <!-- Wordpress head -->
    <?php wp_head() ?>
    <!-- Title -->
    <title><?= get_bloginfo('name') ?></title>
</head>
<body itemscope itemtype="https://schema.org/Person">
<noscript>
    <style>
        [data-animation="show-up"],
        [data-animation="slide-left"] {
            opacity: 1;
        }
    </style>
</noscript>
<a href="#main" class="skip-link">Aller au contenu</a>
<header class="header" id="header" role="banner">
    <h1 class="sro"><?= get_the_title() ?></h1>
    <div class="header__container">
        <nav class="nav" aria-label="Menu principal">
            <h2 class="sro">Navigation principale</h2>
            <a class="nav__branding" href="<?= home_url() ?>" title="Vers la page d'accueil">Loïc D.</a>
            <label class="sro" for="burger">Burger menu</label>
            <input type="checkbox" name="burger" id="burger">
            <div class="burger__wrapper">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul class="nav__container">
                <?php foreach (dw_get_navigation_links('main') as $link): ?>
                    <li class="nav__items"><a href="<?= $link->url ?>" class="nav__link <?= dw_is_active($link->url) ?>"
                                              title="Vers la page <?= $link->label ?>"><?= $link->label ?></a></li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</header>