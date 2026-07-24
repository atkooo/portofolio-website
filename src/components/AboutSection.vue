<template>
  <section id="about" class="py-24 lg:py-32 relative overflow-hidden bg-slate-100/50 dark:bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-user-astronaut text-xs"></i> CORE PHILOSOPHY
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Core Focus &amp; <span class="text-[#00ADB5]">Capabilities.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Combining deep IT infrastructure knowledge with modern fullstack web engineering.
        </p>
      </div>

      <!-- Asymmetrical Bento Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        
        <!-- Large Doppelrand Bio Card (Col-Span-7) -->
        <div class="lg:col-span-7 double-bezel-outer" data-aos="fade-right">
          <div class="double-bezel-inner flex flex-col justify-between">
            <div>
              <div class="flex items-center gap-3 mb-6">
                <div class="w-3 h-3 rounded-full bg-[#00ADB5]"></div>
                <span class="font-mono text-xs text-slate-500 dark:text-gray-400 uppercase tracking-widest">About Okta Maulana</span>
              </div>
              
              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Architecting resilient systems with high-uptime standards.
              </h3>
              
              <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
                I am a Fullstack Engineer &amp; IT Specialist dedicated to building high-performance web systems, enterprise e-learning portals, and business software architectures. My work bridges client-side user experience with robust backend SQL models and secure network infrastructure.
              </p>
              <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                Recognized as the <strong class="text-[#00ADB5] font-semibold">1st Place National Champion at KMIPN VI (E-Government Category)</strong> for developing innovative digital government solutions.
              </p>
            </div>

            <!-- Meta Information Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">LOCATION</span>
                <span class="text-slate-900 dark:text-white font-semibold">Pontianak, ID</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">COMPANIES</span>
                <span class="text-slate-900 dark:text-white font-semibold">Lintara &amp; Anzon</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">DEGREE</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-semibold">D3 Informatics</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">AVAILABILITY</span>
                <span class="text-[#00ADB5] font-semibold">Open for Tech</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Capability Bento Cards (Col-Span-5) -->
        <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left">
          <div v-for="cap in capabilities" :key="cap.title" class="double-bezel-outer group">
            <div class="double-bezel-inner flex flex-col justify-between p-6 group-hover:border-[#00ADB5]/40">
              <div>
                <div class="w-10 h-10 rounded-xl bg-[#00ADB5]/10 border border-[#00ADB5]/20 text-[#00ADB5] flex items-center justify-center text-base mb-4 group-hover:scale-110 transition-transform">
                  <i :class="cap.icon"></i>
                </div>
                <h4 class="text-base font-bold text-slate-900 dark:text-white mb-2">{{ cap.title }}</h4>
                <p class="text-xs text-slate-600 dark:text-gray-400 leading-relaxed">{{ cap.desc }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const capabilities = [
  {
    title: "Enterprise Systems",
    desc: "Architecting Anzon Learning System (ALS) & Lintara ERP/POS to digitize workflows.",
    icon: "fas fa-building",
  },
  {
    title: "Fullstack Engineering",
    desc: "Building Vue 3, PHP, and Flutter applications backed by optimized SQL models.",
    icon: "fas fa-code-branch",
  },
  {
    title: "Cisco & Security",
    desc: "Proactive threat monitoring using Cisco AMP, Umbrella, and Grafana analytics.",
    icon: "fas fa-shield-alt",
  },
  {
    title: "Awarded Innovation",
    desc: "KMIPN VI 1st Place National Champion for pioneering E-Government solutions.",
    icon: "fas fa-trophy",
  },
];
</script>
