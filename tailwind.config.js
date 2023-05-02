module.exports = {
  content: ["./src/**/*.njk"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: "1.5rem",
              fontWeight: "bold",
            },
            h2: {
              fontSize: "1.3rem",
            },
            h3: {
              fontSize: "1.2rem",
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
