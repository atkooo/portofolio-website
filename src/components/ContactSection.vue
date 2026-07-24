<template>
  <section id="contact" class="py-24 lg:py-32 bg-slate-100/80 dark:bg-[#0C0E14]/60 border-t border-slate-200/80 dark:border-white/5 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <div class="eyebrow-pill">
          <i class="fas fa-paper-plane text-xs"></i> INITIATE CONTACT
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
          Mulai <span class="text-[#00ADB5]">Komunikasi.</span>
        </h2>
        <p class="text-slate-600 dark:text-gray-400 text-base leading-relaxed">
          Tertarik berdiskusi seputar operasional IT Staff, Fullstack Development, atau peluang karir? Kirim pesan di bawah.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        
        <!-- Contact Info Cards (Double-Bezel) -->
        <div class="lg:col-span-4 space-y-4" data-aos="fade-right">
          <div v-for="info in contactInfos" :key="info.title" class="double-bezel-outer">
            <div class="double-bezel-inner p-5 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-[#00ADB5]/15 border border-[#00ADB5]/30 text-[#00ADB5] flex items-center justify-center text-sm flex-shrink-0">
                <i :class="info.icon"></i>
              </div>
              <div>
                <h4 class="font-mono text-[10px] font-bold text-slate-500 dark:text-gray-500 uppercase tracking-widest mb-0.5">{{ info.title }}</h4>
                <p class="text-sm font-semibold text-slate-900 dark:text-white">{{ info.value }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form Container (Double-Bezel) -->
        <div class="lg:col-span-8 double-bezel-outer" data-aos="fade-left">
          <div class="double-bezel-inner p-6 sm:p-10">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    v-model="form.name"
                    required
                    placeholder="Nama Anda"
                    class="input-bezel"
                  />
                </div>
                <div>
                  <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Alamat Email</label>
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
                <label class="block font-mono text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-gray-400 mb-2">Pesan / Keperluan</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Tuliskan tawaran kerja, proyek, atau pesan Anda..."
                  class="input-bezel resize-none"
                ></textarea>
              </div>
              
              <!-- Button-in-Button Submit CTA -->
              <button type="submit" class="cta-button-nested w-full justify-center">
                <span>Kirim Pesan</span>
                <div class="cta-button-icon">
                  <i class="fas fa-paper-plane text-xs"></i>
                </div>
              </button>
            </form>
          </div>
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
  { title: "Telepon / WA", value: "081522716223", icon: "fas fa-phone-alt" },
  { title: "Alamat", value: "Jl. Perdana No. 54A, Pontianak 78113", icon: "fas fa-map-marker-alt" },
  { title: "Website", value: "lintaradigital.com", icon: "fas fa-globe" },
  { title: "Portfolio Web", value: "okta-maulana.vercel.app", icon: "fas fa-[#00ADB5] fa-laptop-code" },
];

const handleSubmit = () => {
  alert(`Terima kasih ${form.value.name}! Pesan Anda telah terkirim.`);
  form.value = { name: "", email: "", message: "" };
};
</script>
