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

// Optimized menu toggle
const toggleMenuHandler = () => {
  const isHidden = menu.classList.toggle("translate-y-[-200%]");
  toggleMenu.querySelector("img").src = ICONS.menu[isHidden ? "open" : "close"];
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

// Optimized typewriter effect
const typewriter = (() => {
  const texts = ["Web Developer", "UI/UX Designer", "Frontend Developer"];
  let count = 0;
  let index = 0;

  const type = () => {
    if (count === texts.length) count = 0;

    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    typewriterEl.textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 2000);
    } else {
      setTimeout(type, 100);
    }
  };

  return { start: type };
})();

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 800, offset: 100, once: true });

  toggleMenu.addEventListener("click", toggleMenuHandler);
  toggleTheme.addEventListener("click", toggleThemeHandler);

  navLinks.forEach((link) => {
    link.addEventListener("click", toggleMenuHandler);
  });

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
});

window.addEventListener("load", typewriter.start);
