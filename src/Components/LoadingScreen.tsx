import styled from "styled-components";

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
`
const AnimatedText = styled.span`
font-size: 2rem;
  color: white;
  position: relative;

  &::after {
    content: "수하쿠아 성분 분석 중.";
    animation: fadeInText 1s steps(3) infinite;
  }

  @keyframes fadeInText {
    0% {
      content: "수하쿠아 성분 분석 중.  ";
    }
    50% {
      content: "수하쿠아 성분 분석 중.. ";
    }
    100% {
      content: "수하쿠아 성분 분석 중...";
    }
  }
`

function LoadingScreen() {

    return(
        <Wrapper>
            <AnimatedText>
            </AnimatedText>
        </Wrapper>
    );
}

export default LoadingScreen;