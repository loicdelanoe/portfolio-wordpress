<?php get_header() ?>
<main>
    <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>

        <h1 class="sro"><?= get_the_title() ?></h1>
        <section class="projecthero">
            <a class="projecthero__back" href="/projets" data-animation="showUp">← Retour aux projets</a>
            <div class="projecthero__head" data-animation="showUp">
                <h2 class="projecthero__title"><?= get_the_title() ?></h2>
                <a class="cta" href="https://cv.loicdelanoe.com">Visiter le site</a>
            </div>
            <article class="projecthero__context">
                <div class="projecthero__container">
                    <h3 data-animation="showUp">Contexte</h3>
                    <p data-animation="showUp"><?= get_field('context') ?></p>
                </div>
                <img class="projecthero__thumb" src="<?= get_field('thumb') ?>" alt="" data-animation="showUp">
            </article>
        </section>
        <div class="bg">
            <section class="projectprocess">
                <h2 class="projectprocess__title" data-animation="showUp">Processus de création</h2>
                <p class="projectprocess__text" data-animation="showUp"><?= get_field('process') ?></p>
            </section>
        </div>
        <img class="projectprocess__img" src="<?= get_field('processImg') ?>" alt="">
        <section class="projectresult">
            <h2 class="projectresult__title" data-animation="showUp">Résultats / Images</h2>
            <p class="projectresult__text" data-animation="showUp">Un fois le développement terminé, j’ai pu déployé mon site, faire des tests de performances sur GTMetrix et des test d’accessibilités avec Wave. Les résultats étaient plutôt satisfaisants avec un score de 99% pour GTMetrix et 90% pour l’accessibilité.</p>
            <article class="slider">
                <h3 class="sro">Images</h3>
                <div class="slider__container">
                    <div class="slider__item"></div>
                    <div class="slider__item"></div>
                    <div class="slider__item"></div>
                    <div class="slider__item"></div>
                </div>
            </article>
        </section>

    <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

    <section>
        <article class="project__more">
            <h3 data-animation="showUp">Mes autres projets</h3>
            <ul class="projects__container">
                <?php
                $projects = new WP_Query([
                    'post_type' => 'projets',
                    'post_status' => 'publish',
                    'posts_per_page' => 3,
                    'orderby' => 'date',
                    'order' => 'DESC',
                ]);

                if ($projects->have_posts()): while ($projects->have_posts()): $projects->the_post(); ?>
                    <!--                    <h1>--><?php //= get_the_ID() ?><!--</h1>-->
                    <li class="projects__card" data-animation="showUp">
                        <a class="card__link" href="<?= get_permalink(); ?>">
                            <span class="sro">Voir le projet</span>
                        </a>
                        <div class="card__box">
                            <h3 class="projects__name"><?= get_the_title() ?></h3>
                            <img class="card__img" src="<?= get_field('thumb') ?>" alt="">
                        </div>
                    </li>
                <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>
            </ul>
            <a class="cta secondary" href="/projets" data-animation="showUp">Tout mes projets</a>
        </article>
    </section>
</main>
<?php get_footer() ?>
