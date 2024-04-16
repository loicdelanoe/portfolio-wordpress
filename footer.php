<footer class="footer">
    <article class="footer__container">
        <h2 class="footer__branding">Loïc D.</h2>
        <dl class="footerlist">
            <dt class="footerlist__title">Contactez-moi</dt>
            <dd class="footerlist__description">
                <p>N’hésitez pas à me contacter
                    pour l’un de vos projets !</p>
                <a class="cta" href="/contact">Contact</a>
            </dd>
            <dt class="footerlist__title">Mes réseaux</dt>
            <dd class="footerlist__description">
                <ul>
                    <li><a class="footerlist__link" href="https://github.com/loicdelanoe">Github</a></li>
                    <li><a class="footerlist__link" href="#">Linkedin</a></li>
                    <li><a class="footerlist__link" href="#">Instagram</a></li>
                </ul>
            </dd>
            <dt class="footerlist__title">Navigation</dt>
            <dd class="footerlist__description">
                <ul>
                    <?php foreach (dw_get_navigation_links('main') as $link): ?>
                        <li class="nav__items"><a href="<?= $link->url ?>" class="footernav__link"><?= $link->label ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </dd>
        </dl>
    </article>
    <article class="footer__legal">
        <h2 class="sro">Juridique</h2>
        <small>© 2024 Loïc Delanoë - Tous droits réservés.</small>
        <small><a href="#">Mentions légales</a></small>
    </article>
</footer>
<script type="module" src="<?= dw_asset('js/main.js') ?>"></script>
</body>
</html>