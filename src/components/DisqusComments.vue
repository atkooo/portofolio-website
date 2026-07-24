<template>
  <section class="py-16 bg-white dark:bg-primary-black">
    <div class="container mx-auto px-4 max-w-4xl">
      <h3 class="text-2xl font-bold mb-8 text-center text-gray-900 dark:text-white">Discussion & Comments</h3>
      <div id="disqus_thread"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark } = useTheme();

onMounted(() => {
  window.disqus_config = function () {
    const hostname = window.location.hostname;

    if (hostname === "127.0.0.1" || hostname === "localhost") {
      this.page.url = "http://127.0.0.1:5173/";
      this.page.identifier = "local-dev-vue";
    } else {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    }

    this.theme = {
      color: isDark.value ? "dark" : "light",
    };
  };

  if (!document.querySelector("script[src*='disqus.com/embed.js']")) {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://https-okta-maulana-vercel-app.disqus.com/embed.js";
    s.setAttribute("data-timestamp", (+new Date()).toString());
    (d.head || d.body).appendChild(s);
  }
});
</script>
