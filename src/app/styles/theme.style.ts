export const theme = {
    colors: {
        primary: "#007bff",
        secondary: "#6c757d",
        background: "#f8f9fa",
        text: "#212529",
        lightText: "#ffffff",
        textError: "#d20303",
    },
    fonts: {
        main: "Arial, sans-serif"
    }
    , fontSizes: {
        default: '22px',
        large: '44px',
        title: '64px'
    }
};

export type ThemeType = typeof theme;
