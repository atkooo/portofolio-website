<template>
  <section id="home" class="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
    <!-- Ambient Background Blobs -->
    <div class="absolute top-1/4 left-10 w-72 h-72 bg-primary/20 rounded-full bubble-effect animate-blob"></div>
    <div class="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/20 rounded-full bubble-effect animate-blob animation-delay-2000"></div>

    <div class="container mx-auto px-4 z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Text Hero Content -->
        <div class="flex-1 text-center md:text-left" data-aos="fade-right">
          <span class="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            👋 Welcome to my portfolio
          </span>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span class="text-primary">Okta Maulana</span>
          </h1>
          <h2 class="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6 h-10 typewriter">
            <span>{{ currentText }}</span>
            <span class="cursor text-primary">|</span>
          </h2>
          <p class="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
            Passionate Software Engineer specializing in building exceptional digital experiences with Vue 3, TypeScript, and modern web architectures.
          </p>

          <!-- Action Buttons & Social Links -->
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a href="#contact" class="btn-primary flex items-center gap-2">
              <i class="fas fa-paper-plane"></i>
              Get in Touch
            </a>
            <a
              href="#portofolio"
              class="px-6 py-3 rounded-xl border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium"
            >
              View Projects
            </a>
          </div>

          <div class="mt-8 social-links justify-center md:justify-start">
            <a href="https://github.com/atkooo" target="_blank" class="social-link">
              <i class="fab fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/oktamaulana" target="_blank" class="social-link">
              <i class="fab fa-linkedin text-xl"></i>
            </a>
            <a href="https://instagram.com/_okta_maulana" target="_blank" class="social-link">
              <i class="fab fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        <!-- Hero Avatar Illustration -->
        <div class="flex-1 relative flex justify-center" data-aos="fade-left">
          <div class="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
            <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-blue-500 opacity-20 blur-2xl animate-pulse"></div>
            <div class="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/30 to-blue-600/30 p-2 backdrop-blur-md flex items-center justify-center border border-primary/20 shadow-2xl animate-float">
              <div class="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                <i class="fas fa-code text-7xl md:text-8xl text-primary"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentText = ref("");
const roles = ["Full Stack Developer", "Vue.js Specialist", "Software Engineer"];
let roleIndex = 0;
let charIndex = 0;
let timeoutId = null;

const typeText = () => {
  if (roleIndex === roles.length) roleIndex = 0;
  const fullText = roles[roleIndex];

  if (charIndex <= fullText.length) {
    currentText.value = fullText.slice(0, charIndex++);
    timeoutId = setTimeout(typeText, 100);
  } else {
    roleIndex++;
    charIndex = 0;
    timeoutId = setTimeout(typeText, 2000);
  }
};

onMounted(() => {
  typeText();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>
