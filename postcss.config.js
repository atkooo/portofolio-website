module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? {
          "@fullhuman/postcss-purgecss": {
            content: ["./public/**/*.html", "./src/**/*.js"],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            safelist: ["dark", "html", "body"],
          },
          cssnano: {
            preset: [
              "default",
              {
                discardComments: {
                  removeAll: true,
                },
                normalizeWhitespace: true,
                minifySelectors: true,
                minifyFontValues: true,
              },
            ],
          },
        }
      : {}),
  },
};
