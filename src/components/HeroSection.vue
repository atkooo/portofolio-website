<template>
  <section id="home" class="min-h-[100dvh] pt-20 pb-10 flex flex-col justify-center relative overflow-hidden">
    <!-- Hairline Dot Grid Texture Overlay -->
    <div class="absolute inset-0 bg-dot-grid opacity-40 pointer-events-none"></div>

    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full text-center">
      
      <!-- Centered Hero Text (Humble & Simple Tone) -->
      <div data-aos="fade-up" class="max-w-3xl mx-auto">
        
        <!-- Main Headline -->
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 text-slate-900 dark:text-white">
          Hello, <span class="text-[#00ADB5]">I'm Okta!</span>
        </h1>

        <!-- Subtitle & Dynamic Typewriter -->
        <div class="text-base sm:text-xl font-mono text-slate-700 dark:text-gray-300 mb-5 typewriter flex items-center justify-center gap-1.5">
          <span>&gt;</span>
          <span class="text-slate-900 dark:text-white font-semibold">{{ currentText }}</span>
          <span class="cursor text-[#00ADB5] font-bold">_</span>
        </div>

        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
          Fullstack Engineer &amp; IT Specialist focused on building web applications, business management software, and IT infrastructure.
        </p>

        <!-- CTA Action Row & Social Links -->
        <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a href="#about" class="cta-button-nested py-3 px-6 text-xs sm:text-sm font-semibold">
            <span>Read Bio</span>
            <div class="cta-button-icon w-6 h-6">
              <i class="fas fa-arrow-down text-[10px]"></i>
            </div>
          </a>

          <a href="#contact" class="cta-button-secondary py-3 px-6 text-xs sm:text-sm font-semibold">
            <span>Contact Me</span>
            <i class="fas fa-paper-plane text-xs"></i>
          </a>

          <!-- Social Links Pill Row -->
          <div class="flex items-center gap-2.5 ml-0 sm:ml-2">
            <a href="https://github.com/atkooo" target="_blank" class="social-pill h-10 w-10 text-base" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/oktamaulana" target="_blank" class="social-pill h-10 w-10 text-base" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com/_okta_maulana" target="_blank" class="social-pill h-10 w-10 text-base" aria-label="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Horizontal Highlight Stat Cards (Humble Wording) -->
      <div data-aos="fade-up" data-aos-delay="200" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 max-w-5xl mx-auto mt-4">
        <div 
          v-for="stat in highlightStats" 
          :key="stat.label" 
          class="rounded-xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-4 text-center hover:border-[#00ADB5]/50 transition-all duration-300 shadow-sm"
        >
          <div class="w-9 h-9 rounded-lg bg-[#00ADB5]/15 text-[#00ADB5] mx-auto mb-2 flex items-center justify-center text-sm font-bold">
            <i :class="stat.icon"></i>
          </div>
          <div class="font-bold text-xs sm:text-sm text-slate-900 dark:text-white mb-0.5">{{ stat.title }}</div>
          <div class="text-[11px] font-mono text-slate-500 dark:text-gray-400">{{ stat.label }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const currentText = ref("");
const roles = [
  "Fullstack Engineer @ Lintara Digital",
  "IT Systems Staff @ PT Anzon Autoplaza",
  "1st Place - KMIPN VI National Competition",
  "Vue 3 & Flutter Developer",
];
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

const highlightStats = [
  { icon: "fas fa-briefcase", title: "ALS & ERP/POS", label: "Web Software" },
  { icon: "fas fa-code", title: "Vue 3 & PHP", label: "Fullstack Dev" },
  { icon: "fas fa-trophy", title: "KMIPN VI Winner", label: "1st Place National" },
  { icon: "fas fa-shield-alt", title: "Cisco Security", label: "Network Admin" },
  { icon: "fas fa-graduation-cap", title: "D3 Informatics", label: "Pontianak, ID" },
];

onMounted(() => {
  typeText();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>
