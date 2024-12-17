import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { results, MBTI } from "../assets/types";

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
    const location = useLocation();
    const testData = location.state;

    const EI = testData.EI > 0 ? "E" : "I"; //양수거나 음수
    const NS = testData.NS > 0 ? "N" : "S";
    const TF = testData.TF > 0 ? "T" : "F";
    const PJ = testData.PJ > 0 ? "P" : "J";

    const result: MBTI = String().concat(EI, NS, TF, PJ) as MBTI; // ENTJ 

    const goToMain = () => {
        navigate("/");
    }

    return(
        <Wrapper>
            <h1>{results[result].name}</h1>
            <Image src={results[result].image}></Image>
            <Explanation>{results[result].explanation}</Explanation>
            <Retry onClick={goToMain}>다시하기</Retry>
            <Share>공유하기</Share>
        </Wrapper>
    );
}

export default ResultPage;