<?php /* Template Name: "Contact" */ ?>
<?php get_header() ?>
    <main>
        <div class="bg">
            <section class="herocontact">
                <h2 class="herocontact__title" data-animation="show-up"><span>Restons</span> En contact</h2>
            </section>
        </div>
        <section class="contact">
            <h2 class="sro">Formulaire de contact</h2>
            <form action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" class="form" method="post">
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="lastname">Nom</label>
                    <input class="field__input" type="text" name="lastname" id="lastname" placeholder="Doe">
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="name">Prénom</label>
                    <input class="field__input" type="text" name="name" id="name" placeholder="John">
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="email">Email</label>
                    <input class="field__input" type="email" name="email" id="email" placeholder="john@doe.com">
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="phone">Téléphone</label>
                    <input class="field__input" type="tel" name="phone" id="phone" placeholder="06 89 78 67 45">
                </div>
                <div class="field__container field__container--textarea" data-animation="show-up">
                    <label class="field__label" for="message">Message</label>
                    <textarea class="field__textarea" name="message" id="message" cols="30" rows="10"
                              placeholder="J'ai un projet pour vous..."></textarea>
                </div>
                <button class="cta field__submit" type="submit" data-animation="show-up">Envoyer</button>
            </form>
            <article class="cordcontact" data-animation="show-up">
                <h2 class="sro">Coordonnées</h2>
                <p class="cordcontact__content"><?= get_field('contact_text') ?></p>
                <dl class="cordcontact__container info">
                    <dt class="info__title">Email</dt>
                    <dd class="info__content"><a href="<?= "mailto:" . get_field('email') ?>"><?= get_field('email') ?></a></dd>
                    <dt class="info__title">Téléphone</dt>
                    <dd class="info__content"><a href="<?= "tel:" . get_field('phone') ?>"><?= get_field('phone') ?></a></dd>
                </dl>
            </article>
        </section>

    </main>
<?php get_footer() ?>