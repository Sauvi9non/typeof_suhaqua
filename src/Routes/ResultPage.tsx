import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { results, MBTI } from "../assets/types";
import LoadingScreen from "../Components/LoadingScreen";
import React, {useState,useEffect} from "react";
import { Container, Item } from "../assets/styles";
import ScoreBar from "../Components/ScoreBar";

const TitleWrapper = styled.div`
    text-align: center;
`
const Title = styled.span`
    font-size: 2rem;
    font-weight: 400;
    color: white;
`

const ExplanationBox = styled.div`
    width: 360px;
    padding: 2rem;
    margin: 2rem auto;
    background-color: white;
    border-radius: 50px;
    color: #5597FF;
    text-align: start;
`

const Image = styled.img`
    width: 250px;
    text-align:center;
`

const Name = styled.span`
    font-size: 1.75rem;
`

const Explanation = styled.pre`
    word-break: break-word;
    font-size: 1rem;
`

const ButtonGroup = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-gap: 1rem;
    padding: 1rem;
    background-color: #222222;
    border-radius: 20px;
    height: 50px;
`

const Button = styled.button`
    width: 100%;
    font-size: 1.25rem;
    border-radius: 10px;
    border : 2px solid white;
    background-color: #222222;
    color: white;

    &:hover {
        cursor: pointer;
        border : 2px solid gray;
        color: gray;
    }
`

const ResultBox = styled.div`
    padding: 2rem;
    margin: 2rem auto;
    background-color: white;
    border-radius: 50px;
    color: #5597FF;
    text-align: start;
`

const GoToButton = styled.button`
    padding: 1rem 2rem;
    font-size: 1.5rem;
    border-radius: 25px;
    border : none;
    background-color: #A5C8FF;
    width: 90%;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #E0E0E0;
        color: #0063FF;
    }
`

function ResultPage(){
    const navigate = useNavigate();
    const location = useLocation();
    const testData = location.state;
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const EI = testData.EI > 0 ? "E" : "I"; //양수거나 음수
    const NS = testData.NS > 0 ? "N" : "S";
    const TF = testData.TF > 0 ? "T" : "F";
    const PJ = testData.PJ > 0 ? "P" : "J";

    const result: MBTI = String().concat(EI, NS, TF, PJ) as MBTI; // ENTJ 

    const goToMain = () => {
        navigate("/");
    }

    const shareTwitter = () => {
        const text = `나는 ${results[result].name} 속성의 수하쿠아`
        const url = `https://typeof-suhaqua.web.app`;
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    }

    const openModal = () => {

    }

     // useEffect로 상태 변경 후 작업 처리
     useEffect(() => {
        setTimeout(()=>setIsLoading(false), 3000);
    }, []); // isLoading이 변경될 때마다 실행

    return(
        <Container>
            {
                isLoading ? (
                    <LoadingScreen />
                ) :
                (
                    <>
                <TitleWrapper>
                    <Title>수하쿠아 분석 결과</Title>
                </TitleWrapper>

                <Item>
                    <Image src={results[result].image}></Image>
                </Item>

                <ExplanationBox>
                        <Name>{results[result].name}</Name>
                        <Explanation>
                        {results[result].explanation.split("/").map((sentence, index) => (
                        <React.Fragment key={index}>
                                {sentence}
                                <br />
                        </React.Fragment>
                        ))}
                        </Explanation>
                </ExplanationBox>

                <ResultBox>
                    <ScoreBar score={testData.EI} leftName="활발한" rightName="수줍은" />
                    <ScoreBar score={testData.NS} leftName="몽상적" rightName="현실적" />
                    <ScoreBar score={testData.TF} leftName="쿨한" rightName="정이많은" />
                    <ScoreBar score={testData.PJ} leftName="즉흥적" rightName="철저한" />
                </ResultBox>

                <Item>
                    <GoToButton onClick={openModal}>다른 수하쿠아 보러가기</GoToButton>
                </Item>

                <ButtonGroup>
                <Button className="twitter-share-button" onClick={shareTwitter}>트위터에 결과공유하기</Button>
                <Button onClick={goToMain}>다시하기</Button>
                </ButtonGroup>

                    </>
                )
            }
                
            </Container>
        
    );
}

export default ResultPage;