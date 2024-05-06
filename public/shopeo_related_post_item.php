<?php

function shopeo_related_post_item() {
    global $post;
    $title = get_the_title();
    $link = get_permalink();
    
    $image_id = get_post_thumbnail_id();
    $image = wp_get_attachment_image($image_id, 'full', false, array('class' => 'w-[150px] aspect-square'));
    
    $output = "<div class='flex items-center justify-center'>
    <a href='{$link}' class='group relative'>
    {$image}
    <div
      class='bg-green-500 absolute inset-0 flex items-center justify-center text-center opacity-0 transition group-hover:opacity-75'
    >
      <h6 class='font-normal !text-sm'>{$title}</h6>
    </div>
    </a>
    </div>";

    return $output;
}
add_shortcode('shopeo_related_post_item', 'shopeo_related_post_item');
