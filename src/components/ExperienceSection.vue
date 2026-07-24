<template>
  <section id="experience" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-history text-xs"></i> CAREER PATH
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Professional <span class="text-[#00ADB5]">Experience.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          My engineering journey, roles, and software development milestones.
        </p>
      </div>

      <div class="max-w-3xl mx-auto relative">
        <!-- Connecting Solid Line -->
        <div class="absolute left-4 sm:left-6 top-3 h-[calc(100%-24px)] w-0.5 bg-[#00ADB5]/30"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="relative pl-12 sm:pl-16 mb-8 last:mb-0 group"
          data-aos="fade-up"
        >
          <!-- Timeline Node Dot -->
          <div class="absolute left-2.5 sm:left-4 top-7 -translate-x-1/2 w-4 h-4 rounded-full bg-[#00ADB5] ring-4 ring-slate-100 dark:ring-[#08090D] shadow-[0_0_10px_#00ADB5] group-hover:scale-125 transition-transform"></div>

          <!-- Double-Bezel Milestone Card -->
          <div class="double-bezel-outer">
            <div class="double-bezel-inner">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#00ADB5] transition-colors">
                  {{ exp.title }}
                </h3>
                <span class="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#00ADB5]/15 border border-[#00ADB5]/30 text-[#00ADB5] w-fit">
                  {{ exp.period }}
                </span>
              </div>
              <h4 class="text-sm font-semibold text-[#00ADB5] mb-3 flex items-center gap-2 font-mono">
                <i class="fas fa-building text-xs"></i> {{ exp.company }}
              </h4>
              <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed">
                {{ exp.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    title: "Full Stack Engineer",
    company: "Tech Solutions Inc.",
    period: "2024 - Present",
    description: "Developing scalable Vue.js and Node.js microservices, managing cloud infrastructure, and leading frontend architecture improvements.",
    current: true,
  },
  {
    title: "Frontend Web Developer",
    company: "Digital Innovation Agency",
    period: "2022 - 2024",
    description: "Built responsive single page applications, implemented custom CSS design systems with Tailwind CSS, and optimized core web vitals.",
    current: false,
  },
  {
    title: "Junior Web Developer",
    company: "Creative Studio",
    period: "2021 - 2022",
    description: "Collaborated with designers to deliver interactive client websites, integrating REST APIs and ensuring cross-browser compatibility.",
    current: false,
  },
];
</script>
