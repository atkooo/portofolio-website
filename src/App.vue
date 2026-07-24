<template>
  <div class="min-h-screen bg-primary-white dark:bg-primary-black text-primary-black dark:text-primary-white transition-colors duration-300">
    <WelcomeModal />
    <Navbar />
    <main class="main-content">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <DisqusComments />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import WelcomeModal from "./components/WelcomeModal.vue";
import Navbar from "./components/Navbar.vue";
import HeroSection from "./components/HeroSection.vue";
import AboutSection from "./components/AboutSection.vue";
import ExperienceSection from "./components/ExperienceSection.vue";
import SkillsSection from "./components/SkillsSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactSection from "./components/ContactSection.vue";
import DisqusComments from "./components/DisqusComments.vue";
import FooterSection from "./components/FooterSection.vue";
import { useTheme } from "./composables/useTheme.js";
import { useVisitor } from "./composables/useVisitor.js";

const { initTheme } = useTheme();
const { initVisitor } = useVisitor();

onMounted(() => {
  initTheme();
  initVisitor();

  if (window.AOS) {
    window.AOS.init({ duration: 800, offset: 100, once: true });
  }
});
</script>
