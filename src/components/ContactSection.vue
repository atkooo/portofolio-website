<template>
  <section id="contact" class="py-14 lg:py-20 bg-slate-100/50 dark:bg-transparent border-t border-slate-200/80 dark:border-white/5 relative">
    <div class="max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Let's Work Together 🤝
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
          Feel free to reach out for work opportunities, inquiries, or collaboration.
        </p>

        <!-- Social Action Buttons Row -->
        <div class="flex flex-wrap items-center justify-center gap-3 mt-6">
          <a href="mailto:oktamaulana@gmail.com" class="cta-button-nested py-2.5 px-5 text-xs sm:text-sm font-semibold">
            <i class="fas fa-envelope"></i>
            <span>Email Me</span>
          </a>
          <a href="https://linkedin.com/in/oktamaulana" target="_blank" class="cta-button-secondary py-2.5 px-5 text-xs sm:text-sm font-semibold">
            <i class="fab fa-linkedin-in"></i>
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/atkooo" target="_blank" class="cta-button-secondary py-2.5 px-5 text-xs sm:text-sm font-semibold">
            <i class="fab fa-github"></i>
            <span>GitHub</span>
          </a>
        </div>
      </div>

      <!-- Contact Info Cards & Direct Form -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        <!-- Contact Info Cards -->
        <div class="lg:col-span-4 space-y-4" data-aos="fade-right">
          <div 
            v-for="info in contactInfos" 
            :key="info.title" 
            class="rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-5 flex items-center gap-4 hover:border-[#00ADB5]/50 transition-all duration-300 shadow-sm"
          >
            <div class="w-10 h-10 rounded-xl bg-[#00ADB5]/15 text-[#00ADB5] flex items-center justify-center text-sm flex-shrink-0 font-semibold">
              <i :class="info.icon"></i>
            </div>
            <div>
              <h4 class="font-mono text-[10px] font-bold text-slate-400 dark:text-gray-500 uppercase tracking-widest mb-0.5">{{ info.title }}</h4>
              <p class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form Container -->
        <div class="lg:col-span-8 rounded-2xl bg-white dark:bg-[#12141C] border border-slate-200 dark:border-white/10 p-6 sm:p-8 shadow-sm" data-aos="fade-left">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Your Name"
                  class="input-bezel"
                />
              </div>
              <div>
                <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Email Address</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="email@domain.com"
                  class="input-bezel"
                />
              </div>
            </div>
            <div>
              <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Message / Inquiries</label>
              <textarea
                v-model="form.message"
                required
                rows="4"
                placeholder="Write your job offer, project inquiry, or message..."
                class="input-bezel resize-none"
              ></textarea>
            </div>
            
            <button type="submit" class="cta-button-nested w-full justify-center py-3 text-sm font-semibold">
              <span>Send Message</span>
              <div class="cta-button-icon w-6 h-6">
                <i class="fas fa-paper-plane text-xs"></i>
              </div>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const contactInfos = [
  { title: "Phone / WhatsApp", value: "+62 815-2271-6223", icon: "fas fa-phone-alt" },
  { title: "Location", value: "Pontianak 78113, Indonesia", icon: "fas fa-map-marker-alt" },
  { title: "Company Web", value: "lintaradigital.com", icon: "fas fa-globe" },
  { title: "Portfolio Web", value: "okta-maulana.vercel.app", icon: "fas fa-laptop-code" },
];

const handleSubmit = () => {
  alert(`Thank you, ${form.value.name}! Your message has been sent successfully.`);
  form.value = { name: "", email: "", message: "" };
};
</script>
