import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: ${(props) => props.theme.colors.background};
    }
    
    body {
        font-family: Helvetica, sans-serif;
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        height: 100vh;
    }`;

export default GlobalStyle;
