import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import typeof_suhaqua from "../assets/img/typeof_suhaqua.png";
import { Wrapper, EventButton } from "../assets/styles";

const MainImg = styled.img`
    width: 300px;
`

const Title = styled.span`
    font-size: 2rem;
    align: center;
    font-weight: 500;
`

function Main() {
    const navigate = useNavigate();
    const testStart = () => {
        navigate("/typeof_suhaqua");
    }

    return(
            <Wrapper>
                <Title>너는 어떤 수하쿠아니?</Title>
                <MainImg src={typeof_suhaqua} alt="Suhaqua with Alien Sunglasses"></MainImg>
                <EventButton onClick={testStart}>
                시작
                </EventButton>
            </Wrapper>
    );
}

export default Main;