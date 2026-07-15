<?php

function affordablehvac_enqueue_assets() {

    $theme_uri = get_template_directory_uri();
    $theme_dir = get_template_directory();

    // Load CSS
    foreach (glob($theme_dir . '/dist/assets/*.css') as $css) {
        wp_enqueue_style(
            'affordablehvac-style',
            $theme_uri . '/dist/assets/' . basename($css),
            [],
            filemtime($css)
        );
    }

    // Load JS
    foreach (glob($theme_dir . '/dist/assets/*.js') as $js) {
        wp_enqueue_script(
            'affordablehvac-script',
            $theme_uri . '/dist/assets/' . basename($js),
            [],
            filemtime($js),
            true
        );

        wp_script_add_data('affordablehvac-script', 'type', 'module');
    }
}

add_action('wp_enqueue_scripts', 'affordablehvac_enqueue_assets');