<template>
  <nav class="nav">
    <div class="container mx-auto px-4 flex items-center justify-between h-full">
      <a href="#" class="relative z-30 hover:opacity-80 transition-opacity duration-300">
        <img
          id="nav-logo"
          :src="isDark ? ICONS?.logo?.dark : ICONS?.logo?.light"
          alt="Logo"
          class="h-10 w-auto"
        />
      </a>

      <div class="flex items-center flex-row-reverse md:flex-row gap-3 md:gap-12">
        <ul
          id="menu"
          class="nav-menus"
          :class="isMobileOpen ? 'translate-y-0' : 'translate-y-[-150vh] md:translate-y-0'"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            @click="closeMobileMenu"
            class="nav-link group"
            :class="{ 'nav-link-active': activeSection === item.href.substring(1) }"
          >
            {{ item.name }}
            <span
              class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-primary"
            ></span>
          </a>
        </ul>

        <!-- Theme Toggle Switch -->
        <button
          id="toggle-theme"
          @click="toggleTheme"
          aria-label="Toggle Theme"
          class="relative z-30 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <div class="w-6 h-6 flex items-center justify-center text-gray-800 dark:text-yellow-400">
            <i :class="isDark ? 'fas fa-sun text-lg' : 'fas fa-moon text-lg'"></i>
          </div>
        </button>

        <!-- Mobile Menu Toggle Button -->
        <button
          id="toggle-menu"
          @click="toggleMobileMenu"
          aria-label="Toggle Mobile Menu"
          class="md:hidden relative z-30 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white"
        >
          <i :class="isMobileOpen ? 'fas fa-times text-xl' : 'fas fa-bars text-xl'"></i>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useTheme } from "../composables/useTheme.js";

const { isDark, toggleTheme, ICONS } = useTheme();

const isMobileOpen = ref(false);
const activeSection = ref("home");

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portofolio" },
  { name: "Contact", href: "#contact" },
];

const toggleMobileMenu = () => {
  isMobileOpen.value = !isMobileOpen.value;
};

const closeMobileMenu = () => {
  if (window.innerWidth < 768) {
    isMobileOpen.value = false;
  }
};

const handleScroll = () => {
  const sections = document.querySelectorAll("section[id]");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      activeSection.value = section.id;
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
