<?php get_header() ?>
<main>
    <section class="heroprojets">
        <h2 class="heroprojets__title" data-animation="showUp"><span>Découvrez</span> Mes travaux</h2>
    </section>
    <section class="projets">
        <h2 class="sro">Mes travaux</h2>

        <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>
            <article class="projetcard">
                <a class="projetcard__link" href="<?= get_permalink(); ?>"><span class="sro">
                            Consulter le <?= get_the_title(); ?>
                        </span></a>
                <div class="projetcard__container">
                    <img class="projetcard__img" src="<?= get_field('resume_image') ?>" alt="">
                    <p class="projetcard__title"><?= get_the_title() ?></p>
                </div>
            </article>
        <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

        <p class="projects__nomore">Vous êtes arrivé au bout !</p>
    </section>
</main>
<?php get_footer() ?>

