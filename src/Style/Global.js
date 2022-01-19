import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    input, textarea, select {
        outline: 0;
    }
`


export default GlobalStyle