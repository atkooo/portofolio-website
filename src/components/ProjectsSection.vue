<template>
  <section id="portofolio" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-briefcase text-xs"></i> SELECTED WORK
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Featured <span class="text-[#00ADB5]">Engineering.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Production applications, dashboards, and digital experiences crafted with technical precision.
        </p>
      </div>

      <!-- Filter Controls (Pill Architecture) -->
      <div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" data-aos="fade-up">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="activeCategory = cat.value"
          class="filter-pill"
          :class="{ active: activeCategory === cat.value }"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Asymmetrical Bento Project Grid -->
      <div id="portfolio-grid" class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div
          v-for="(project, index) in filteredProjects"
          :key="project.id"
          class="double-bezel-outer group"
          :class="index % 3 === 0 ? 'lg:col-span-8' : 'lg:col-span-4'"
          data-aos="fade-up"
        >
          <div class="double-bezel-inner flex flex-col justify-between p-0 overflow-hidden">
            
            <!-- Project Image Container with Overlay -->
            <div class="relative overflow-hidden aspect-[16/9] bg-slate-900 border-b border-slate-200 dark:border-white/5">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                @error="handleImgError"
              />
              <div class="overlay">
                <a :href="project.github" target="_blank" class="cta-button-secondary py-2 px-4 text-xs" aria-label="GitHub">
                  <i class="fab fa-github"></i> Code
                </a>
                <a :href="project.demo" target="_blank" class="cta-button-nested py-2 px-4 text-xs" aria-label="Live Demo">
                  <span>Demo</span>
                  <div class="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
                    <i class="fas fa-[#00ADB5] text-[10px]"></i>
                  </div>
                </a>
              </div>
            </div>

            <!-- Project Details -->
            <div class="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span v-for="tag in project.tags" :key="tag" class="tech-tag font-mono">
                    {{ tag }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#00ADB5] transition-colors">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                  {{ project.description }}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";

const activeCategory = ref("all");

const categories = [
  { label: "All Projects", value: "all" },
  { label: "Web App", value: "web" },
  { label: "Mobile App", value: "mobile" },
  { label: "UI/UX", value: "uiux" },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    category: "web",
    description: "Modern analytics dashboard for online merchants with real-time charts and order management.",
    tags: ["Vue 3", "Tailwind", "Chart.js"],
    image: "/images/project1.jpg",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 2,
    title: "Smart Task Management",
    category: "web",
    description: "Collaborative task tracking web app featuring drag-and-drop kanban boards.",
    tags: ["TypeScript", "Vue 3", "Node.js"],
    image: "/images/project2.jpg",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 3,
    title: "Fitness Companion App",
    category: "mobile",
    description: "Mobile workout planner and nutrition tracking application.",
    tags: ["Flutter", "Firebase"],
    image: "/images/project3.jpg",
    github: "https://github.com/atkooo",
    demo: "#",
  },
];

const filteredProjects = computed(() => {
  if (activeCategory.value === "all") return projects;
  return projects.filter((p) => p.category === activeCategory.value);
});

const handleImgError = (e) => {
  e.target.src = "https://placehold.co/800x450/0F172A/00ADB5?text=Project+Architecture";
};
</script>
