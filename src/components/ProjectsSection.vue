<template>
  <section id="portofolio" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured <span class="text-primary">Portfolio</span></h2>
        <p class="text-gray-600 dark:text-gray-400">
          A showcase of my recent projects and applications.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap items-center justify-center gap-3 mb-12" data-aos="fade-up">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="activeCategory = cat.value"
          class="filter-btn"
          :class="{ active: activeCategory === cat.value }"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Portfolio Grid -->
      <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-card group"
          data-aos="fade-up"
        >
          <div class="relative overflow-hidden aspect-video bg-gray-100 dark:bg-gray-700">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              @error="handleImgError"
            />
            <div class="overlay">
              <a :href="project.github" target="_blank" class="project-btn">
                <i class="fab fa-github"></i> Code
              </a>
              <a :href="project.demo" target="_blank" class="project-btn">
                <i class="fas fa-external-link-alt"></i> Demo
              </a>
            </div>
          </div>
          <div class="p-6">
            <div class="flex flex-wrap gap-2 mb-3">
              <span v-for="tag in project.tags" :key="tag" class="tech-tag">
                {{ tag }}
              </span>
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ project.title }}</h3>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ project.description }}
            </p>
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
  e.target.src = "https://placehold.co/600x400/00ADB5/FFFFFF?text=Project+Preview";
};
</script>
