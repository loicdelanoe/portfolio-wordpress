<footer class="footer" role="contentinfo">
    <div class="footer__container">
        <article class="footer__upper">
            <h2 class="footer__branding"><a href="<?= home_url() ?>">Loïc D.</a></h2>
            <dl class="footerlist">
                <div>
                    <dt class="footerlist__title">Contactez-moi</dt>
                    <dd class="footerlist__description">
                        <p>N’hésitez pas à me contacter
                            pour l’un de vos projets !</p>
                        <a class="cta" href="<?= home_url() ?>/contact" title="Vers la page contact">Contact</a>
                    </dd>
                </div>
                <div>
                    <dt class="footerlist__title">Mes réseaux</dt>
                    <dd class="footerlist__description">
                        <ul>
                            <li><a class="footerlist__link" href="https://github.com/loicdelanoe"
                                   title="Vers ma page Github">Github</a></li>
                            <li><a class="footerlist__link" href="#" title="Vers ma page Linkedin">Linkedin</a></li>
                            <li><a class="footerlist__link" href="#" title="Vers ma page Instagram">Instagram</a></li>
                        </ul>
                    </dd>
                </div>
                <div>
                    <dt class="footerlist__title">Navigation</dt>
                    <dd class="footerlist__description">
                        <ul>
                            <?php foreach (dw_get_navigation_links('main') as $link): ?>
                                <li class="nav__items"><a href="<?= $link->url ?>"
                                                          class="nav__link--footer"
                                                          title="Vers la page <?= $link->label ?>"><?= $link->label ?></a>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </dd>
                </div>
            </dl>
        </article>
        <article class="footer__legal">
            <h2 class="sro">Juridique</h2>
            <small>© 2024 Loïc Delanoë - Tous droits réservés.</small>
            <small><a href="#">Mentions légales</a></small>
        </article>
    </div>
</footer>
<script type="module" src="<?= dw_asset('js/main.js') ?>"></script>
</body>
</html>