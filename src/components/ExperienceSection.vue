<template>
  <section id="experience" class="py-14 lg:py-20 relative bg-slate-100/50 dark:bg-transparent">
    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Work <span class="text-[#00ADB5]">Experience</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          My professional background and work history in software development and IT.
        </p>
      </div>

      <!-- Clean Work Experience List -->
      <div class="space-y-6 max-w-4xl mx-auto">
        <div
          v-for="exp in experiences"
          :key="exp.company"
          class="rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-6 sm:p-8 hover:border-[#00ADB5]/50 transition-all duration-300 shadow-sm"
          data-aos="fade-up"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 border-b border-slate-100 dark:border-white/5 pb-4">
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                {{ exp.role }}
              </h3>
              <div class="text-sm font-semibold text-[#00ADB5]">
                {{ exp.company }}
              </div>
            </div>
            <div class="font-mono text-xs text-slate-500 dark:text-gray-400 bg-slate-100 dark:bg-white/[0.05] px-3 py-1 rounded-full self-start sm:self-auto">
              {{ exp.period }}
            </div>
          </div>

          <p class="text-xs sm:text-sm text-slate-600 dark:text-gray-300 leading-relaxed mb-4">
            {{ exp.description }}
          </p>

          <!-- Bullet Points -->
          <ul class="space-y-2 mb-5">
            <li 
              v-for="item in exp.highlights" 
              :key="item" 
              class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-gray-400"
            >
              <i class="fas fa-check-circle text-[#00ADB5] mt-1 text-xs shrink-0"></i>
              <span>{{ item }}</span>
            </li>
          </ul>

          <!-- Tech Stack Badges -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tech in exp.tech" 
              :key="tech" 
              class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-700 dark:text-gray-300"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    role: "Fullstack Engineer & IT Specialist",
    company: "Lintara Digital",
    period: "2023 - Present",
    description: "Developing web applications, Point of Sale (POS) modules, and business REST APIs.",
    highlights: [
      "Built and maintained Point of Sale (POS) and ERP web modules.",
      "Optimized SQL queries and backend API performance.",
      "Implemented secure authentication and RESTful API endpoints.",
    ],
    tech: ["Vue 3", "PHP", "Laravel", "MySQL", "REST API"],
  },
  {
    role: "IT Systems & Infrastructure Staff",
    company: "PT Anzon Autoplaza",
    period: "2022 - Present",
    description: "Managing company IT infrastructure, employee learning systems, and network security.",
    highlights: [
      "Developed Anzon Learning System (ALS) for internal employee training.",
      "Configured Cisco AMP and Cisco Umbrella network security suites.",
      "Maintained server connectivity, internal databases, and IT helpdesk support.",
    ],
    tech: ["ALS Web App", "Cisco Security", "Grafana", "SQL Server", "IT Support"],
  },
  {
    role: "1st Place Winner",
    company: "KMIPN VI National Competition",
    period: "2024",
    description: "Developed public digital service mobile application for e-government category.",
    highlights: [
      "Won 1st Place National Winner in E-Government Category.",
      "Built mobile application frontend with Flutter and connected REST backend services.",
    ],
    tech: ["Flutter", "TensorFlow", "Node.js", "KMIPN VI Winner"],
  },
];
</script>
