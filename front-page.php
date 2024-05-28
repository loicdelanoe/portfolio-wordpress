<?php get_header() ?>
<main class="key" id="main">
    <div class="bg">
        <section class="hero">
            <h2 class="hero__title" data-animation="show-up"><span class="light" itemprop="name">Loïc Delanoë</span> <span itemprop="jobTitle">Développeur Web</span></h2>
            <div class="hero__container" data-animation="show-up">
                <a class="cta" href="<?= home_url('projets') ?>" title="Vers la page projets">Mes Projets</a>
                <a class="cta" href="<?= home_url('a-propos') ?>" data-variant="secondary" title="Vers la page à propos">Me Découvrir</a>
            </div>
            <div class="hero__container--partition partition" data-animation="show-up">
                <p class="partition__text">Scroll down →</p>
                <img src="<?= dw_asset('img/hero-partition.svg') ?>" width="1116" height="195" alt="">
            </div>
        </section>
    </div>
    <section class="project" itemprop="knowsAbout" itemscope itemtype="https://schema.org/CreativeWork">
        <h2 class="sro">Projets</h2>
        <article class="project__wrapper">
            <h2 class="project__title" data-animation="show-up"><span>Derniers</span> Projets</h2>
            <div class="project__container">
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
                    <article class="projetcard" data-animation="slide-left">
                        <a class="projetcard__link" href="<?= get_permalink(); ?>"><span class="sro">
                            Consulter le <?= get_the_title(); ?>
                        </span></a>
                        <div class="projetcard__container" itemprop="workExample">
                            <?= wp_get_attachment_image(get_field('resume_image'), 'project_thumbnail', false, [
                                'class' => 'projetcard__img',
                            ]) ?>
                            <h3 class="projetcard__title" itemprop="name"><?= get_the_title() ?></h3>
                        </div>
                    </article>
                <?php endwhile; endif; ?>
            </div>
            <a class="cta project__cta" href="<?= home_url('projets') ?>" data-animation="show-up" title="Vers la page projets">Voir mes projets</a>
        </article>
    </section>
</main>
<?php get_footer() ?>
