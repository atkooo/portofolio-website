<template>
  <section id="skills" class="py-24 lg:py-32 bg-slate-100/80 dark:bg-[#0C0E14]/60 border-y border-slate-200/80 dark:border-white/5 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-layer-group text-xs"></i> PROFICIENCY
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Tech Stack & <span class="text-[#00ADB5]">Capabilities.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Tested tools, frameworks, and engineering languages used in production applications.
        </p>
      </div>

      <!-- Skill Progress Grid (Double-Bezel) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <div v-for="skill in skills" :key="skill.name" class="double-bezel-outer">
          <div class="double-bezel-inner p-5 sm:p-6">
            <div class="flex justify-between items-center mb-3">
              <span class="font-semibold text-sm sm:text-base text-slate-800 dark:text-gray-200 flex items-center gap-3">
                <div class="w-7 h-7 rounded-lg bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 flex items-center justify-center text-[#00ADB5]">
                  <i :class="skill.icon"></i>
                </div>
                {{ skill.name }}
              </span>
              <span class="font-mono text-xs font-bold text-[#00ADB5]">{{ animatedPercentages[skill.name] || 0 }}%</span>
            </div>

            <!-- Solid Kinetic Progress Bar -->
            <div class="w-full h-2 bg-slate-200 dark:bg-white/[0.05] rounded-full overflow-hidden p-0.5 border border-slate-300/60 dark:border-white/5">
              <div
                class="h-full bg-[#00ADB5] rounded-full transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] shadow-[0_0_10px_rgba(0,173,181,0.4)]"
                :style="{ width: (animatedPercentages[skill.name] || 0) + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Tech Badge Pills -->
      <div class="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto" data-aos="fade-up">
        <span v-for="badge in badges" :key="badge.name" class="badge-pill">
          <i :class="badge.icon + ' text-[#00ADB5]'"></i>
          <span>{{ badge.name }}</span>
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const skills = [
  { name: "Vue.js & Nuxt 3", level: 92, icon: "fab fa-vuejs" },
  { name: "TypeScript & JavaScript", level: 90, icon: "fas fa-code" },
  { name: "Tailwind CSS & Design Systems", level: 95, icon: "fab fa-css3-alt" },
  { name: "Node.js & Express APIs", level: 86, icon: "fab fa-node-js" },
  { name: "REST & GraphQL Services", level: 88, icon: "fas fa-network-wired" },
  { name: "Git, Vite & CI/CD Pipelines", level: 87, icon: "fab fa-git-alt" },
];

const badges = [
  { name: "Vue 3 Composition API", icon: "fab fa-vuejs" },
  { name: "TypeScript", icon: "fas fa-code" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Tailwind v3/v4", icon: "fab fa-css3-alt" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Firebase", icon: "fas fa-fire" },
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
