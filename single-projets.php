<?php get_header() ?>
<main id="main">
    <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>

        <h1 class="sro"><?= get_the_title() ?></h1>
        <div class="bg">
            <section class="herosingle">
                <div data-animation="slide-left">
                    <a class="herosingle__back" href="<?= home_url() ?>/projets">←
                        Retour aux projets</a>
                    <h2 class="herosingle__title"><?= get_the_title() ?></h2>
                </div>
                <div class="herosingle__container" data-animation="slide-left">
                    <a class="cta" href="<?= get_field('github_link') ?>" data-variant="secondary">Github</a>
                    <?php if (!get_field('site_link')): ?>
                        <a class="cta" href="#" data-variant="disabled" aria-disabled="true">Visiter le site</a>
                    <?php else: ?>
                        <a class="cta" href="<?= get_field('site_link') ?>">Visiter le site</a>
                    <?php endif; ?>
                </div>
            </section>
        </div>
        <section class="resume">
            <div>
                <h2 class="resume__title" data-animation="show-up">Résumé</h2>
                <p class="resume__content" data-animation="show-up"><?= get_field('resume') ?></p>
            </div>
            <div class="resume__container" data-animation="show-up">
                <?= wp_get_attachment_image(get_field('resume_image'), 'project_thumbnail', false, [
                    'class' => 'resume__img',
                ]) ?>
            </div>
        </section>
        <section class="color">
            <h2 class="color__title" data-animation="show-up">Palette de couleurs</h2>
            <ul class="color__list">
                <?php
                $colors = explode(',', get_field('colors'));
                foreach ($colors as $color) {
                    echo "<li class='color__card' style='background-color: {$color}' data-animation='show-up'></li>";
                }; ?>
            </ul>
        </section>
        <div class="bg">
            <section class="overview">
                <h2 class="overview__title sro" data-animation="show-up">Vue d'ensemble</h2>
                <div class="overview__container" data-animation="show-up">
                    <?= wp_get_attachment_image(get_field('overview_image'), 'project_thumbnail', false, [
                        'class' => 'overview__img',
                    ]) ?>
                </div>
                <article class="functionality">
                    <h3 class="functionality__title" data-animation="show-up">Fonctionnalités</h3>
                    <p class="functionality__content" data-animation="show-up"><?= get_field('functionality') ?></p>
                </article>
            </section>

        </div>
    <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

    <section class="other">
        <h3 class="other__title" data-animation="show-up">Mes autres projets</h3>
        <div class="project__container">
            <?php
            $projects = new WP_Query([
                'post_type' => 'projets',
                'post_status' => 'publish',
                'posts_per_page' => 3,
                'orderby' => 'date',
                'order' => 'DESC',
            ]);

            if ($projects->have_posts()): while ($projects->have_posts()): $projects->the_post(); ?>

                <article class="projetcard" data-animation="slide-left">
                    <a class="projetcard__link" href="<?= get_permalink(); ?>"><span class="sro">
                            Consulter le <?= get_the_title(); ?>
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
        <a class="cta project__cta" href="<?= home_url() ?>/projets" data-animation="show-up">Tous mes projets</a>
    </section>
</main>
<?php get_footer() ?>
