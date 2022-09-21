const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './dist/**/*.{html,js}'
  ],
  theme: {
    extend: {},
    container:{
      center: true,
    },
    colors: {
      'sp_accent': '#966CFC',
      'sp_main': '#3D67F9',
      'sp_silver': '#D0D0D0',
      'sp_light-silver': '#F9F7F7',
      'sp_sale': '#ED283E',
      'sp_dark-silver': '#B0B0B0',
      'sp_black': '#333333',
      'sp_white': '#FFFFFF',
      'sp_white_2/4': '#ffffff80',
      'sp_coffee_foam': '#e6e1db',
      'sp_none': 'rgba(0,0,0,0.001)'
    },
    fontFamily: {
      'roboto': ['"Roboto"', 'sans-serif']
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'pre-lg': '1030px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1600px'
    }
  },
  plugins: [
    plugin(function({ addComponents }) {
      addComponents({
        '.font-h1': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '60px',
          lineHeight: '120%',
          textTransform: 'uppercase',
        },
        '.font-h2': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '120%',
          textTransform: 'uppercase',
        },
        '.font-h3': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '26px',
          lineHeight: '120%',
        },
        '.font-h4': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '120%',
        },
        '.font-p-main': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '200%',
        },
        '.font-p-banner': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '18px',
          lineHeight: '200%',
        },
        '.font-a-main': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '120%',
        },
        '.font-p-button': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '10%',
        },
        '.font-label': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '14px',
          lineHeight: '175%',
        },
        '.font-h1-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '30px',
          lineHeight: '120%',
          textTransform: 'uppercase',
        },
        '.font-h2-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '28px',
          lineHeight: '120%',
          textTransform: 'uppercase',
        },
        '.font-h3-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '22px',
          lineHeight: '120%',
        },
        '.font-p-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '200%',
        },
        '.font-a-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '500',
          fontSize: '14px',
          lineHeight: '100%',
        },
        '.font-label-mobile': {
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '12px',
          lineHeight: '150%',
        },
        '.shadow-main': {
          background: '#C4C4C4',
          boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.05)',
        },
      })
    })
  ],
}
