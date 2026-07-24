import { ICONS } from "./icons.js";

const html = document.documentElement;

/**
 * Reload Disqus thread with current theme
 * @param {boolean} isDark 
 */
export const reloadDisqus = (isDark) => {
  if (window.DISQUS) {
    window.DISQUS.reset({
      reload: true,
      config: function () {
        this.page.identifier = window.location.pathname;
        this.page.url = window.location.href;
        this.theme = {
          color: isDark ? "dark" : "light",
        };
      },
    });
  }
};

/**
 * Update logo image based on theme mode
 * @param {boolean} isDark 
 */
export const updateLogoImage = (isDark) => {
  const logo = document.querySelector("#nav-logo");
  if (logo) {
    logo.src = isDark ? ICONS.logo.dark : ICONS.logo.light;
  }
};

/**
 * Toggle dark/light theme
 */
export const toggleThemeHandler = () => {
  const toggleTheme = document.querySelector("#toggle-theme");
  const isDark = html.classList.toggle("dark");
  
  if (toggleTheme) {
    const switchThumb = toggleTheme.querySelector("div");
    const icon = switchThumb ? switchThumb.querySelector("img") : null;
    if (icon) {
      icon.src = ICONS.theme[isDark ? "light" : "dark"];
    }
  }

  updateLogoImage(isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
  reloadDisqus(isDark);
};

/**
 * Initialize theme based on user saved preference or system preference
 */
export const initTheme = () => {
  const toggleTheme = document.querySelector("#toggle-theme");
  const savedTheme = localStorage.getItem("theme");
  const isDark =
    savedTheme === "dark" ||
    (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);

  if (isDark) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }

  if (toggleTheme) {
    const switchThumb = toggleTheme.querySelector("div img");
    if (switchThumb) {
      switchThumb.src = ICONS.theme[isDark ? "light" : "dark"];
    }
  }

  updateLogoImage(isDark);

  if (toggleTheme) {
    toggleTheme.addEventListener("click", toggleThemeHandler);
  }
};
