<?php get_header() ?>
<main>
    <div class="bg">
        <section class="heroprojets">
            <h2 class="heroprojets__title" data-animation="show-up"><span>Découvrez</span> Mes travaux</h2>
        </section>
    </div>
    <section class="projets">
        <h2 class="sro">Mes travaux</h2>

        <div class="project__container">
            <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>
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

        <p class="projects__nomore" data-animation="show-up">Vous êtes arrivé au bout !</p>
    </section>
</main>
<?php get_footer() ?>

