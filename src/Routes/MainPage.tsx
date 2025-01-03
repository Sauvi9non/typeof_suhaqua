import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import typeof_suhaqua from "../assets/img/typeof_suhaqua.png";
import { Container, Item} from "../assets/styles";

const MainImg = styled.img`
    width: 200px;

    @media (max-width: 576px) {
        width: 50%;
    }
`

const Title = styled.span`
    font-size: 2.5rem;
    font-weight: 400;
    color: white;

    @media (max-width: 576px) {
        font-size: 2rem;
    }
`

const Button = styled.button`
    padding: 10px 50px;
    font-size: 1.5rem;
    border-radius: 50px;
    border : none;
    background-color: white;
    width: 200px;
    color: #5597FF;
    transition: all 0.3s ease;

    &:hover {
        cursor: pointer;
        background-color: #E0E0E0;
        color: #0063FF;
    }
`

function Main() {
    const navigate = useNavigate();
    const testStart = () => {
        navigate("/typeof_suhaqua");
    }

    return(
            <Container>
                        <Item>
                            <Title>너는 어떤 수하쿠아니?</Title>
                        </Item>
                        <Item>
                            <MainImg src={typeof_suhaqua} alt="Suhaqua with Alien Sunglasses"></MainImg>
                        </Item>
                        <Item>
                            <Button onClick={testStart}>시작하기</Button>                    
                        </Item>
            </Container>
    );
}

export default Main;