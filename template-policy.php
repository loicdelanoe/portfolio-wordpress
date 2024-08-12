<?php /* Template Name: "Mentions Légales" */ ?>
<?php get_header() ?>
<main>
    <div class="bg">
        <section class="juridic" data-tag="wysiwyg" data-animation="show-up">
            <h2 class="juridic__title"><?= pll_e('Mentions légales') ?></h2>
            <p class="juridic__date"><?= pll_e('Dernière mise à jour') ?> <?= get_the_modified_date() ?></p>
        </section>
    </div>
    <section class="container__legal" data-tag="wysiwyg" data-animation="show-up">
        <?= the_content() ?>
    </section>
</main>
<?php get_footer() ?>
