<template>
  <section id="home" class="min-h-[100dvh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center relative overflow-hidden">
    <!-- Hairline Dot Grid Texture Overlay -->
    <div class="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        <!-- Text Hero Content -->
        <div class="flex-1 text-center lg:text-left" data-aos="fade-right">
          
          <!-- Micro Eyebrow Pill -->
          <div class="eyebrow-pill">
            <span class="w-1.5 h-1.5 rounded-full bg-[#00ADB5] animate-pulse"></span>
            SOFTWARE ENGINEER & UI ARCHITECT
          </div>

          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6 text-slate-900 dark:text-white">
            Engineering <br class="hidden sm:inline" />
            <span class="text-[#00ADB5]">
              Digital Experiences.
            </span>
          </h1>

          <div class="text-lg sm:text-xl font-mono text-slate-600 dark:text-gray-400 mb-8 min-h-[32px] typewriter flex items-center justify-center lg:justify-start gap-1">
            <span>&gt;</span>
            <span class="text-slate-900 dark:text-gray-200 font-semibold">{{ currentText }}</span>
            <span class="cursor text-[#00ADB5] font-bold">_</span>
          </div>

          <p class="text-slate-600 dark:text-gray-400 text-base sm:text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Specializing in high-performance Web applications, Vue 3 Composition API architectures, and ultra-fluid micro-interactions.
          </p>

          <!-- Nested CTA Architecture & Social Links -->
          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <!-- Primary Button-in-Button CTA -->
            <a href="#contact" class="cta-button-nested w-full sm:w-auto justify-center">
              <span>Start A Project</span>
              <div class="cta-button-icon">
                <i class="fas fa-arrow-right text-xs"></i>
              </div>
            </a>

            <!-- Secondary CTA Pill -->
            <a href="#portofolio" class="cta-button-secondary w-full sm:w-auto justify-center">
              <span>View Selected Work</span>
              <i class="fas fa-arrow-up-right-from-square text-xs text-slate-500 dark:text-gray-400 group-hover:text-slate-900 dark:group-hover:text-white"></i>
            </a>
          </div>

          <!-- Social Links Pill Row -->
          <div class="flex items-center gap-3 justify-center lg:justify-start">
            <a href="https://github.com/atkooo" target="_blank" class="social-pill" aria-label="GitHub">
              <i class="fab fa-github text-base"></i>
            </a>
            <a href="https://linkedin.com/in/oktamaulana" target="_blank" class="social-pill" aria-label="LinkedIn">
              <i class="fab fa-linkedin-in text-base"></i>
            </a>
            <a href="https://instagram.com/_okta_maulana" target="_blank" class="social-pill" aria-label="Instagram">
              <i class="fab fa-instagram text-base"></i>
            </a>
          </div>
        </div>

        <!-- Double-Bezel Hero Visual Node -->
        <div class="flex-1 relative flex justify-center lg:justify-end" data-aos="fade-left">
          <div class="double-bezel-outer w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] relative">
            <div class="double-bezel-inner flex flex-col items-center justify-center relative overflow-hidden group">
              
              <!-- Subtle Background Code Watermark -->
              <div class="absolute inset-0 font-mono text-[10px] text-slate-900/[0.04] dark:text-white/[0.04] select-none pointer-events-none p-4 leading-normal overflow-hidden">
                const architect = { name: "Okta Maulana", role: "Software Engineer", stack: ["Vue 3", "Vite", "Tailwind"] };
              </div>

              <div class="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-[#00ADB5]/10 border border-[#00ADB5]/30 shadow-xl flex items-center justify-center animate-subtle-float">
                <div class="w-full h-full rounded-full bg-white dark:bg-[#08090D] flex items-center justify-center border border-slate-100 dark:border-white/10">
                  <i class="fas fa-terminal text-5xl sm:text-6xl text-[#00ADB5]"></i>
                </div>
              </div>

              <!-- Floating Tech Nodes -->
              <div class="absolute top-6 left-6 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 backdrop-blur-md font-mono text-xs text-slate-700 dark:text-gray-300 shadow-md">
                Vue 3
              </div>
              <div class="absolute bottom-8 right-6 px-3 py-1.5 rounded-full bg-white dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 backdrop-blur-md font-mono text-xs text-[#00ADB5] shadow-md">
                TypeScript
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
const roles = ["Full Stack Engineer", "Vue 3 Specialist", "UI/UX Architect"];
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
