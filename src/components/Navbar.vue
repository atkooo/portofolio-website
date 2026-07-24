<template>
  <header class="nav-container">
    <nav class="glass-island flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-full bg-[#00ADB5] p-0.5 shadow-md group-hover:scale-105 transition-transform">
          <div class="w-full h-full rounded-full bg-slate-900 dark:bg-[#08090D] flex items-center justify-center">
            <span class="font-mono text-xs font-bold text-[#00ADB5]">OM</span>
          </div>
        </div>
        <span class="font-semibold text-sm tracking-tight text-slate-900 dark:text-white group-hover:text-[#00ADB5] transition-colors">
          Okta Maulana
        </span>
      </a>

      <!-- Desktop Nav Items -->
      <div class="hidden md:flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/[0.04] p-1 border border-slate-200/80 dark:border-white/10">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300"
          :class="
            activeSection === item.href.substring(1)
              ? 'bg-[#00ADB5] text-white shadow-md'
              : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/5'
          "
        >
          {{ item.name }}
        </a>
      </div>

      <!-- Actions (Theme Toggle & Mobile Drawer Toggle) -->
      <div class="flex items-center gap-2">
        <button
          @click="toggleTheme"
          aria-label="Toggle Theme"
          class="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
        >
          <i :class="isDark ? 'fas fa-sun text-xs text-amber-400' : 'fas fa-moon text-xs text-slate-700'"></i>
        </button>

        <button
          @click="isMobileOpen = !isMobileOpen"
          aria-label="Toggle Mobile Navigation"
          class="md:hidden w-9 h-9 rounded-full bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-700 dark:text-gray-300"
        >
          <i :class="isMobileOpen ? 'fas fa-times text-xs' : 'fas fa-bars text-xs'"></i>
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileOpen"
        class="fixed inset-x-4 top-20 z-40 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0C0E14]/95 p-6 backdrop-blur-2xl shadow-2xl md:hidden pointer-events-auto"
      >
        <div class="flex flex-col gap-2">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="isMobileOpen = false"
            class="px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
            :class="
              activeSection === item.href.substring(1)
                ? 'bg-[#00ADB5]/15 text-[#00ADB5] border border-[#00ADB5]/30'
                : 'text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-white/5'
            "
          >
            {{ item.name }}
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
