// ====================
// ELEMENT SELECTIONS & CONSTANTS
// ====================
const html = document.documentElement;
const menu = document.querySelector("#menu");
const toggleMenu = document.querySelector("#toggle-menu");
const toggleTheme = document.querySelector("#toggle-theme");
const typewriterEl = document.querySelector("#typewriter-text");
const navLinks = document.querySelectorAll(".nav-link");
let isMenuManuallyToggled = false;

// Konfigurasi ikon untuk menu dan tema
const ICONS = {
  menu: {
    open: "./images/icons/icon-menu.svg",
    close: "./images/icons/icon-close.svg",
  },
  theme: {
    light: "./images/icons/icon-light.svg",
    dark: "./images/icons/icon-dark.svg",
  },
  logo: {
    light: "./images/icon.svg",
    dark: "./images/icon-white.svg",
  },
};

// ====================
// FUNGSI UTAMA
// ====================

// Update toggleMenuHandler
const toggleMenuHandler = (e) => {
  if (e) e.preventDefault();
  isMenuManuallyToggled = true;
  menu.classList.toggle("translate-y-0");
  menu.classList.toggle("translate-y-[-150vh]");

  const isOpen = menu.classList.contains("translate-y-0");
  toggleMenu.querySelector("img").src = isOpen
    ? ICONS.menu.close
    : ICONS.menu.open;
};

// Fungsi untuk mengatur tema gelap/terang
const toggleThemeHandler = () => {
  const isDark = html.classList.toggle("dark");
  const switchThumb = toggleTheme.querySelector("div");
  const icon = switchThumb.querySelector("img");

  icon.src = ICONS.theme[isDark ? "light" : "dark"];
  updateLogoImage(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
};

// Fungsi untuk mengoptimalkan scroll dengan debouncing
const debounce = (fn, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

// ====================
// EFEK TYPEWRITER
// ====================
const typewriter = (() => {
  const texts = [
    "Full Stack Developer",
    "Front-End Developer",
    "Back-End Developer",
  ];
  let count = 0;
  let index = 0;

  const type = () => {
    if (count === texts.length) count = 0;
    const currentText = texts[count];
    const letter = currentText.slice(0, ++index);

    if (typewriterEl) {
      typewriterEl.textContent = letter;

      // Mengatur timing animasi
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

// Menggabungkan event handler
const handlers = {
  menu: toggleMenuHandler,
  theme: toggleThemeHandler,
};

// Update logo image based on theme
const updateLogoImage = (isDark) => {
  const logo = document.querySelector("#nav-logo");
  if (logo) {
    logo.src = isDark ? ICONS.logo.dark : ICONS.logo.light;
  }
};

// ====================
// EVENT LISTENERS
// ====================
document.addEventListener("DOMContentLoaded", () => {
  // Inisialisasi AOS (Animate On Scroll)
  AOS.init({ duration: 800, offset: 100, once: true });

  // Set initial menu state based on screen size
  if (window.innerWidth < 768) {
    menu.classList.add("translate-y-[-150vh]");
    menu.classList.remove("translate-y-0");
    toggleMenu.querySelector("img").src = ICONS.menu.open;
  } else {
    menu.classList.add("translate-y-0");
    menu.classList.remove("translate-y-[-150vh]");
  }

  // Menambahkan event listeners
  [
    [toggleMenu, "click", handlers.menu],
    [toggleTheme, "click", handlers.theme],
  ].forEach(([element, event, handler]) => {
    element?.addEventListener(event, handler);
  });

  // Update navLinks click handler
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        isMenuManuallyToggled = false;
        menu.classList.remove("translate-y-0");
        menu.classList.add("translate-y-[-150vh]");
        toggleMenu.querySelector("img").src = ICONS.menu.open;
      }
    });
  });

  // Mengatur active state pada navigasi saat scroll
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

  // Memulai efek typewriter
  if (typewriterEl) {
    typewriter.start();
  }

  // Memeriksa dan mengatur tema yang tersimpan
  const savedTheme = localStorage.getItem("theme");
  if (
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.classList.add("dark");
    const switchThumb = toggleTheme.querySelector("div img");
    switchThumb.src = ICONS.theme.light;
    updateLogoImage(true);
  } else {
    html.classList.remove("dark");
    const switchThumb = toggleTheme.querySelector("div img");
    switchThumb.src = ICONS.theme.dark;
    updateLogoImage(false);
  }

  // Add resize event listener to handle screen size changes
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      menu.classList.remove("translate-y-[-150vh]");
      menu.classList.add("translate-y-0");
      isMenuManuallyToggled = false;
    } else if (!isMenuManuallyToggled) {
      menu.classList.remove("translate-y-0");
      menu.classList.add("translate-y-[-150vh]");
      toggleMenu.querySelector("img").src = ICONS.menu.open;
    }
  });
});
