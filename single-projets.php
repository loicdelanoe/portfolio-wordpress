<?php get_header() ?>
<main>
    <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>

        <h1 class="sro"><?= get_the_title() ?></h1>
        <section class="herosingle">
            <div>
                <a class="herosingle__back" href="/projets" data-animation="showUp">← Retour aux projets</a>
                <h2 class="herosingle__title"><?= get_the_title() ?></h2>
            </div>
            <div class="herosingle__container" data-animation="showUp">
                <a class="cta" href="<?= get_field('github_link') ?>" data-variant="secondary">Github</a>
                <a class="cta" href="<?= get_field('site_link') ?>">Visiter le site</a>
            </div>
        </section>
        <section class="resume">
            <div>
                <h2 class="resume__title">Résumé</h2>
                <p class="resume__content"><?= get_field('resume') ?></p>
            </div>
            <div class="resume__container">
                <img class="resume__img" src="<?= get_field('resume_image') ?>" alt="">
            </div>
        </section>
        <section class="color">
            <h2 class="color__title">Palette de couleurs</h2>
        </section>
        <section class="overview">
            <h2 class="overview__title sro">Vue d'ensemble</h2>
            <div class="overview__container">
                <img class="overview__img" src="<?= get_field('overview_image') ?>" alt="">
            </div>
            <article class="functionality">
                <h3 class="functionality__title">Fonctionnalités</h3>
                <p class="functionality__content"><?= get_field('functionality') ?></p>
            </article>
        </section>

    <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

    <section class="other">
        <h3 class="other__title">Mes autres projets</h3>
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

                <article class="projetcard">
                    <a class="projetcard__link" href="<?= get_permalink(); ?>"><span class="sro">
                            Consulter le <?= get_the_title(); ?>
                        </span></a>
                    <div class="projetcard__container">
                        <img class="projetcard__img" src="<?= get_field('resume_image') ?>" alt="">
                        <h3 class="projetcard__title"><?= get_the_title() ?></h3>
                    </div>
                </article>

            <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>
        </div>
        <a class="cta project__cta" href="/projets" data-animation="showUp">Tous mes projets</a>
    </section>
</main>
<?php get_footer() ?>
