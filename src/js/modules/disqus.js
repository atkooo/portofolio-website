/**
 * Module to handle Disqus comment embed initialization
 */
export const initDisqus = () => {
  window.disqus_config = function () {
    const hostname = window.location.hostname;
    const isDark = document.documentElement.classList.contains("dark");

    if (hostname === "127.0.0.1" || hostname === "localhost") {
      this.page.url = "http://127.0.0.1:5500/public/index.html";
      this.page.identifier = "local-dev";
    } else {
      this.page.url = window.location.href;
      this.page.identifier = window.location.pathname;
    }

    this.theme = {
      color: isDark ? "dark" : "light",
    };
  };

  const disqusThread = document.querySelector("#disqus_thread");
  if (disqusThread && !document.querySelector("script[src*='disqus.com/embed.js']")) {
    const d = document;
    const s = d.createElement("script");
    s.src = "https://https-okta-maulana-vercel-app.disqus.com/embed.js";
    s.setAttribute("data-timestamp", (+new Date()).toString());
    (d.head || d.body).appendChild(s);
  }
};
