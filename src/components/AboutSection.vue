<template>
  <section id="about" class="py-24 lg:py-32 relative overflow-hidden bg-slate-100/50 dark:bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-user-astronaut text-xs"></i> ABOUT ME
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Architecting Clean <span class="text-[#00ADB5]">Systems.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Combining creative design engineering with scalable full-stack web architectures.
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
                <span class="font-mono text-xs text-slate-500 dark:text-gray-400 uppercase tracking-widest">Biography</span>
              </div>
              
              <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Software Engineer with an obsession for micro-details.
              </h3>
              
              <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
                I'm Okta Maulana, a Software Engineer dedicated to crafting ultra-responsive web applications. My work balances elegant frontend interactions with robust backend API services.
              </p>
            </div>

            <!-- Meta Information Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200 dark:border-white/10 font-mono text-xs">
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">LOCATION</span>
                <span class="text-slate-900 dark:text-white font-semibold">Indonesia</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">ROLE</span>
                <span class="text-slate-900 dark:text-white font-semibold">Full Stack</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">AVAILABILITY</span>
                <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Open to Work</span>
              </div>
              <div>
                <span class="block text-slate-500 dark:text-gray-500 mb-1">FOCUS</span>
                <span class="text-[#00ADB5] font-semibold">Vue 3 / Node</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Metric Bento Cards (Col-Span-5) -->
        <div class="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6" data-aos="fade-left">
          <div v-for="stat in stats" :key="stat.label" class="double-bezel-outer group">
            <div class="double-bezel-inner flex flex-col justify-center items-center text-center p-6 group-hover:border-[#00ADB5]/40">
              <div class="text-3xl sm:text-4xl font-extrabold text-[#00ADB5] mb-2 font-mono group-hover:scale-110 transition-transform">
                {{ stat.value }}
              </div>
              <div class="text-xs font-semibold text-slate-600 dark:text-gray-400 uppercase tracking-wider">
                {{ stat.label }}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "3+", label: "Years Exp" },
  { value: "15+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "99%", label: "Satisfaction" },
];
</script>
