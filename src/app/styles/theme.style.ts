export const theme = {
    colors: {
        primary: '#6A5ACD',
        secondary: '#9368B7',
        tertiary: '#F0E100',
        background: 'linear-gradient(135deg, #f0f0f0, #d9e4f5)',
        text: '#444',
        lightText: '#ffffff',
        textError: '#d20303',
        border: '1px solid black',

        sectionBackground: 'rgba(255, 255, 255, 0.7)',
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
        default: '10px',
    },
    shadow: {
        default: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    breakpoints: {
        tablet: '1024px',
        phone: '768px',
    },
};

export const darkTheme = {
    colors: {
        primary: '#6A5ACD',
        secondary: '#2cd3e0',
        tertiary: '#F0E100',
        background: 'linear-gradient(135deg, #1a1a2e, #16213e)',
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
