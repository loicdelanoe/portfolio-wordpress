<?php /* Template Name: "Contact" */ ?>
<?php

use inc\ContactForm;

get_header() ?>
    <main id="main">
        <div class="bg">
            <section class="herocontact">
                <h2 class="herocontact__title" data-animation="show-up"><span>Restons</span> En contact</h2>
            </section>
        </div>
        <section class="contact">
            <h2 class="sro">Formulaire de contact</h2>
            <article class="cordcontact" data-animation="show-up">
                <h2 class="sro">Coordonnées</h2>
                <p class="cordcontact__content"><?= get_field('contact_text') ?></p>
                <dl class="cordcontact__container info">
                    <dt class="info__title">Email</dt>
                    <dd class="info__content"><a
                                href="<?= "mailto:" . get_field('email') ?>"><?= get_field('email') ?></a></dd>
                    <dt class="info__title">Téléphone</dt>
                    <dd class="info__content"><a href="<?= "tel:" . get_field('phone') ?>"><?= get_field('phone') ?></a>
                    </dd>
                </dl>
            </article>
            <?php
            $feedback = ContactForm::feedback();
            ?>
            <form action="<?= esc_url(admin_url('admin-post.php')); ?>" class="form" method="post">
                <?php if ($feedback) : ?>
                    <p class="field__valid" data-animation="show-up"><?= $feedback ?></p>
                <?php endif; ?>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="lastname" data-type="required">Nom</label>
                    <input class="field__input" type="text" name="lastname" id="lastname" placeholder="Doe"
                           value="<?= $_SESSION['old']['lastname'] ?? '' ?>">
                    <?php if ($_SESSION['errors']['lastname'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['lastname'] ?></p>
                    <?php endif; ?>
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="name" data-type="required">Prénom</label>
                    <input class="field__input" type="text" name="name" id="name" placeholder="John"
                           value="<?= $_SESSION['old']['name'] ?? '' ?>">
                    <?php if ($_SESSION['errors']['name'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['name'] ?></p>
                    <?php endif; ?>
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="email" data-type="required">Email</label>
                    <input class="field__input" type="email" name="email" id="email" placeholder="john@doe.com"
                           value="<?= $_SESSION['old']['email'] ?? '' ?>">
                    <?php if ($_SESSION['errors']['email'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['email'] ?></p>
                    <?php endif; ?>
                </div>
                <div class="field__container" data-animation="show-up">
                    <label class="field__label" for="phone">Téléphone</label>
                    <input class="field__input" type="tel" name="phone" id="phone" placeholder="+33 (0)6 89 78 67 45"
                           value="<?= $_SESSION['old']['phone'] ?? '' ?>">
                    <?php if ($_SESSION['errors']['phone'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['phone'] ?></p>
                    <?php endif; ?>
                </div>
                <div class="field__container field__container--full" data-animation="show-up">
                    <label class="field__label" for="phone" data-type="required">Sujet</label>
                    <input class="field__input" type="text" name="subject" id="subject" placeholder="Projet, question..."
                           value="<?= $_SESSION['old']['subject'] ?? '' ?>">
                    <?php if ($_SESSION['errors']['subject'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['subject'] ?></p>
                    <?php endif; ?>
                </div>
                <div class="field__container field__container--full" data-animation="show-up">
                    <label class="field__label" for="message" data-type="required">Message</label>
                    <textarea class="field__textarea" name="message" id="message" cols="30" rows="10"
                              placeholder="J'ai un projet pour vous..."><?= $_SESSION['old']['message'] ?? '' ?></textarea>
                    <?php if ($_SESSION['errors']['message'] ?? null): ?>
                        <p class="field__error"><?= $_SESSION['errors']['message'] ?></p>
                    <?php endif; ?>
                </div>
                <input type="hidden" name="action" value="custom_contact_form">
                <button class="cta field__submit" type="submit" name="submit" data-animation="show-up">Envoyer</button>
                <?php
                $_SESSION['errors'] = [];
                $_SESSION['old'] = [];
                ?>
            </form>
        </section>

    </main>
<?php get_footer() ?>