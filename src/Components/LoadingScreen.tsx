import styled from "styled-components";
import { Container } from "../assets/styles";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`
const AnimatedText = styled.p`
  font-size: 2rem;
  color: white;
  position: relative;

  &::after {
    content: "수하쿠아 성분 분석 중";
    animation: fadeInText 3s steps(5) infinite;
  }

  @keyframes fadeInText {
    0% {
      content: "수하쿠아 성분 분석 중";
    }
    25% {
      content: "수하쿠아 성분 분석 중.";
    }
    75% {
      content: "수하쿠아 성분 분석 중..";
    }
    100% {
      content: "수하쿠아 성분 분석 중...";
    }
  }
`

function LoadingScreen() {

    return(
        <Container>
        <Wrapper>
            <AnimatedText>
            </AnimatedText>
        </Wrapper>
        </Container>
    );
}

export default LoadingScreen;