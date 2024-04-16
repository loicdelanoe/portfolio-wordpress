<?php get_header() ?>
<main>
    <section class="projects">
        <h2 class="projects__title" data-animation="showUp">Découvrez mes Travaux</h2>
        <ul class="projects__container">
            <?php if (have_posts()): while (have_posts()): the_post(); // Ouverture de "The Loop" de Wordpress ?>
                <li class="projects__card" data-animation="showUp">
                    <a class="card__link" href="<?= get_permalink(); ?>">
                        <span class="sro">Voir le projet</span>
                    </a>
                    <div class="card__box">
                        <h3 class="projects__name"><?= get_the_title() ?></h3>
                    </div>
                </li>
            <?php endwhile; endif; // Fermeture de "The Loop" de Wordpress ?>

        </ul>
        <p class="projects__nomore">Vous êtes arrivé au bout !</p>
    </section>
</main>
<?php get_footer() ?>

