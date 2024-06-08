<?php /* Template Name: "À Propos" */ ?>
<?php get_header() ?>
    <main id="main">
        <div class="bg">
            <section class="heroabout">
                <h2 class="heroabout__title" data-animation="show-up"><span>À Propos</span> De moi</h2>
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
            <h2 class="tools__title"><span>Mes</span> Outils</h2>
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
                            <?= wp_get_attachment_image(get_field('tools_image'), 'thumbnail', false, [
                                'class' => 'tools__item',
                            ]) ?>
                        </li>
                     <?php endwhile; endif; ?>
                <?php endfor; ?>

            </ul>
        </section>
        <div class="bg">
            <section class="formations">
                <h2 class="formations__title" data-animation="show-up"><span>Mes</span> Formations</h2>
                <ul class="formations__container" data-animation="show-up">
                    <?php
                    $formations = new WP_Query([
                        'post_type' => 'formations',
                        'post_status' => 'publish',
                        'orderby' => 'date',
                        'order' => 'ASC',
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
                    <?php endwhile; endif; ?>
                </ul>
            </section>
        </div>
        <section class="approachs">
            <h2 class="approachs__title" data-animation="show-up"><span>Mon</span>Approche</h2>
            <ul class="approachs__container">
                <li class="approachs__item approachs__item--design approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title">Design</h3>
                        <p class="approach__content">Il est important de fournir un design complet et soigné aux clients
                            afin qu’ils aient une bonne
                            idée de ce que leur site va donner quand il sera déployé.</p>
                    </div>
                </li>
                <li class="approachs__item approachs__item--dev approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title">Développement</h3>
                        <p class="approach__content">Après le design, le développement est tout aussi important, mais
                            surtout le respect des normes / conventions des langages (sémantique en HTML).</p>
                    </div>
                </li>
                <li class="approachs__item approachs__item--access approach" data-animation="show-up">
                    <div class="approach__container">
                        <h3 class="approach__title">Accessibilité</h3>
                        <p class="approach__content">L’accessibilité d’un site web est cruciale, en effet n’importe quel
                            site internet doit être pensé aussi pour les personnes en situation de handicap.</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="talk">
            <h2 class= data-animation="show-up">Discutons :)</h2>
            <a class="cta" href="<?= home_url('contact') ?>" data-animation="show-up">Contactez-moi</a>
        </section>
    </main>
<?php get_footer() ?>