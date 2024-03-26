/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#201351",
        "light-blue": "#3386ff",
        "shade-blue": "#384ae8",
        'high-blue': '#4b5ced',
        'transparent-blue': "rgba(55, 95, 238, .25)",
        'dodger-blue': "#2d9edf",
        'dodger-lightblue': "#3898ec",
        'blue-berry': "#3713bb",
        'grey-transparent': 'rgba(234, 242, 255, .5)',
        'background-color': '#201251',
        'btn-hover': '#386de8',
        'btn-bghover': "#22aeff",
        'shade-purple': "#1c1537",
        'divider-bg': 'rgba(255, 255, 255, .5)',
        'blue-gray': '#98a2b3',
        'light-grey': "#ccc",
        'dark-gray': '#333',
        'blue-100': "#4a5dff",
        'blue-300': '#3386FF',
        'grey-200': '#f9fafb',
        'blue-200': "rgba(56, 74, 232, .3)",
        'border-blue': "rgba(51, 134, 255, .5",
        'borderbg': "rgba(56, 74, 232, .5)",
        'light-blueborder': 'rgba(56, 74, 232, .52)',
        'light-border200': "rgba(51, 134, 255, .5)",
        'circle-border': 'rgba(54, 70, 224, .49)',
      },
      boxShadow: {
        'btn-shadow': '0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1)',
        'nav-shadow': "0 10px 11px -10px rgba(32, 19, 81, .55)",
        'planshadow': " 0 1px 20px -8px #3713bb",
        'aboutshadow': '1px 1px 50px 6px rgba(51, 134, 255, .52)',
      },
      height: {
        90: "90vh",
      },
      maxHeight: {
        700: "700px",
      },
      maxWidth: {
        '1xl': "40rem"
      },
      backgroundImage :{
        'herobg': "linear-gradient(to right, #291a5f, #1a3196)",
        'divider-bg': 'linear-gradient(270deg, #3386ff, #201351 0%, rgba(51, 134, 255, .29))',
        'sliderbg': 'linear-gradient(#003481, rgba(0, 0, 0, 0))',
        'slidebtn': "linear-gradient(rgba(51, 134, 255, .79), rgba(51, 134, 255, .79))"
      },
      borderRadius: {
        '10': "10px",
      },
      fontSize: {
        'xxl': "2.5rem",
        '5xl': "2rem",
      },
      screens: {
        'base': "990px",
        "xs": "480px"
      }
    },
  },
  plugins: [],
};
