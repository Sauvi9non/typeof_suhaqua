import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { results, MBTI } from "../assets/types";
import React from "react";

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`

const ResultBox = styled.div`
    text-align: center;
`

const BoxItem = styled.div`
    padding: 20px;
    margin: 10px 0px;
`

const Image = styled.img`
    width: 300px;
    @media (max-width: 576px) {
        width: 200px;
    }
`

const Name = styled.span`
    font-size: 1.75rem;
    margin-bottom: 25px;

    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`

const Explanation = styled.pre`
    word-break: break-word;
    font-size: 1.25rem;
    @media (max-width: 576px) {
        font-size: 1rem;
    }
`

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

`

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1.25rem;
    border-radius: 10px;
    border : 2px solid black;
    background-color: white;

    &:hover {
        cursor: pointer;
        background-color: #A5C8FF;
    }

    @media (max-width: 576px) {
        padding: 5px 10px;
        font-size: 1rem;
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
    const goToReview = () => {
        navigate("/");
    }

    const shareTwitter = () => {
        const text = `${results[result].name} ${results[result].explanation}`
        const url = `https://typeof-suhaqua.web.app`;
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    }

    return(
        <Container>
            <ResultBox>
                <BoxItem>
                    <Image src={results[result].image}></Image>
                </BoxItem>

                <BoxItem>
                    <Name>{results[result].name}</Name>
                    <Explanation>
                    {results[result].explanation.split(".").map((sentence, index) => (
                    <React.Fragment key={index}>
                            {sentence}
                            <br />
                    </React.Fragment>
                    ))}
                    </Explanation>
                </BoxItem>
            </ResultBox>

            <ButtonGroup>
                <Button onClick={goToMain}>다시하기</Button>
                <Button className="twitter-share-button" onClick={shareTwitter}>트위터에 공유하기</Button>
                <Button onClick={goToReview}>개발 후기</Button>
            </ButtonGroup>
        </Container>
    );
}

export default ResultPage;