import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import typeof_suhaqua from "../assets/img/typeof_suhaqua.png";

const MainImg = styled.img`
    width: 200px;

    @media (max-width: 576px) {
        width: 100px;
    } 
`

const Title = styled.span`
    font-size: 2rem;
    align: center;
    font-weight: 500;
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

const Container = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
`

const BoxItem = styled.div`
    padding: 20px;
    margin: 10px 0px;
`

function Main() {
    const navigate = useNavigate();
    const testStart = () => {
        navigate("/typeof_suhaqua");
    }

    return(
            <Container>
                <BoxItem>
                    <Title>너는 어떤 수하쿠아니?</Title>
                </BoxItem>
                <BoxItem>
                    <MainImg src={typeof_suhaqua} alt="Suhaqua with Alien Sunglasses"></MainImg>
                </BoxItem>
                <BoxItem>
                    <Button onClick={testStart}>시작</Button>                    
                </BoxItem>
            </Container>
    );
}

export default Main;