<script lang="ts" setup>
import Editor from "@tinymce/tinymce-vue";

function init() {
  return {
    skin: "oxide",
    // skin_url: "/tinymce-polaris-main/polaris",
    content_css: false,
    menubar: false,
    branding: false,
    height: 420,
    plugins: plugins(),
    toolbar: toolbar(),
    content_style: content_style(),
  };
}

function plugins() {
  return [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "charmap",
    "preview",
    "anchor",
    "searchreplace",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "code",
    "help",
    "wordcount",
    "emoticons",
  ];
}

function toolbar() {
  return (
    "undo redo | blocks | " +
    "fontfamily fontsizeinput |" +
    "bold italic forecolor | alignleft aligncenter " +
    "alignright alignjustify | bullist numlist outdent indent emoticons | " +
    "removeformat fullscreen | help"
  );
}

function content_style() {
  return "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }";
}
</script>

<template>
  <!-- api-key="4hxy0mee8bp47o512g4sy8s3ihg2djrmbiwtei8kduky11io" -->
  <Editor
    tinymceScriptSrc="/tinymce/tinymce.min.js"
    :init="init()"
  />
</template>

<style lang="scss" scoped>
:global(.tox.tox-silver-sink.tox-tinymce-aux) {
  z-index: 9999;
}
</style>
<script lang="ts">
export default { inheritAttrs: true };
</script>
