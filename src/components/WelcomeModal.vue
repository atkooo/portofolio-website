<template>
  <div
    v-if="isModalOpen"
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
  >
    <div
      class="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-md w-full mx-4 transform transition-all shadow-2xl"
    >
      <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Welcome to My Journey!</h2>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Please enter your name to continue:
      </p>
      <input
        type="text"
        v-model="visitorName"
        @keyup.enter="submitVisitor"
        placeholder="Your name (optional)"
        class="input-base w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 rounded-xl border-2 border-transparent focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 mb-6 text-gray-800 dark:text-white"
      />
      <button
        @click="submitVisitor"
        class="btn-primary w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transform hover:-translate-y-0.5 transition-all duration-300 font-semibold"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script setup>
import { useVisitor } from "../composables/useVisitor.js";
const { isModalOpen, visitorName, submitVisitor } = useVisitor();
</script>
