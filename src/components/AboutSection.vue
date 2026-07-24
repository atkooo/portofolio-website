<template>
  <section id="about" class="py-20 bg-gray-50/50 dark:bg-gray-900/50">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">About <span class="text-primary">Me</span></h2>
        <p class="text-gray-600 dark:text-gray-400">
          Transforming complex problems into elegant, scalable software solutions.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Bio Card -->
        <div class="card-base p-8" data-aos="fade-right">
          <h3 class="text-2xl font-bold mb-4">Software Engineer & Tech Enthusiast</h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            Hello! I'm Okta Maulana, a Software Engineer with a deep passion for modern web technologies, responsive UI design, and robust backend engineering. I enjoy turning complex challenges into clean, accessible code.
          </p>
          <div class="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span class="font-semibold text-primary">Location:</span> Indonesia
            </div>
            <div>
              <span class="font-semibold text-primary">Specialty:</span> Full-Stack Web
            </div>
            <div>
              <span class="font-semibold text-primary">Status:</span> Open for Opportunities
            </div>
            <div>
              <span class="font-semibold text-primary">Frameworks:</span> Vue.js, Node.js, React
            </div>
          </div>
        </div>

        <!-- Highlight Grid -->
        <div class="grid grid-cols-2 gap-6" data-aos="fade-left">
          <div v-for="stat in stats" :key="stat.label" class="card-base p-6 text-center">
            <div class="text-4xl font-bold text-primary mb-2">{{ stat.value }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];
</script>
