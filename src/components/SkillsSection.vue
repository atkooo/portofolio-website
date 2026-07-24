<template>
  <section id="skills" class="py-14 lg:py-20 bg-slate-100/50 dark:bg-transparent border-y border-slate-200/80 dark:border-white/5 relative">
    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Skills &amp; <span class="text-[#00ADB5]">Certifications</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Technologies, tools, and certifications I use in my daily work.
        </p>
      </div>

      <!-- Domain Capabilities Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-14" data-aos="fade-up">
        <div 
          v-for="domain in domains" 
          :key="domain.title" 
          class="rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col justify-between hover:border-[#00ADB5]/50 transition-all duration-300 shadow-sm group"
        >
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-xl bg-[#00ADB5]/15 text-[#00ADB5] flex items-center justify-center text-sm font-bold">
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
          <div class="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-white/5">
            <span v-for="tech in domain.stack" :key="tech" class="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-300">
              {{ tech }}
            </span>
          </div>
        </div>
      </div>

      <!-- Certifications Section -->
      <div class="text-center mb-6">
        <h3 class="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-gray-400">
          Industry Certifications (Dicoding &amp; Ngulik Data)
        </h3>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto" data-aos="fade-up">
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
    title: "Fullstack Web Development",
    desc: "Building web interfaces and backend services for internal portals & business applications.",
    stack: ["Vue 3", "PHP", "JavaScript", "Tailwind CSS", "Vite", "HTML5/CSS3"],
    icon: "fas fa-code",
  },
  {
    title: "Mobile Development",
    desc: "Developing mobile applications using Flutter and connecting REST APIs.",
    stack: ["Flutter", "Dart", "TensorFlow API", "REST Integration"],
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Database Management",
    desc: "Writing relational SQL queries, table schemas, and data JOINs.",
    stack: ["MySQL", "Relational SQL", "Subqueries & CTE", "Schema Design"],
    icon: "fas fa-database",
  },
  {
    title: "IT Support & Cisco Security",
    desc: "Monitoring Cisco security suites, server connectivity, and IT helpdesk support.",
    stack: ["Cisco AMP", "Cisco Umbrella", "Cisco Routers/Switches", "Grafana Monitoring"],
    icon: "fas fa-network-wired",
  },
];

const certs = [
  { name: "Front-End Web for Beginners", issuer: "Dicoding" },
  { name: "JavaScript Programming", issuer: "Dicoding" },
  { name: "Basic Web Programming", issuer: "Dicoding" },
  { name: "Advanced Subqueries & CTE", issuer: "Ngulik Data" },
  { name: "Mastering SQL JOINs", issuer: "Ngulik Data" },
  { name: "SQL 101: Learning SQL", issuer: "Ngulik Data" },
];
</script>
