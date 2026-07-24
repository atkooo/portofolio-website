<template>
  <section id="experience" class="py-20">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Work <span class="text-primary">Experience</span></h2>
        <p class="text-gray-600 dark:text-gray-400">
          My professional journey and career milestones.
        </p>
      </div>

      <div class="max-w-4xl mx-auto experience-timeline">
        <div class="timeline-connector"></div>

        <div
          v-for="(exp, index) in experiences"
          :key="index"
          class="experience-item flex items-start group mb-12"
          data-aos="fade-up"
        >
          <div class="relative z-10 flex-shrink-0">
            <div class="timeline-dot" :class="{ 'timeline-dot-active': exp.current }"></div>
          </div>
          <div class="experience-content">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ exp.title }}</h3>
              <span class="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary">
                {{ exp.period }}
              </span>
            </div>
            <h4 class="text-sm font-medium text-primary mb-3">{{ exp.company }}</h4>
            <p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              {{ exp.description }}
            </p>
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
