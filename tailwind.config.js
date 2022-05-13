module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
