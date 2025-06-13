<?php /* Template Name: "À Propos" */ ?>
<?php get_header() ?>

    <main id="main">
        <div class="bg">
            <section class="heroabout">
                <h2 class="heroabout__title" data-animation="show-up" data-variant="secondary"><?= strip_tags(get_field('sub_title'), ['strong']) ?></h2>
            </section>
        </div>
        <section class="about">
            <h2 class="sro">À Propos</h2>
            <?= wp_get_attachment_image(get_field('profil_image'), 'medium_large', false, [
                'class' => 'about__img',
                'data-animation' => 'show-up',
            ]) ?>
            <div class="about__content" data-tag="wysiwyg" data-animation="show-up"><?= get_field('about_text') ?></div>
        </section>
        <section class="tools" data-animation="show-up">
            <h2 class="tools__title"><?= pll_e('Mes Outils') ?></h2>
            <ul class="tools__container">
                <?php
                $skills = new WP_Query([
                    'post_type' => 'skills',
                    'post_status' => 'publish',
                    'orderby' => 'date',
                    'order' => 'DESC',
                ]);

                for ($i = 0; $i < 2; $i++): ?>

                    <?php if ($skills->have_posts()): while ($skills->have_posts()): $skills->the_post(); ?>
                        <li>
                            <?= wp_get_attachment_image(get_field('tools_image'), 'thumbnail', true, [
                                'class' => 'tools__item',
                            ]) ?>
                        </li>
                     <?php endwhile; endif; ?>
                <?php endfor;
                wp_reset_postdata();
                ?>

            </ul>
        </section>
        <div class="bg">
            <section class="formations">
                <h2 class="formations__title" data-animation="show-up" data-variant="secondary"><?= strip_tags(get_field('formation_title'), ['strong']) ?></h2>
                <ul class="formations__container" data-animation="show-up">
                    <?php
                    $formations = new WP_Query([
                        'post_type' => 'formations',
                        'post_status' => 'publish',
                        'orderby' => 'date',
                        'order' => 'DESC',
                    ]);

                    if ($formations->have_posts()): while ($formations->have_posts()): $formations->the_post();
                        ?>
                        <li class="formation">
                            <div class="formation__container" data-animation="show-up">
                                <time class="formation__date"><?= get_field('date') ?></time>
                                <h3 class="formation__title"><?= get_field('title') ?></h3>
                                <small><?= get_field('options') ?></small>
                            </div>
                        </li>
                    <?php endwhile; endif; wp_reset_postdata(); ?>
                </ul>
            </section>
        </div>
        <section class="approachs">
            <h2 class="approachs__title" data-animation="show-up" data-variant="secondary"><?= strip_tags(get_field('approach_title'), ['strong']) ?></h2>
            <ul class="approachs__container">
                <li class="approachs__item approachs__item--design approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title"><?= get_field('first_title') ?></h3>
                        <div class="approach__content"><?= get_field('first_content') ?></div>
                    </div>
                </li>
                <li class="approachs__item approachs__item--dev approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title"><?= get_field('secondary_title') ?></h3>
                        <div class="approach__content"><?= get_field('secondary_content') ?></div>
                    </div>
                </li>
                <li class="approachs__item approachs__item--access approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title"><?= get_field('third_title') ?></h3>
                        <div class="approach__content"><?= get_field('third_content') ?></div>
                    </div>
                </li>
            </ul>
        </section>
        <section class="talk">
            <h2 class="talk__title" data-animation="show-up"><?= pll_e('Discutons :)') ?></h2>
            <a class="cta" href="<?= dw_get_permalink('contact') ?>" data-animation="show-up"><?= pll_e('Contactez-moi') ?></a>
        </section>
    </main>
<?php get_footer() ?>