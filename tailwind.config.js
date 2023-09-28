/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxxxs: '360px',
      xxxs: '384px',
      xxs: '390px',
      xs: '393px',
      ssm: '412px',
      sm: '414px',
      mmd: '428px',
      md: '430px',
      lg: '768px',
      xl: '820px',
      xxl: '1024px',
      xxxl: '1280px',
      xxxxl: '1440px',
    },
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      press: ['Press Start 2P', 'arial'],
    },
    extend: {
      scrollBehavior: ['smooth'],
      colors: {
        pink: '#FCC4B7',
        bubble: '#FC887B',
        celeste: '#97ADD3',
        white: '#FFFFFF',
        violet: '#50435D',
        brown: '#9D7979',
      },
      spacing: {
        none: 0,
        sm: '8px',
        md: '16px',
        mdPlus: '24px',
        lg: '32px',
        lgPlus: '48px',
        xl: '64px',
        xxl: '80px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        xxl: '60px',
        h1: '48px',
        h2: '36px',
        h3: '24px',
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        regular: 400,
        semibold: 500,
        bold: 700,
        dark: 900,
      },
      plugins: [
      ],
    }
  }
}