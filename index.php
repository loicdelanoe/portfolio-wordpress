<?php get_header() ?>
<main>
    <section class="hero">
        <h2 class="hero__title"><span>Loïc Delanoë</span> Développeur Web</h2>
        <div class="hero__container">
            <a class="cta" href="/projets">Mes Projets</a>
            <a class="cta" href="/a-propos" data-variant="secondary">Me Découvrir</a>
        </div>
    </section>
    <section class="project">
        <h2 class="project__title"><span>Derniers</span> Projets</h2>
        <?php
        $projets = new WP_Query([
            'post_type' => 'projets',
            'post_status' => 'publish',
            'posts_per_page' => 3,
            'orderby' => 'date',
            'order' => 'DESC',
        ]);

        if ($projets->have_posts()): while ($projets->have_posts()): $projets->the_post();
            ?>
            <article class="projetcard">
                <a class="projetcard__link" href="<?= get_permalink(); ?>"><span class="sro">
                            Consulter le <?= get_the_title(); ?>
                        </span></a>
                <div class="projetcard__container">
                    <img class="projetcard__img" src="<?= get_field('resume_image') ?>" alt="">
                    <p class="projetcard__title"><?= get_the_title() ?></p>
                </div>
            </article>
        <?php endwhile; endif; ?>

        <a class="cta project__cta" href="/projets">Voir mes projets</a>
    </section>
</main>
<?php get_footer() ?>
