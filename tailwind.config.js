module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '30px',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#222222',
        secondary: '#F5E6E0',
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)"
      },
      backgroundImage: {
        hero: "url('./img/pexels-max-vakhtbovycn-8092430.jpg')",
        'card': "url('assets/images/thumbnail-background.svg')",
        'heroImage': "url('assets/images/thumbnail-background.svg')",
      },
    },
  },
  plugins: [],
};
