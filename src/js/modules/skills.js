/**
 * Initialize animation for skill progress bars
 */
export const initSkillBars = () => {
  const skills = document.querySelectorAll(".skill-progress");
  if (!skills.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progress = entry.target.querySelector(".progress-bar");
          const counter = entry.target.querySelector(".skill-percentage");
          if (!progress || !counter) return;

          const target = parseInt(progress.getAttribute("data-value") || "0", 10);
          let count = 0;
          const duration = 1000;
          const increment = target / (duration / 16);

          const animate = () => {
            if (count < target) {
              count += increment;
              const current = Math.min(Math.round(count), target);
              counter.textContent = `${current}%`;
              progress.style.width = `${current}%`;
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      });
    },
    { threshold: 0.2 }
  );

  skills.forEach((skill) => observer.observe(skill));
};

/**
 * Initialize intersection observer for floating tech badges
 */
export const initFloatingBadges = () => {
  const badges = document.querySelectorAll(".tech-badge");
  if (!badges.length) return;

  badges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.2}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            badge.style.animationPlayState = "running";
          } else {
            badge.style.animationPlayState = "paused";
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(badge);
  });
};
