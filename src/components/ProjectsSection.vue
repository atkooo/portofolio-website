<template>
  <section id="portofolio" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-12 lg:mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-briefcase text-xs"></i> FEATURED WORK
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Featured <span class="text-[#00ADB5]">Engineering Systems.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Curated selection of enterprise web platforms, mobile solutions, and award-winning software architectures.
        </p>
      </div>

      <!-- Asymmetrical Bento Project Grid -->
      <div id="portfolio-grid" class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <div
          v-for="(project, index) in projects"
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
                  <i class="fab fa-github"></i> Repository
                </a>
                <a :href="project.demo" target="_blank" class="cta-button-nested py-2 px-4 text-xs" aria-label="Live Demo">
                  <span>System Architecture</span>
                  <div class="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center">
                    <i class="fas fa-arrow-up-right-from-square text-[10px]"></i>
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
const projects = [
  {
    id: 1,
    title: "Anzon Learning System (ALS)",
    description: "Enterprise e-learning portal engineered for PT Anzon Autoplaza to digitize employee onboarding, sales training, and technician certification progress.",
    tags: ["Enterprise Web", "Vue.js", "PHP", "MySQL Architecture"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=Anzon+Learning+System+(ALS)",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 2,
    title: "Lintara Digital ERP & POS Suite",
    description: "Scalable Enterprise Resource Planning & Point of Sales platform designed to streamline daily SME inventory and transaction processing.",
    tags: ["ERP/POS System", "Fullstack", "SQL Engine", "REST API"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=Lintara+Digital+ERP+%26+POS",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 3,
    title: "SIMOGA - Computer Vision Balita Health App",
    description: "Mobile nutrition monitoring app powered by TensorFlow food recognition API and Flutter, built for toddler health tracking.",
    tags: ["Flutter", "TensorFlow AI", "Mobile App", "Dart"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=SIMOGA+TensorFlow+AI",
    github: "https://github.com/atkooo",
    demo: "#",
  },
  {
    id: 4,
    title: "E-Government Suite (KMIPN VI National Champion)",
    description: "Award-winning e-government application winning 1st Place National Champion at KMIPN VI Jakarta against 15+ top tech teams.",
    tags: ["Flutter", "E-Government", "National Champion", "REST API"],
    image: "https://placehold.co/800x450/0F172A/00ADB5?text=1st+Place+KMIPN+VI+E-Gov",
    github: "https://github.com/atkooo",
    demo: "#",
  },
];

const handleImgError = (e) => {
  e.target.src = "https://placehold.co/800x450/0F172A/00ADB5?text=Okta+Maulana+System";
};
</script>
