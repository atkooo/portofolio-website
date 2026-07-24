<template>
  <section id="home" class="min-h-[100dvh] pt-20 pb-8 flex items-center justify-center relative overflow-hidden">
    <!-- Hairline Dot Grid Texture Overlay -->
    <div class="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full my-auto">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
        
        <!-- Text Hero Content -->
        <div class="flex-1 text-center lg:text-left" data-aos="fade-right">
          
          <!-- Micro Eyebrow Pill -->
          <div class="eyebrow-pill mb-4">
            <span class="w-1.5 h-1.5 rounded-full bg-[#00ADB5] animate-pulse"></span>
            FULLSTACK ENGINEER &amp; IT SPECIALIST
          </div>

          <!-- Headline with Comfortable Line Height & Breathing Room -->
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.25] mb-5 text-slate-900 dark:text-white">
            Building Modern <br class="hidden sm:inline" />
            <span class="text-[#00ADB5] sm:inline-block sm:mt-1">
              Web &amp; IT Systems.
            </span>
          </h1>

          <div class="text-sm sm:text-base font-mono text-slate-600 dark:text-gray-400 mb-4 min-h-[24px] typewriter flex items-center justify-center lg:justify-start gap-1">
            <span>&gt;</span>
            <span class="text-slate-900 dark:text-gray-200 font-semibold">{{ currentText }}</span>
            <span class="cursor text-[#00ADB5] font-bold">_</span>
          </div>

          <p class="text-slate-600 dark:text-gray-400 text-xs sm:text-sm mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed font-normal">
            Fullstack Engineer &amp; IT Specialist crafting resilient web architectures, enterprise systems, and seamless digital experiences.
          </p>

          <!-- Nested CTA Architecture & Social Links -->
          <div class="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mb-6">
            <!-- Primary Button-in-Button CTA -->
            <a href="#contact" class="cta-button-nested w-full sm:w-auto justify-center py-2.5 px-5 text-xs">
              <span>Initiate Contact</span>
              <div class="cta-button-icon w-6 h-6">
                <i class="fas fa-arrow-right text-[10px]"></i>
              </div>
            </a>

            <!-- Secondary CTA Pill -->
            <a href="#portofolio" class="cta-button-secondary w-full sm:w-auto justify-center py-2.5 px-5 text-xs">
              <span>Explore Systems</span>
              <i class="fas fa-arrow-up-right-from-square text-[10px] text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"></i>
            </a>
          </div>

          <!-- Social Links Pill Row -->
          <div class="flex items-center gap-3 justify-center lg:justify-start">
            <a href="https://github.com/atkooo" target="_blank" class="social-pill h-9 w-9" aria-label="GitHub">
              <i class="fab fa-github text-sm"></i>
            </a>
            <a href="https://linkedin.com/in/oktamaulana" target="_blank" class="social-pill h-9 w-9" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-sm"></i>
            </a>
            <a href="https://instagram.com/_okta_maulana" target="_blank" class="social-pill h-9 w-9" aria-label="Instagram">
              <i class="fab fa-instagram text-sm"></i>
            </a>
          </div>
        </div>

        <!-- Double-Bezel Hero Visual Node -->
        <div class="flex-1 relative flex justify-center lg:justify-end" data-aos="fade-left">
          <div class="double-bezel-outer w-56 h-56 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] relative">
            <div class="double-bezel-inner flex flex-col items-center justify-center relative overflow-hidden group p-4">
              
              <!-- Background Code Snippet Watermark -->
              <div class="absolute inset-0 font-mono text-[9px] text-slate-900/[0.05] dark:text-white/[0.05] select-none pointer-events-none p-3 leading-normal overflow-hidden">
                const architect = { name: "Okta Maulana", role: "Fullstack & IT Specialist", stack: ["Vue 3", "PHP", "Flutter", "Cisco", "SQL"] };
              </div>

              <div class="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/30 shadow-xl flex items-center justify-center animate-subtle-float">
                <div class="w-full h-full rounded-full bg-white dark:bg-[#08090D] flex items-center justify-center border border-slate-100 dark:border-white/10">
                  <i class="fas fa-[#00ADB5] fa-terminal text-3xl sm:text-4xl text-[#00ADB5]"></i>
                </div>
              </div>

              <!-- Floating Tech Nodes -->
              <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 backdrop-blur-md font-mono text-[10px] text-slate-700 dark:text-gray-300 shadow-md">
                ALS &amp; ERP/POS
              </div>
              <div class="absolute bottom-4 right-3 px-2.5 py-1 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 backdrop-blur-md font-mono text-[10px] text-[#00ADB5] shadow-md">
                Cisco Security &amp; Vue 3
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
const roles = [
  "Fullstack Engineer @ Lintara Digital",
  "IT Systems Staff @ PT Anzon Autoplaza",
  "Juara 1 KMIPN VI National Champion",
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

onMounted(() => {
  typeText();
});

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>
