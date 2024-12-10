import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`

`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const Question = styled.span`
    font-size: 2rem;
    font-weight: 400;
`;

const Answer = styled.input`
    width: 30%;
    padding: 10px 20px;
    margin: 20px;
    border-radius: 10px;
    color: black;
    display: none;
`

const Submit = styled.input`
    width: 30%;
    padding: 10px 20px;
    font-size: 2rem;
    background-color: white;
    color: black;
    border-radius: 30px;
    outline: none;
`

function TestPage(){
    const navigate = useNavigate();
    const gotoNext = () => {
        alert("gotoNext");
    }

    const gotoResult = () => {
        navigate("/result");
    }

    return(
        <Wrapper>
            <Form onSubmit={gotoResult}>
                
            <Question>여기에는 어쩌다가 들어오게 되었니?</Question>

            <Answer id="a" type="radio" onClick={gotoNext} ></Answer>
            <label htmlFor="a" >버추얼 세계의 신비로운 힘에 의해</label>

            <Answer id="b" type="radio" onClick={gotoNext} ></Answer>
            <label htmlFor="b">수하가 쿠팡에서 시켰어</label>

            <Submit type="submit" value="결과보기"></Submit>
            </Form>

        </Wrapper>
    );
}

export default TestPage;