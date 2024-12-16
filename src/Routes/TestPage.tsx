import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AnswerType, questions } from "../assets/types";
import { useState } from "react";

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
    const [index, setIndex] = useState<number>(0); // 0 ~ 11
    //const [mbti, setMBTI] = useState(); //답변 결과 저장할 상태

    const navigate = useNavigate();
    const gotoNext = (e:React.MouseEvent<HTMLInputElement>) => {
        console.log(`${e.currentTarget.value}`);
        // calculateMBTI({e.currentTarget.value});
        if(index > 11 && index < 0) return ;
        setIndex(index+1);
    }
    const gotoResult = () => {
        navigate("/result");
    }

    // const calculateMBTI = (e:React.MouseEvent<HTMLInputElement>) => {
    //     //mbti계산
    //     //E, N, T, J면 +
    //     //I, S, F, P 면 -
    //     const choice:AnswerType = e.currentTarget.value as AnswerType;

    // }

    return(
        <Wrapper>
            <Form onSubmit={gotoResult}>
                <Question>{questions[index].id}. {questions[index].text}</Question>
                {
                    questions[index].options.map((option,i)=> (
                        <div key={i}>
                            <Answer id={option.type} type="radio" onClick={index == 11 ? gotoResult : gotoNext} value={option.type}></Answer>
                            <label htmlFor={option.type}>{option.text}</label>
                        </div>
                    ))
                }

                {
                    index === 11 ? <Submit type="submit" value="결과보기"></Submit> : null
                }
            </Form>
        </Wrapper>
    );
}

export default TestPage;