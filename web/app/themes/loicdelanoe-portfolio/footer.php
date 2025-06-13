<footer class="footer" role="contentinfo">
    <div class="footer__container">
        <article class="footer__upper">
            <h2 class="sro">Navigation de bas de page</h2>
            <a class="footer__branding" href="<?= home_url() ?>">Loïc D.</a>
            <div class="footer__content">
                <div class="footer__container--list">
                    <h3 class="footerlist__title"><?= pll_e("Contactez-moi") ?></h3>
                    <p class="footerlist__text"><?= pll_e('N’hésitez pas à me contacter pour l’un de vos projets !') ?></p>
                    <a class="cta" href="<?= dw_get_permalink('contact') ?>" title="Vers la page contact">Contact</a>
                </div>
                <?php get_sidebar('social'); ?>
                <nav class="footer__container--list">
                    <h3 class="footerlist__title">Navigation</h3>
                    <ul>
                        <?php foreach (dw_get_navigation_links('main') as $link): ?>
                            <li class="nav__items"><a href="<?= $link->url ?>"
                                                      class="nav__link--footer"
                                                      title="Vers la page <?= $link->label ?>"><?= $link->label ?></a>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </nav>
            </div>
        </article>
        <article class="footer__legal">
            <h2 class="sro">Juridique</h2>
            <small><?= pll_e('© 2024 Loïc Delanoë - Tous droits réservés.') ?></small>
            <small><a href="<?= dw_get_permalink('mentions-legales') ?>"><?= pll_e('Mentions légales') ?></a></small>
        </article>
    </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>