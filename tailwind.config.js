/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        Mgray: '#adbdcc',
        Mpurple1: '#6962f7',
        Mpurple2: '#7000ff',
        Maccent: '#0a2540',
        Mblue: '#00d4ff',
        light: '#f7f9fc',
        btnHover: '#6d7a88'
      },
      height: {
        564: '564px',
        628: '628px',
        446: '446px',
        250:'250px',
      },
      width: {
        540: '540px',
        140:'140px'
      },
      boxShadow: {
        standard: '0px 2px 40px rgba(0,0,0,0.15)'
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
      },
      fontFamily: {
        Mbody: ['Roboto', 'sans-serif'],
        Mhead: ['Anek Telugu', 'sans-serif']
      },
      fontSize: {
        h1: '94px',
        h2: '50px',
        h3: '40px',
        h4: '32px',
        h5: '28px',
        h6: '22px',
      },
      lineHeight: {
        h1: '108px',
        h2: '75px',
      },
    },
  },
  plugins: [],
}

