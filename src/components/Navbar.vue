<template>
  <header class="fixed top-0 inset-x-0 z-50 py-4 px-4 sm:px-8 bg-slate-50/80 dark:bg-[#0B0C10]/80 backdrop-blur-md border-b border-slate-200/60 dark:border-white/5 transition-all">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      
      <!-- Brand Logo / Name (Clean Text Logo) -->
      <a href="#home" class="flex items-center gap-2 font-bold text-base sm:text-lg tracking-tight text-slate-900 dark:text-white hover:text-[#00ADB5] transition-colors">
        <span class="w-2 h-2 rounded-full bg-[#00ADB5] animate-pulse"></span>
        <span>Okta Maulana</span>
      </a>

      <!-- Desktop Minimal Nav Links -->
      <nav class="hidden md:flex items-center gap-6 text-xs sm:text-sm font-semibold">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="transition-colors duration-200 relative py-1"
          :class="
            activeSection === item.href.substring(1)
              ? 'text-[#00ADB5] font-bold'
              : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
          "
        >
          {{ item.name }}
          <span 
            v-if="activeSection === item.href.substring(1)"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#00ADB5]"
          ></span>
        </a>
      </nav>

      <!-- Right Action Items (Theme Toggle & Contact CTA) -->
      <div class="flex items-center gap-3">
        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          aria-label="Toggle Theme"
          class="p-2 rounded-full text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          <i :class="isDark ? 'fas fa-sun text-sm text-amber-400' : 'fas fa-moon text-sm'"></i>
        </button>

        <!-- CTA Button (Matching Reference "Hire Me" style) -->
        <a 
          href="#contact" 
          class="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#00ADB5] text-white text-xs font-bold hover:bg-[#00ADB5]/90 transition-all shadow-sm"
        >
          <span>Contact Me</span>
          <i class="fas fa-arrow-right text-[10px]"></i>
        </a>

        <!-- Mobile Menu Toggle -->
        <button
          @click="isMobileOpen = !isMobileOpen"
          aria-label="Toggle Mobile Navigation"
          class="md:hidden p-2 text-slate-700 dark:text-gray-300"
        >
          <i :class="isMobileOpen ? 'fas fa-times text-base' : 'fas fa-bars text-base'"></i>
        </button>
      </div>

    </div>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="isMobileOpen"
        class="mt-3 p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#12141C]/95 backdrop-blur-xl shadow-xl md:hidden"
      >
        <div class="flex flex-col gap-3">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="isMobileOpen = false"
            class="px-3 py-2 rounded-lg text-sm font-semibold transition-colors"
            :class="
              activeSection === item.href.substring(1)
                ? 'text-[#00ADB5] font-bold bg-[#00ADB5]/10'
                : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
            "
          >
            {{ item.name }}
          </a>
          <a 
            href="#contact" 
            @click="isMobileOpen = false"
            class="mt-2 text-center py-2.5 rounded-full bg-[#00ADB5] text-white text-xs font-bold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme } = useTheme();
const isMobileOpen = ref(false);
const activeSection = ref("home");

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#portofolio" },
  { name: "Contact", href: "#contact" },
];

const handleScroll = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPos = window.scrollY + 120;
  sections.forEach((sec) => {
    if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
      activeSection.value = sec.id;
    }
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
