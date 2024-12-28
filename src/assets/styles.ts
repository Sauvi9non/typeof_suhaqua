import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0 auto;
    padding: 0 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;
    //border: 1px solid red;
    }
    
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    }
`;

export const Container = styled.div`
    width: 500px;
    height: 100%;
    background-color: #5597FF;
    padding: 4rem 2rem;
`

export const Item = styled.div`
    margin: 2rem;
    text-align: center;
`