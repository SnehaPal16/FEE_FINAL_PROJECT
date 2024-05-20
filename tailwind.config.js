/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      rotate : {
        '60' : "60deg",
        '30' : "30deg",
        '75' : "75deg"
      },
      backgroundImage : {
        'brick-bg' : "url('./assets/images/brick_bg.png')",
        'howitwork-bg' : "url('./assets/images/img3.png')",
        'testimonial-bg' : "url('./assets/images/img4.png')"
      }
    },
  },
  plugins: [],
};
