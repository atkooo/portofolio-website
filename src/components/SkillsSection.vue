<template>
  <section id="skills" class="py-24 lg:py-32 bg-slate-100/80 dark:bg-[#0C0E14]/60 border-y border-slate-200/80 dark:border-white/5 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-layer-group text-xs"></i> TECHNICAL DOMAINS
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Tech Stack &amp; <span class="text-[#00ADB5]">Certifications.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Proven competencies across web engineering, mobile development, database optimization, and Cisco IT infrastructure.
        </p>
      </div>

      <!-- Domain Capabilities Grid (Double-Bezel) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16" data-aos="fade-up">
        <div v-for="domain in domains" :key="domain.title" class="double-bezel-outer group">
          <div class="double-bezel-inner p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-4">
                <div class="w-9 h-9 rounded-xl bg-[#00ADB5]/15 border border-[#00ADB5]/30 text-[#00ADB5] flex items-center justify-center text-sm">
                  <i :class="domain.icon"></i>
                </div>
                <h3 class="text-lg font-bold text-slate-900 dark:text-white group-hover:text-[#00ADB5] transition-colors">
                  {{ domain.title }}
                </h3>
              </div>
              <p class="text-xs sm:text-sm text-slate-600 dark:text-gray-400 leading-relaxed mb-6">
                {{ domain.desc }}
              </p>
            </div>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-white/10">
              <span v-for="tech in domain.stack" :key="tech" class="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300">
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications Badge Section -->
      <div class="text-center mb-6">
        <h3 class="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-gray-400">
          Official Industry Certifications (Dicoding &amp; Ngulik Data)
        </h3>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto" data-aos="fade-up">
        <span v-for="cert in certs" :key="cert.name" class="badge-pill">
          <i class="fas fa-certificate text-[#00ADB5]"></i>
          <span>{{ cert.name }}</span>
          <span class="font-mono text-[10px] opacity-75 text-slate-500 dark:text-gray-400">({{ cert.issuer }})</span>
        </span>
      </div>

    </div>
  </section>
</template>

<script setup>
const domains = [
  {
    title: "Fullstack Web Engineering",
    desc: "Building modern responsive interfaces and backend business logic for enterprise portals & SaaS systems.",
    stack: ["Vue 3", "PHP", "JavaScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    icon: "fas fa-code",
  },
  {
    title: "Mobile & AI Integration",
    desc: "Developing cross-platform mobile apps integrated with computer vision AI and RESTful APIs.",
    stack: ["Flutter", "Dart", "TensorFlow API", "REST Integration"],
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Database Architecture",
    desc: "Designing relational database schemas, complex JOINs, CTE queries, and high-speed data processing.",
    stack: ["MySQL", "Relational SQL", "Subqueries & CTE", "Schema Design"],
    icon: "fas fa-database",
  },
  {
    title: "IT Infrastructure & Security",
    desc: "Proactive threat monitoring, LAN/WAN management, helpdesk operations, and performance dashboards.",
    stack: ["Cisco AMP", "Cisco Umbrella", "Cisco Routers/Switches", "Grafana Monitoring"],
    icon: "fas fa-network-wired",
  },
];

const certs = [
  { name: "Front-End Web Pemula", issuer: "Dicoding" },
  { name: "Pemrograman JavaScript", issuer: "Dicoding" },
  { name: "Dasar Pemrograman Web", issuer: "Dicoding" },
  { name: "Mahir Subquery & CTE", issuer: "Ngulik Data" },
  { name: "Mahir JOIN SQL", issuer: "Ngulik Data" },
  { name: "SQL 101: Belajar SQL", issuer: "Ngulik Data" },
];
</script>
