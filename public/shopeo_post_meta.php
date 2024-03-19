<?php

function shopeo_post_meta() {
    global $post;

    $date = get_the_date('F jS Y');
    $categories = get_the_category();
    $categories_list = '';
    foreach ($categories as $category) {
        $categories_list .= '<a href="' . get_category_link($category->term_id) . '" class="text-green-500 hover:text-green-700 no-underline hover:underline">' . $category->name . '</a>, ';
    }
    $categories_list = rtrim($categories_list, ', ');
    $tags = get_the_tags();
    $tags_list = '';
    foreach ($tags as $tag) {
        $tags_list .= '<a href="' . get_tag_link($tag->term_id) . '" class="text-green-500 hover:text-green-700 no-underline hover:underline">' . $tag->name . '</a>, ';
    }
    $tags_list = rtrim($tags_list, ', ');

    $output = "<div class='text-base'>
        <time>Published on 3月 13th 2024</time>
        | Categories: {$categories_list} | Tags: {$tags_list}
        </div>";

    return $output;
}
add_shortcode('shopeo_post_meta', 'shopeo_post_meta');
