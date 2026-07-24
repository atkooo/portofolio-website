<template>
  <section id="portofolio" class="py-14 lg:py-20 relative">
    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Selected <span class="text-[#00ADB5]">Projects</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          A collection of web applications, systems, and projects I have worked on.
        </p>
      </div>

      <!-- 2-Column Clean Project Grid -->
      <div id="portfolio-grid" class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <div
          v-for="project in projects"
          :key="project.id"
          class="rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 overflow-hidden group hover:border-[#00ADB5]/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
          data-aos="fade-up"
        >
          <!-- Project Image -->
          <div class="relative overflow-hidden aspect-[16/9] bg-slate-900 border-b border-slate-200 dark:border-white/10">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              @error="handleImgError"
            />
            <div class="overlay">
              <a :href="project.github" target="_blank" class="cta-button-secondary py-2 px-4 text-xs font-semibold" aria-label="GitHub">
                <i class="fab fa-github"></i> Repository
              </a>
              <a :href="project.demo" target="_blank" class="cta-button-nested py-2 px-4 text-xs font-semibold" aria-label="Live Demo">
                <span>View Project</span>
                <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
              </a>
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-6 sm:p-7 flex-1 flex flex-col justify-between">
            <div>
              <!-- Tech Tags Row -->
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 font-mono text-[10px] font-semibold text-slate-700 dark:text-gray-300">
                  {{ tag }}
                </span>
              </div>
              
              <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#00ADB5] transition-colors">
                {{ project.title }}
              </h3>
              
              <p class="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                {{ project.description }}
              </p>
            </div>

            <!-- Action Button -->
            <div>
              <a :href="project.demo" target="_blank" class="inline-flex items-center gap-2 text-xs font-semibold text-[#00ADB5] hover:underline">
                <span>View Details</span>
                <i class="fas fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          </div>

        </div>
      </div>

      <!-- View All Projects Button -->
      <div class="text-center mt-12" data-aos="fade-up">
        <a href="https://github.com/atkooo" target="_blank" class="cta-button-secondary py-3 px-6 text-xs sm:text-sm font-semibold">
          <i class="fab fa-github"></i>
          <span>View All Projects on GitHub</span>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    id: 1,
    title: "Anzon Learning System (ALS)",
    description: "Internal e-learning platform built for PT Anzon Autoplaza to assist employee onboarding, sales training, and technician certifications.",
    tags: ["Web Portal", "Vue.js", "PHP", "MySQL"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=Anzon+Learning+System+(ALS)",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 2,
    title: "Lintara Digital ERP & POS Suite",
    description: "ERP and Point of Sale web application designed to help manage daily business inventory, sales transactions, and reporting.",
    tags: ["ERP & POS", "Fullstack", "SQL Database"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=Lintara+Digital+ERP+%26+POS",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 3,
    title: "SIMOGA - Toddler Health App",
    description: "Mobile application for toddler nutrition tracking featuring computer vision food recognition via TensorFlow and Flutter.",
    tags: ["Flutter", "TensorFlow AI", "Dart"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=SIMOGA+Toddler+Health+App",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 4,
    title: "RIMS - Rental Inventory Management System",
    description: "Web application engineered for inventory tracking, rental booking schedules, item stock availability, and transaction records.",
    tags: ["Inventory System", "Rental App", "Vue.js", "PHP & SQL"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=RIMS+Rental+Inventory+System",
    github: "https://github.com/atkooo",
    demo: "#",
  },
];

const handleImgError = (e) => {
  e.target.src = "https://placehold.co/800x450/0F172A/00ADB5?text=Okta+Maulana+Project";
};
</script>
