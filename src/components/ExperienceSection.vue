<template>
  <section id="experience" class="py-24 lg:py-32 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-history text-xs"></i> CAREER PATH
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Industry <span class="text-[#00ADB5]">Milestones.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Key roles in software engineering, enterprise IT infrastructure, and system design.
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
                <i class="fas fa-building text-xs"></i> {{ exp.company }} <span class="text-slate-500 font-normal">| {{ exp.location }}</span>
              </h4>
              <p class="text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-4">
                {{ exp.summary }}
              </p>
              <div class="flex flex-wrap gap-2">
                <span v-for="h in exp.highlights" :key="h" class="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/[0.05] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300">
                  {{ h }}
                </span>
              </div>
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
    title: "Fullstack Engineer",
    company: "Lintara Digital",
    location: "Pontianak",
    period: "2026 – Present",
    summary: "Leading software engineering for business applications, crafting ERP and POS platforms to digitize operational workflows for SMEs with optimized SQL query engines.",
    highlights: ["ERP & POS Architecture", "SQL Query Optimization", "REST APIs", "Git Workflow"],
  },
  {
    title: "IT Systems Staff",
    company: "PT. Anzon Autoplaza",
    location: "Pontianak",
    period: "2025 – Present",
    summary: "Architected the Anzon Learning System (ALS) e-learning platform. Managing dealer network IT operations, IAMS vendor helpdesk, ASIIST analytics, and Cisco AMP/Umbrella security.",
    highlights: ["Anzon Learning System (ALS)", "Cisco Security AMP/Umbrella", "IAMS Helpdesk", "ASIIST Dashboard"],
  },
  {
    title: "IT Support Specialist",
    company: "PDAM Tirta Khatulistiwa",
    location: "Pontianak",
    period: "2023 – 2024",
    summary: "Managed Cisco LAN/WAN network infrastructure, deployed Grafana real-time monitoring dashboards, and executed MySQL database backups for customer systems.",
    highlights: ["Cisco Routers & Switches", "Grafana Monitoring", "MySQL Database Maintenance", "Helpdesk Support"],
  },
];
</script>
