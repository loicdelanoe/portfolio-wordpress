<?php get_header() ?>

    <main>
        <?php while (have_posts()) : the_post(); ?>
            <section data-tag="wysiwyg">
                <?php the_content() ?>
            </section>
        <?php endwhile; ?>
    </main>

<?php get_footer() ?>