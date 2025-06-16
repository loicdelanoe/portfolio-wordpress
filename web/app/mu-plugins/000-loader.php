<?php

/**
 * MU-Plugins Loader - Controls loading order
 */

// Charger ACF Pro en premier
if (file_exists(WPMU_PLUGIN_DIR . '/advanced-custom-fields-pro/acf.php')) {
    require_once WPMU_PLUGIN_DIR . '/advanced-custom-fields-pro/acf.php';
}

// Puis Polylang Pro
if (file_exists(WPMU_PLUGIN_DIR . '/polylang-pro/polylang.php')) {
    require_once WPMU_PLUGIN_DIR . '/polylang-pro/polylang.php';
}

// Autres plugins si nécessaire
if (file_exists(WPMU_PLUGIN_DIR . '/acf-options-for-polylang/acf-options-for-polylang.php')) {
    require_once WPMU_PLUGIN_DIR . '/acf-options-for-polylang/acf-options-for-polylang.php';
}
