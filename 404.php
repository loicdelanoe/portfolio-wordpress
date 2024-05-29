<?php get_header() ?>

<main>
    <section class="notfound">
        <h2 class="notfound__title" data-animation="show-up"><span class="notfound__number">404</span>Page non trouvée</h2>
        <p class="notfound__text" data-animation="show-up">La page que vous avez recherché n'existe pas, a été déplacée ou n'existe plus.</p>
        <div class="notfound__container" data-animation="show-up">
            <a href="<?= home_url() ?>" class="cta">Accueil</a>
            <a href="<?= home_url("projets") ?>" class="cta" data-variant="secondary">Mes projets</a>
        </div>
    </section>
</main>

<?php get_footer() ?>
