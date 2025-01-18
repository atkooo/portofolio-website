// Cache DOM queries and use const
const html = document.documentElement;
const menu = document.querySelector("#menu");
const toggleMenu = document.querySelector("#toggle-menu");
const toggleTheme = document.querySelector("#toggle-theme");
const typewriterEl = document.querySelector("#typewriter-text");
const navLinks = document.querySelectorAll(".nav-link");

// Use object for icons configuration
const ICONS = {
  menu: {
    open: "./images/icons/icon-menu.svg",
    close: "./images/icons/icon-close.svg",
  },
  theme: {
    light: "./images/icons/icon-light.svg",
    dark: "./images/icons/icon-dark.svg",
  },
};

const toggleMenuHandler = (e) => {
  if (e) e.preventDefault();
  console.log("Toggle menu clicked");

  // Toggle nav menu visibility
  menu.classList.toggle("menu-visible");

  // Update icon
  const isVisible = menu.classList.contains("menu-visible");
  toggleMenu.querySelector("img").src =
    ICONS.menu[isVisible ? "close" : "open"];
};
// Optimized theme toggle
const toggleThemeHandler = () => {
  const isDark = html.classList.toggle("dark");
  toggleTheme.querySelector("img").src = ICONS.theme[isDark ? "light" : "dark"];
};

// Optimized scroll handler with debouncing
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// Typewriter effect implementation
const typewriter = (() => {
  const texts = ["Web Developer", "UI/UX Designer", "Frontend Developer"];
  let count = 0;
  let index = 0;

  const type = () => {
    if (count === texts.length) count = 0;

    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    if (typewriterEl) {
      typewriterEl.textContent = letter;

      if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000);
      } else {
        setTimeout(type, 100);
      }
    }
  };

  return { start: type };
})();

// Remove duplicate event listeners and consolidate handlers
const handlers = {
  menu: toggleMenuHandler,
  theme: toggleThemeHandler,
};

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Single initialization
  AOS.init({ duration: 800, offset: 100, once: true });

  // Initial mobile menu state
  if (window.innerWidth < 768) {
    menu.classList.add("translate-y-[-200%]");
  }

  // Group event listeners
  [
    [toggleMenu, "click", handlers.menu],
    [toggleTheme, "click", handlers.theme],
  ].forEach(([element, event, handler]) => {
    element?.addEventListener(event, handler);
  });

  // Handle nav links clicks
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        menu.classList.add("translate-y-[-200%]");
        toggleMenu.querySelector("img").src = ICONS.menu.open;
      }
    });
  });

  // Scroll handler
  window.addEventListener(
    "scroll",
    debounce(() => {
      const currentSection = [...document.querySelectorAll("section[id]")].find(
        (section) => {
          const sectionTop = section.offsetTop - 100;
          return (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + section.offsetHeight
          );
        }
      );

      navLinks.forEach((link) => {
        link.classList.toggle(
          "nav-link-active",
          currentSection &&
            link.getAttribute("href") === `#${currentSection.id}`
        );
      });
    }, 100)
  );
  // Start typewriter effect
  if (typewriterEl) {
    typewriter.start();
  }
});
