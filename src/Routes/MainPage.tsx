import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import typeof_suhaqua from "../assets/img/typeof_suhaqua.png";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const Start = styled.button`
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
                <Start onClick={testStart}>
                시작
                </Start>
            </Wrapper>
    );
}

export default Main;