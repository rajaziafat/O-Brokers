/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        dark: "#161415",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      backgroundImage: {
        hero: "url('/assets/hero.png')",
        aboutUsHero: "url('/assets/bg-about-us-hero.png')",
        becomePartnerHero: "url('/assets/bg-become-a-partner.png')",
        platformHero: "url('/assets/bg-platform-hero.png')",
      },
      fontFamily: {
        sans: ["Poppins"],
      },
    },
  },
  plugins: [],
};
