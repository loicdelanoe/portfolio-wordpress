<?php get_header() ?>

<main>
    <section class="notfound">
        <h2 class="notfound__title" data-animation="show-up"><span class="notfound__number">404</span><?= pll_e('Page non trouvée') ?></h2>
        <p class="notfound__text" data-animation="show-up"><?= pll_e("La page que vous avez recherché n'existe pas, a été déplacée ou n'existe plus.") ?></p>
        <div class="notfound__container" data-animation="show-up">
            <a href="<?= pll_home_url() ?>" class="cta"><?= pll_e('Accueil') ?></a>
            <a href="<?= get_post_type_archive_link('projets') ?>" class="cta" data-variant="secondary"><?= pll_e('Mes projets') ?></a>
        </div>
    </section>
</main>

<?php get_footer() ?>
