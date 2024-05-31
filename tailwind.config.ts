import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      inherit: 'inherit',
      black: '#000',
      white: '#fff',
      cyan: '#007bff',
      'dark-cyan': '#0266d1',
      grey: '#a4a4a4',
      'light-grey': '#e8e8e8',
      red: '#ce1414',
      green: '#087008',
    },
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      screens: {
        mobile: '480px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
      },
      spacing: {
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        16: '16px',
        20: '20px',
        30: '30px',
        40: '40px',
        100: '100px',
      },
      width: {
        12: '12px',
        30: '30px',
        80: '80px',
        200: '200px',
      },
      height: {
        12: '12px',
        30: '30px',
        80: '80px',
        200: '200px',
      },
      maxWidth: {
        420: '420px',
        600: '600px',
        1290: '1290px',
      },
      boxShadow: {
        small: '0 2px 10px 0 rgb(0 0 0 / 0.1)'
      },
      borderRadius: {
        small: '4px',
        medium: '10px',
      },
      fontSize: {
        12: '12px',
        14: '14px',
        16: '16px',
        20: '20px',
        24: '24px',
      },
      lineHeight: {
        10: '1',
        12: '1.2',
        15: '1.5',
      },
      fontFamily: {
        nunito: 'Nunito, sans-serif',
      },
      keyframes: {
        spin: {
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
    },
  },
};
export default config;
