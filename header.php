<!doctype html>
<html lang="<?= str_replace('_', '-', pll_current_language('locale')); ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="author" content="Loïc Delanoë">
    <meta name="keywords"
          content="Portfolio, Loïc Delanoë, développeur web, graphiste, développeur, front-end, back-end, full-stack, HEPL, étudiant, Loir-et-cher, Vendôme, Blois, freelance">
    <meta name="description" content="<?= get_bloginfo('description') ?>">
    <!-- Profil details -->
    <meta property="profile:first_name" content="Loïc">
    <meta property="profile:last_name" content="Delanoë">
    <!-- Open Graph -->
    <meta property="og:locale" content="fr_FR">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php dw_og_page_title() ?>">
    <meta property="og:description" content="<?= get_bloginfo('description') ?>">
    <meta property="og:image" content="https://loicdelanoe.com/wp-content/uploads/2024/05/my-logo.png">
    <meta property="og:url" content="<?= home_url($_SERVER['REQUEST_URI']) ?>">
    <meta property="og:site_name" content="<?= get_bloginfo('name') ?>">
    <!-- Twitter card-->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Loïc Delanoë | Webmaster et Graphiste">
    <meta name="twitter:description" content="<?= get_bloginfo('description') ?>">
    <meta name="twitter:image" content="https://loicdelanoe.com/wp-content/uploads/2024/05/my-logo.png">
    <meta name="twitter:site" content="@loic_del41">
    <!-- Wordpress head -->
    <?php wp_head() ?>
    <!-- Title -->
    <title><?= get_bloginfo('name') ?></title>
</head>
<body itemscope itemtype="https://schema.org/Person">
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

                <?php foreach (dw_get_languages() as $lang): ?>
                    <li><a href="<?= $lang->url; ?>"
                           class="nav__link nav__language <?php if ($lang->current): ?> active sro<?php endif; ?>"
                           hreflang="<?= $lang->locale; ?>" title="<?= $lang->label; ?>"><?= $lang->code; ?></a></li>
                <?php endforeach; ?>
            </ul>
        </nav>
    </div>
</header>