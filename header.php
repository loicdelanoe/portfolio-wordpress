<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
<!--    <link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@100..700&display=swap" rel="stylesheet">-->
    <link rel="stylesheet" href="<?= dw_asset('css/main.css') ?>">
    <title>Loïc D. - Portfolio</title>
</head>
<body>
<header class="header" id="header">
    <h1 class="sro"><?= get_the_title() ?></h1>
    <div class="header__container">
        <label class="sro" for="burger">Burger menu</label>
        <input type="checkbox" name="burger" id="burger">
        <!--    <div class="burger">-->
        <!--        <span></span>-->
        <!--        <span></span>-->
        <!--        <span></span>-->
        <!--    </div>-->
        <nav class="nav">
            <h2 class="sro">Navigation principale</h2>
            <a class="nav__branding" href="/">Loïc D.</a>
<!--            <ul class="nav__container">-->
<!--                --><?php //foreach (dw_get_navigation_links('main') as $link): ?>
<!--                    <li class="nav__items"><a href="--><?php //= $link->url ?><!--" class="nav__link">--><?php //= $link->label ?><!--</a></li>-->
<!--                --><?php //endforeach; ?>
<!--            </ul>-->
        </nav>
    </div>
</header>