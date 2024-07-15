<?php get_header() ?>
<main id="main">
    <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>
        <div class="bg">
            <section class="herosingle">
                <div class="herosingle__title--container" data-animation="slide-left">
                    <a class="herosingle__back" href="<?= get_post_type_archive_link('projets') ?>" title="Retour aux projets">←
                        <?= pll_e('Retour aux projets') ?></a>
                    <h2 class="herosingle__title"><?= get_the_title() ?></h2>
                </div>
                <div class="herosingle__container" data-animation="slide-left">
                    <a class="cta" href="<?= get_field('github_link') ?>" data-variant="secondary" target="_blank">Github</a>
                    <?php if (!get_field('site_link')): ?>
                        <a class="cta" href="#" data-variant="disabled" aria-disabled="true"><?= pll_e("Site indisponible") ?></a>
                    <?php else: ?>
                        <a class="cta" href="<?= get_field('site_link') ?>" target="_blank"><?= pll_e("Visiter le site") ?></a>
                    <?php endif; ?>
                </div>
            </section>
        </div>
        <section class="resume">
            <div class="resume__content" data-animation="show-up" data-tag="wysiwyg"><?= get_field('resume') ?></div>
            <div class="resume__container" data-animation="show-up">
                <?= wp_get_attachment_image(get_field('resume_image'), 'project_thumbnail', false, [
                    'class' => 'resume__img',
                ]) ?>
            </div>
        </section>
        <section class="color">
            <h2 class="color__title" data-animation="show-up"><?= pll_e('Palette de couleurs') ?></h2>
            <ul class="color__list">
                <?php
                $colors = explode(',', get_field('colors'));
                foreach ($colors as $color) {
                    echo "<li class='color__card' data-animation='show-up' data-clipboard='{$color}' style='background-color: {$color}'><span class='color__text'>{$color}</span></li>";
                }; ?>
            </ul>
        </section>
        <div class="bg">
            <section class="overview">
                <a class="overview__container" data-animation="show-up"
                   href="<?= wp_get_attachment_image_url(get_field('overview_image'), 'full') ?>" title="Voir l'image"
                   data-zoom>
                    <span class="sro">Voir l'image</span>
                    <?= wp_get_attachment_image(get_field('overview_image'), 'large', false, [
                        'class' => 'overview__img',
                    ]) ?>
                </a>
                <div class="functionality__content" data-animation="show-up"
                     data-tag="wysiwyg"><?= get_field('functionality') ?>
                </div>
            </section>
        </div>
        <?php if (get_field('gallery') !== null): ?>
            <section class="gallery">
                <h2 class="gallery__title" data-animation="show-up"><?= pll_e("Galerie") ?></h2>
                <div class="gallery__container">
                    <?php foreach (get_field('gallery') as $image): ?>
                        <a class="gallery__link" href="<?= wp_get_attachment_image_url($image['id'], 'full') ?>"
                           data-zoom>
                            <?= wp_get_attachment_image($image['id'], 'medium', false, [
                                'class' => 'gallery__img',
                                'data-animation' => 'show-up'
                            ]) ?>
                        </a>
                    <?php endforeach; ?>
                </div>
            </section>
        <?php endif; ?>
        <section class="herosingle herosingle--bottom">
            <div class="herosingle__title--container" data-animation="slide-left">
                <a class="herosingle__back" href="<?= get_post_type_archive_link('projets') ?>" title="Retour aux projets">←
                    <?= pll_e('Retour aux projets') ?></a>
                <h2 class="herosingle__title"><?= get_the_title() ?></h2>
            </div>
            <div class="herosingle__container" data-animation="slide-left">
                <a class="cta" href="<?= get_field('github_link') ?>" data-variant="secondary" target="_blank">Github</a>
                <?php if (!get_field('site_link')): ?>
                    <a class="cta" href="#" data-variant="disabled" aria-disabled="true"><?= pll_e("Site indisponible") ?></a>
                <?php else: ?>
                    <a class="cta" href="<?= get_field('site_link') ?>" target="_blank"><?= pll_e("Visiter le site") ?></a>
                <?php endif; ?>
            </div>
        </section>
    <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

    <section class="other">
        <h3 class="other__title" data-animation="show-up"><?= pll_e("Mes autres projets") ?></h3>
        <div class="project__container project__container--two">
            <?php
            $projects = new WP_Query([
                'post_type' => 'projets',
                'post_status' => 'publish',
                'posts_per_page' => 2,
                'post__not_in' => [get_the_ID()],
                'orderby' => 'date',
                'order' => 'DESC',
            ]);

            if ($projects->have_posts()): while ($projects->have_posts()): $projects->the_post(); ?>

                <article class="projetcard projetcard__two" data-animation="slide-left">
                    <a class="projetcard__link" href="<?= get_permalink(); ?>"
                       title="Consulter <?= get_the_title(); ?>"><span class="sro">
                            Consulter <?= get_the_title(); ?>
                        </span></a>
                    <div class="projetcard__container">
                        <?= wp_get_attachment_image(get_field('resume_image'), 'project_thumbnail', false, [
                            'class' => 'projetcard__img',
                        ]) ?>
                        <h3 class="projetcard__title"><?= get_the_title() ?></h3>
                    </div>
                </article>

            <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>
        </div>
        <a class="cta project__cta" href="<?= get_post_type_archive_link('projets') ?>" title="Voir tous les projets"
           data-animation="show-up"><?= pll_e("Tous mes projets") ?></a>
    </section>
</main>
<?php get_footer() ?>
