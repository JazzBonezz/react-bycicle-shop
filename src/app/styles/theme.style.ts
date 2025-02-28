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
        primary: '#8A79FF',
        secondary: '#B58DFF',
        tertiary: '#FFD166',
        background: 'linear-gradient(135deg, #121212, #1E1E2E)',
        text: '#EAEAEA',
        lightText: '#FFFFFF',
        textError: '#FF6B6B',
        border: '1px solid #2A2A3A',

        sectionBackground: 'rgba(40, 40, 50, 0.8)',
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
        default: '0 4px 10px rgba(0, 0, 0, 0.4)',
    },
    breakpoints: {
        tablet: '1024px',
        phone: '768px',
    },
};


export type ThemeType = typeof theme;
