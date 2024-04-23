<?php /* Template Name: "À Propos" */ ?>
<?php get_header() ?>
    <main>
        <div class="bg">
            <section class="heroabout" >
                <h2 class="heroabout__title" data-animation="show-up"><span>À Propos</span> De moi</h2>
            </section>
        </div>
        <section class="about">
            <h2 class="sro">À Propos</h2>
            <div class="about__img" data-animation="show-up"></div>
            <p class="about__content" data-animation="show-up"><?= get_field('about_text') ?></p>
        </section>
    </main>
<?php get_footer() ?>