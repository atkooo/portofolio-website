import { ICONS } from "./icons.js";
import { debounce } from "./utils.js";

let isMenuManuallyToggled = false;

/**
 * Mobile menu toggle handler
 */
export const toggleMenuHandler = (e) => {
  if (e) e.preventDefault();
  const menu = document.querySelector("#menu");
  const toggleMenu = document.querySelector("#toggle-menu");
  if (!menu || !toggleMenu) return;

  isMenuManuallyToggled = true;
  menu.classList.toggle("translate-y-0");
  menu.classList.toggle("translate-y-[-150vh]");

  const isOpen = menu.classList.contains("translate-y-0");
  const img = toggleMenu.querySelector("img");
  if (img) {
    img.src = isOpen ? ICONS.menu.close : ICONS.menu.open;
  }
};

/**
 * Initialize responsive navigation bar behaviors
 */
export const initNavigation = () => {
  const menu = document.querySelector("#menu");
  const toggleMenu = document.querySelector("#toggle-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  if (!menu || !toggleMenu) return;

  // Set initial menu state based on screen size
  if (window.innerWidth < 768) {
    menu.classList.add("translate-y-[-150vh]");
    menu.classList.remove("translate-y-0");
    const img = toggleMenu.querySelector("img");
    if (img) img.src = ICONS.menu.open;
  } else {
    menu.classList.add("translate-y-0");
    menu.classList.remove("translate-y-[-150vh]");
  }

  // Toggle button event listener
  toggleMenu.addEventListener("click", toggleMenuHandler);

  // Auto close menu when clicking nav link on mobile
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        isMenuManuallyToggled = false;
        menu.classList.remove("translate-y-0");
        menu.classList.add("translate-y-[-150vh]");
        const img = toggleMenu.querySelector("img");
        if (img) img.src = ICONS.menu.open;
      }
    });
  });

  // Active section scroll tracking
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
          currentSection && link.getAttribute("href") === `#${currentSection.id}`
        );
      });
    }, 100)
  );

  // Screen resize handler
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      menu.classList.remove("translate-y-[-150vh]");
      menu.classList.add("translate-y-0");
      isMenuManuallyToggled = false;
    } else if (!isMenuManuallyToggled) {
      menu.classList.remove("translate-y-0");
      menu.classList.add("translate-y-[-150vh]");
      const img = toggleMenu.querySelector("img");
      if (img) img.src = ICONS.menu.open;
    }
  });
};
