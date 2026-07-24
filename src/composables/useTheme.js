import { ref, onMounted } from "vue";

const ICONS = {
  menu: {
    open: "/images/icons/icon-menu.svg",
    close: "/images/icons/icon-close.svg",
  },
  theme: {
    light: "/images/icons/icon-light.svg",
    dark: "/images/icons/icon-dark.svg",
  },
  logo: {
    light: "/images/icon.svg",
    dark: "/images/icon-white.svg",
  },
};

const isDark = ref(false);

export function useTheme() {
  const reloadDisqus = (darkMode) => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = window.location.pathname;
          this.page.url = window.location.href;
          this.theme = {
            color: darkMode ? "dark" : "light",
          };
        },
      });
    }
  };

  const applyTheme = (darkMode) => {
    isDark.value = darkMode;
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    reloadDisqus(darkMode);
  };

  const toggleTheme = () => {
    applyTheme(!isDark.value);
  };

  const initTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const darkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    applyTheme(darkMode);
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
    ICONS,
  };
}
