/**
 * Main Application Script Entrypoint (ES Module)
 * Okta Maulana Portfolio Website
 */

import { initTheme } from "./modules/theme.js";
import { initNavigation } from "./modules/navigation.js";
import { initWelcomeModal } from "./modules/welcomeModal.js";
import { initTypewriter } from "./modules/typewriter.js";
import { initPortfolioFilter } from "./modules/portfolioFilter.js";
import { initSkillBars, initFloatingBadges } from "./modules/skills.js";
import { initDisqus } from "./modules/disqus.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Theme (Dark/Light mode & Disqus theme sync)
  initTheme();

  // Initialize Navigation (Mobile drawer & scroll-spy active state)
  initNavigation();

  // Initialize Welcome Modal for first-time visitors
  initWelcomeModal();

  // Initialize Typewriter animation in hero section
  initTypewriter();

  // Initialize Portfolio Category Filtering
  initPortfolioFilter();

  // Initialize Skill progress counters & Floating badges animation
  initSkillBars();
  initFloatingBadges();

  // Initialize Disqus comments thread
  initDisqus();

  // Initialize AOS (Animate On Scroll) if loaded in window
  if (window.AOS) {
    window.AOS.init({ duration: 800, offset: 100, once: true });
  }
});
