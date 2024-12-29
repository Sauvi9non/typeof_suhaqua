import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
        }

    html {
        width: 100vw;
        height: 100vh;
    }
    
    body {
        height: 100%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
`;

export const Container = styled.div`
    width: 500px;
    height: 100%;

    max-width: 100%;
    background-color: #5597FF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 576px) {
        width: 100vw;
    }
`

export const ResultContainer = styled.div`
    width: 500px;
    padding: 2rem 0;
    max-width: 100%;
    background-color: #5597FF;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;

    @media (max-width: 576px) {
        width: 100vw;
    }
`

export const Item = styled.div`
    margin: 2rem;
    padding: 1rem;
    text-align: center;

    @media (max-width: 476px) {
        margin: 1rem;
    }
`