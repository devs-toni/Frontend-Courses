import React from 'react';
import styled, { css, keyframes, ThemeProvider, createGlobalStyle } from 'styled-components';

export default function ComponentesEstilizados() {
    let mainColor = '#db7093', mainAlphaColor80 = '#db709380';

    const setTransitionTime = (time) => `all ${time} ease-in-out`; 

    const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    `;
    const MyH3 = styled.h3`
            padding: 2rem;
            text-align: center;
            background-color: ${mainColor};
            transition: ${setTransitionTime('1s')};
            color: ${({color}) => color || '#000'};
            animation: ${fadeIn} 5s ease-out;
      /*  ${({isButton}) => isButton ? css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        ` : css`
            color:red;
        `}*/

        &:hover {
            background-color: ${mainAlphaColor80};
        }
    `;

    const light = {
        color: '#222',
        bgColor: '#DDD'
    }
    const dark = {
        color: '#DDD',
        bgColor: '#222'
    }
    const Box = styled.div`
        padding: 1rem;
        margin: 1rem;
        color: ${({theme}) => theme.color};
        background-color: ${({theme}) => theme.bgColor};
    `;

    const BoxRounded = styled(Box)`
        border-radius: 5rem;
    `;

    const GlobalStyle = createGlobalStyle`
        h2 {
            font-size: 2em;
            color:orange;
            text-transform: uppercase;
        }
    `;

    return(
        <>
        <GlobalStyle></GlobalStyle>
            <h2>Styled Components</h2>
            <MyH3>Hola soy un H3 estilizado con styled-components</MyH3>
            <MyH3 color='#61dafb'>Hola son un nuevo H3 estilizado con styled-components</MyH3>
            <MyH3 color='#61dafb' isButton='true'>Hola soy un H3 actuando como un botón</MyH3>
            <ThemeProvider theme={light}>
                <Box>Soy una caja light</Box>
                <BoxRounded>Soy una caja redondeada Light</BoxRounded>
            </ThemeProvider>
            <ThemeProvider theme={dark}>
                <Box>Soy una caja dark</Box>
                <BoxRounded>Soy una caja redondeada Dark</BoxRounded>
            </ThemeProvider>
        </>
    );
}