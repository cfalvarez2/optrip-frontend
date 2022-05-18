import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: 	#49837c;
        letter-spacing: 0.03em;
        background: #e0c68b;
    }
`

export default GlobalStyles