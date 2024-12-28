import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import typeof_suhaqua from "../assets/img/typeof_suhaqua.png";
import { Container, Item} from "../assets/styles";

const MainImg = styled.img`
    width: 300px;
`

const Title = styled.span`
    font-size: 3rem;
    font-weight: 400;
    color: white;
`

const Button = styled.button`
    padding: 10px 50px;
    font-size: 3rem;
    border-radius: 50px;
    border : none;
    background-color: white;
    width: 400px;
    color: #5597FF;

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