export const theme = {
    colors: {
        primary: '#262626',
        secondary: '#2cd3e0',
        tertiary: '#F0E100',
        background: '#f8f9fa',
        text: '#262626',
        lightText: '#ffffff',
        textError: '#d20303',
    },
    fonts: {
        main: 'Arial, sans-serif',
    },
    fontSizes: {
        default: '22px',
        large: '44px',
        title: '6rem',
        titleTablet: '3rem',
        price: '2rem',
    },
    borderRadius: {
        default: '5px',
    },
    shadows: {
        default:
            '-webkit-box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);' +
            '-moz-box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);' +
            'box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);',
    },
    breakpoints: {
        tablet: '1024px',
        phone: '768px',
    },
};

export const darkTheme = {
    colors: {
        primary: '#8968de',
        secondary: '#2cd3e0',
        tertiary: '#F0E100',
        background: '#262626',
        text: '#ffffff',
        lightText: '#ffffff',
        textError: '#d20303',
    },
    fonts: {
        main: 'Arial, sans-serif',
    },
    fontSizes: {
        default: '22px',
        large: '44px',
        title: '6rem',
        titleTablet: '3rem',
        price: '2rem',
    },
    borderRadius: {
        default: '5px',
    },
    shadows: {
        default:
            '-webkit-box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);' +
            '-moz-box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);' +
            'box-shadow: 0px 0px 19px 3px rgba(0,0,0,0.75);',
    },
    breakpoints: {
        tablet: '1024px',
        phone: '768px',
    },
};

export type ThemeType = typeof theme;
