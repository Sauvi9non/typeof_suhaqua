import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { results, MBTI } from "../assets/types";
import { Wrapper, EventButton } from "../assets/styles";

const Image = styled.img`
    width: 200px;
`;

const Explanation = styled.p`
    font-size: 1rem;
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

    const shareTwitter = () => {
        const text = `${results[result].name} ${results[result].explanation}`
        const url = `https://typeof-suhaqua.web.app`;
        window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
    }
    return(
        <Wrapper>
            <h1>{results[result].name}</h1>
            <Image src={results[result].image}></Image>
            <Explanation>{results[result].explanation}</Explanation>
            <EventButton onClick={goToMain}>다시하기</EventButton>
            <EventButton className="twitter-share-button" onClick={shareTwitter}>공유하기</EventButton>
            
        </Wrapper>
    );
}

export default ResultPage;