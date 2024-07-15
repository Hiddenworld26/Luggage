// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    body, html, #root {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: 'YourFontFamily', sans-serif; /* Replace 'YourFontFamily' with your desired font */
    }

    .common-screen {
        min-height: 100vh; /* Ensures all screens take at least the full viewport height */
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
`;

export default GlobalStyle;
