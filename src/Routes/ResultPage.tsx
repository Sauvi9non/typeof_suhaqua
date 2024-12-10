import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`

`;

const Image = styled.img`

`;

const Explanation = styled.p`
    font-size: 1rem;
`

const Retry = styled.button`
    width: 30%;
    padding: 10px 20px;
    font-size: 2rem;
    background-color: white;
    color: black;
    border-radius: 30px;
    outline: none;

    &:hover {
        background-color: lightgray;
        cursor: pointer;
        outline: none;
    }
`;

const Share = styled.button`
    width: 30%;
    padding: 10px 20px;
    font-size: 2rem;
    background-color: white;
    color: black;
    border-radius: 30px;
    outline: none;

    &:hover {
        background-color: lightgray;
        cursor: pointer;
        outline: none;
    }
`

function ResultPage(){
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
    }

    return(
        <Wrapper>
            <Image></Image>
            <Explanation></Explanation>
            <Retry onClick={goToMain}>다시하기</Retry>
            <Share>공유하기</Share>
        </Wrapper>
    );
}

export default ResultPage;