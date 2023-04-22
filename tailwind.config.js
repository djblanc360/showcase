/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        "light-neutral": "#F5DEB3",
        "beige-neutral": "#C9B79C",
        "earthy-brown": "#A0522D",
        tan: "#D2B48C",
        red: "#CD5C5C",
        ruby: "#8F4E45",
        grey: "#C9B79C",
        green: "#228B22",
        "dark-grey": "#8B8378",
        "opaque-black": "rgba((78,78,78,0.35)",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
        "linear-gradient(to left top, rgb(124, 45, 18), rgb(254, 243, 199), rgb(124, 45, 18))",

        "gradient-rainblue":
          "linear-gradient(to left top, rgb(124, 45, 18), rgb(254, 243, 199), rgb(124, 45, 18))",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      content: {
        brush: "url('https://placehold.co/300x100/F5DEB3/F5DEB3')", //"url('./assets/brush-500px.png')", 
        person1: "url('./assets/ero.png')",
        person2: "url('./assets/ero.png')",
        person3: "url('./assets/ero.png')",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
