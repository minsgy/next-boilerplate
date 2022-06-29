import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
    ${reset}

    html, 
    body,
    #root {
        font-family: 'Roboto', sans-serif;
        height: 100%;
    }
    *{
        font-family: 'Roboto', sans-serif;
        box-sizing: border-box;
    }
    a,
    a:link,
    a:visited,
    a:hover{
        text-decoration: none;
        color: inherit;
    }
    li, ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    input{
        padding: 0;
    }
    button {
        background-color: transparent;
        border: none;
        padding: 0;
    }
`

export default GlobalStyle
