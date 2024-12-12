import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { questions } from "../assets/types";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

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
            <h1>{questions[3].id}</h1>
            <Question>{questions[3].text}</Question>
            {
                questions[3].options.map((option,i)=> (
                    <div key={i}>
                        <Answer id={option.type} type="radio" onClick={gotoNext} value={option.type}></Answer>
                        <label htmlFor={option.type}>{option.text}</label>
                    </div>
                ))
            }

            <Submit type="submit" value="결과보기"></Submit>
            </Form>

        </Wrapper>
    );
}

export default TestPage;