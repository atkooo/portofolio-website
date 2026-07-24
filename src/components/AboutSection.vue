<template>
  <section id="about" class="py-20 lg:py-28 relative overflow-hidden bg-slate-100/50 dark:bg-transparent">
    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Know <span class="text-[#00ADB5]">About Me</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Fullstack web development and IT systems management.
        </p>
      </div>

      <!-- 2-Column About Layout -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        <!-- Left Column: Profile Photo Card -->
        <div class="lg:col-span-5 flex justify-center" data-aos="fade-right">
          <div class="w-full max-w-[340px] sm:max-w-[380px] rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-3 shadow-md hover:border-[#00ADB5]/50 transition-all duration-300">
            <div class="aspect-[4/5] overflow-hidden rounded-xl bg-slate-900">
              <img 
                src="/images/profile.png" 
                alt="Okta Maulana" 
                class="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <!-- Right Column: Bio Content (Humble Tone) -->
        <div class="lg:col-span-7" data-aos="fade-left">
          <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">
            Building web software &amp; managing IT infrastructure.
          </h3>
          
          <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-4">
            I am a Fullstack Engineer &amp; IT Specialist based in Pontianak, Indonesia. My work includes developing web applications, ERP/POS business systems, internal learning portals, and handling network infrastructure.
          </p>

          <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            1st Place Winner at <strong class="text-[#00ADB5] font-semibold">KMIPN VI (E-Government Category)</strong> for building public digital service solutions.
          </p>

          <!-- Key Meta Highlights Grid -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-200 dark:border-white/10 mb-6 font-mono text-xs">
            <div>
              <span class="block text-slate-400 dark:text-gray-500 mb-1">LOCATION</span>
              <span class="text-slate-900 dark:text-white font-semibold">Pontianak, ID</span>
            </div>
            <div>
              <span class="block text-slate-400 dark:text-gray-500 mb-1">WORKPLACE</span>
              <span class="text-slate-900 dark:text-white font-semibold">Lintara &amp; Anzon</span>
            </div>
            <div>
              <span class="block text-slate-400 dark:text-gray-500 mb-1">EDUCATION</span>
              <span class="text-[#00ADB5] font-semibold">D3 Informatics</span>
            </div>
            <div>
              <span class="block text-slate-400 dark:text-gray-500 mb-1">STATUS</span>
              <span class="text-emerald-500 font-semibold">Open for Tech</span>
            </div>
          </div>

          <a href="#contact" class="cta-button-nested py-2.5 px-5 text-xs sm:text-sm font-semibold">
            <span>Get In Touch</span>
            <div class="cta-button-icon w-5 h-5">
              <i class="fas fa-arrow-right text-[10px]"></i>
            </div>
          </a>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
// Humble AboutSection
</script>
