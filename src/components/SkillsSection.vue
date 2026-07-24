<template>
  <section id="skills" class="py-20 bg-gray-50/50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Technical <span class="text-primary">Skills</span></h2>
        <p class="text-gray-600 dark:text-gray-400">
          Technologies and tools I work with daily to bring ideas to life.
        </p>
      </div>

      <!-- Skill Progress Bars -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16" data-aos="fade-up">
        <div v-for="skill in skills" :key="skill.name" class="skill-progress card-base p-6">
          <div class="flex justify-between items-center mb-2">
            <span class="font-semibold text-gray-800 dark:text-gray-200">{{ skill.name }}</span>
            <span class="text-sm font-medium text-primary">{{ animatedPercentages[skill.name] || 0 }}%</span>
          </div>
          <div class="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              class="h-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-1000 ease-out"
              :style="{ width: (animatedPercentages[skill.name] || 0) + '%' }"
            ></div>
          </div>
        </div>
      </div>

      <!-- Floating Tech Badges -->
      <div class="flex flex-wrap items-center justify-center gap-4 max-w-4xl mx-auto" data-aos="fade-up">
        <span
          v-for="(badge, index) in badges"
          :key="badge.name"
          class="tech-badge"
          :class="badge.class"
          :style="{ animationDelay: `${index * 0.15}s` }"
        >
          <i :class="badge.icon"></i>
          {{ badge.name }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const skills = [
  { name: "Vue.js & Nuxt", level: 90 },
  { name: "JavaScript / TypeScript", level: 92 },
  { name: "HTML5 & Tailwind CSS", level: 95 },
  { name: "Node.js & Express", level: 85 },
  { name: "REST APIs & GraphQL", level: 88 },
  { name: "Git & CI/CD", level: 86 },
];

const badges = [
  { name: "Vue 3", class: "tech-badge-flutter", icon: "fab fa-vuejs" },
  { name: "TypeScript", class: "tech-badge-ts", icon: "fas fa-code" },
  { name: "Node.js", class: "tech-badge-node", icon: "fab fa-node-js" },
  { name: "Tailwind CSS", class: "tech-badge-react", icon: "fab fa-css3-alt" },
  { name: "Python", class: "tech-badge-python", icon: "fab fa-python" },
  { name: "Firebase", class: "tech-badge-firebase", icon: "fas fa-fire" },
];

const animatedPercentages = ref({});

onMounted(() => {
  skills.forEach((skill) => {
    animatedPercentages.value[skill.name] = 0;
    let current = 0;
    const interval = setInterval(() => {
      if (current < skill.level) {
        current += 2;
        animatedPercentages.value[skill.name] = Math.min(current, skill.level);
      } else {
        clearInterval(interval);
      }
    }, 20);
  });
});
</script>
