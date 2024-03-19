<?php

function shopeo_blog_item() {
    global $post;
    $link = get_permalink();
    
    $image_id = get_post_thumbnail_id();
    $image = wp_get_attachment_image($image_id, 'full', false, array('class' => 'w-full aspect-video'));
    
    $title = get_the_title();
    $excerpt = get_the_excerpt();
    $date = get_the_date('F jS Y');
    $categories = get_the_category();
    $categories_list = '';
    foreach ($categories as $category) {
        $categories_list .= '<a href="' . get_category_link($category->term_id) . '" class="text-green-500 hover:text-green-700 !text-xs no-underline hover:underline">' . $category->name . '</a>, ';
    }
    $categories_list = rtrim($categories_list, ', ');
    $tags = get_the_tags();
    $tags_list = '';
    foreach ($tags as $tag) {
        $tags_list .= '<a href="' . get_tag_link($tag->term_id) . '" class="text-green-500 hover:text-green-700 !text-xs no-underline hover:underline">' . $tag->name . '</a>, ';
    }
    $tags_list = rtrim($tags_list, ', ');

    $output = "<article class='grid grid-cols-12 gap-4 p-6 md:p-0'>
    <div class='col-span-full md:col-span-4'>
      {$image}
    </div>
    <div class=' col-span-full md:col-span-8'>
    <h2>
    <a href='{$link}' class='!tracking-tight !text-[var(--e-global-color-50826f9)] hover:underline !decoration-[var(--e-global-color-50826f9)] !text-3xl !font-[Oswald]'>
    {$title}
    </a>
      </h2>
      <p>
        {$excerpt}
        <a href='{$link}'>[…]</a>
      </p>
      <div class='text-xs'>
        <time>Published on 3月 13th 2024</time>
        | Categories: {$categories_list} | | Tags: {$tags_list} |
        <a
          href='{$link}'
          class='text-green-500 hover:text-green-700 !text-xs no-underline hover:underline'
          >read more
          <i class='fa-solid fa-chevron-right'></i>
        </a>
      </div>
    </div>
  </article>";

    return $output;
}
add_shortcode('shopeo_blog_item', 'shopeo_blog_item');
