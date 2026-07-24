<template>
  <section id="contact" class="py-20 bg-gray-50/50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Get In <span class="text-primary">Touch</span></h2>
        <p class="text-gray-600 dark:text-gray-400">
          Have a project in mind or want to connect? Send me a message!
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <!-- Contact Info Cards -->
        <div class="space-y-6" data-aos="fade-right">
          <div v-for="info in contactInfos" :key="info.title" class="contact-card p-6 flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl flex-shrink-0">
              <i :class="info.icon"></i>
            </div>
            <div>
              <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{{ info.title }}</h4>
              <p class="font-medium text-gray-900 dark:text-white">{{ info.value }}</p>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-2 card-base p-8" data-aos="fade-left">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  v-model="form.name"
                  required
                  placeholder="Your Name"
                  class="input-base"
                />
              </div>
              <div>
                <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  v-model="form.email"
                  required
                  placeholder="Your Email"
                  class="input-base"
                />
              </div>
            </div>
            <div>
              <label class="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="Your Message..."
                class="input-base"
              ></textarea>
            </div>
            <button type="submit" class="btn-primary w-full flex items-center justify-center gap-2">
              <i class="fas fa-paper-plane"></i>
              Send Message
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
  { title: "Email", value: "oktamaulana@example.com", icon: "fas fa-envelope" },
  { title: "Location", value: "Indonesia", icon: "fas fa-map-marker-alt" },
  { title: "Social", value: "@_okta_maulana", icon: "fab fa-instagram" },
];

const handleSubmit = () => {
  alert(`Thank you, ${form.value.name}! Your message has been sent.`);
  form.value = { name: "", email: "", message: "" };
};
</script>
