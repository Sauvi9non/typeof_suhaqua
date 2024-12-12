import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { results } from "../assets/types";
import { MBTI } from "../assets/types";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Image = styled.img`
    width: 200px;
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
    const answer = "ENTJ";
    const result: MBTI = MBTI[answer as keyof typeof MBTI];

    return(
        <Wrapper>
            <h1>{result}</h1>
            <Image src={results[0].resultImg}></Image>
            <Explanation>{results[0].explanation}</Explanation>
            <Retry onClick={goToMain}>다시하기</Retry>
            <Share>공유하기</Share>
        </Wrapper>
    );
}

export default ResultPage;