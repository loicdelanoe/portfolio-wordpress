<?php /* Template Name: "Contact" */ ?>
<?php get_header() ?>
    <main>
        <section class="herocontact">
            <h2 class="herocontact__title"><span>Restons</span> En contact</h2>
        </section>
        <section class="contact">
            <h2 class="sro">Formulaire de contact</h2>
            <form action="" class="form" method="post">
                <label class="field__label" for="lastname">Nom</label>
                <input class="field__input" type="text" name="lastname" id="lastname" placeholder="Doe">
                <label class="field__label" for="name">Prénom</label>
                <input class="field__input" type="text" name="name" id="name" placeholder="John">
                <label class="field__label" for="email">Email</label>
                <input class="field__input" type="email" name="email" id="email" placeholder="john@doe.com">
                <label class="field__label" for="phone">Téléphone</label>
                <input class="field__input" type="tel" name="phone" id="phone" placeholder="06 89 78 67 45">
                <label class="field__label" for="message">Message</label>
                <textarea class="field__textarea" name="message" id="message" cols="30" rows="10"
                          placeholder="J'ai un projet pour vous..."></textarea>
                <button class="cta field__submit" type="submit">Envoyer</button>
            </form>
        </section>
        <section class="cordcontact">
            <h2 class="sro">Coordonnées</h2>
            <p class="cordcontact__content">Lorem ipsum dolor sit amet consectetur. Nulla ipsum elementum in laoreet at.
                Facilisis tortor mauris sem.</p>
            <dl class="cordcontact__container info">
                <dt class="info__title">Email</dt>
                <dd class="info__content">loic.del4127@gmail.com</dd>
                <dt class="info__title">Téléphone</dt>
                <dd class="info__content">+33 (0)6 04 02 47 65</dd>
            </dl>
        </section>
    </main>
<?php get_footer() ?>