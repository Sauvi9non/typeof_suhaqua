import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { questions, QuestionType } from "../assets/types";
import { useState } from "react";
import { Container } from "../assets/styles";
import React from "react";
import ProgressBar from "../Components/ProgressBar";

const QuestionBox = styled.div`
    width: 400px;
    height: 72px;
    padding: 2rem;
    margin: 100px auto;
    text-align: center;
    background-color: #A5C8FF;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Question = styled.p`
    font-size: 1.5rem;
    color: black;
`

const AnswerBox = styled.div`
    width: 400px;
    height: 440px;
    padding: 2rem 1rem;
    background-color: white;
    border-radius: 20px;
    display: grid;
    grid-gap: 2rem;
    grid-template-rows: repeat(auto-fill, 1fr);
    grid-auto-rows: 1fr;
    place-items: center;
`

const AnswerInput = styled.input`
    display: none;
`

const AnswerLabel = styled.label`
    height: 100%;
    width: 360px;
    padding: 10px 20px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.25rem;
    background-color: #A5C8FF;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #E0E0E0;
        color: #0063FF;
    }
    
    &:focus {
        cursor: pointer;
        background-color: #E0E0E0;
        color: #0063FF;
    }
`;

const AnswerText = styled.p`
    text-align: center;
`



function TestPage(){ //여기서 계속 변하는 건 index와 mbti 클릭할 때 마다 바뀌면 계속해서 리렌더링이 일어난다.
    const [index, setIndex] = useState<number>(0); // 0 ~ 11
    const [mbti, setMBTI] = useState({EI: 0, NS: 0, TF: 0, PJ: 0}); //답변 결과 저장할 상태

    const navigate = useNavigate();

    const updateMBTI = (e:React.MouseEvent<HTMLInputElement>) => {
        const score = Number(e.currentTarget.value); // 1이거나 -1
        console.log("updateMBTI, score, index" + score + index);
        
        //현재 인덱스의 questionTYPE에 따라서,
        switch(questions[index].type) {
            case QuestionType.ei:
                setMBTI((prevMBTI)=> ({
                    ...prevMBTI,
                    EI : prevMBTI.EI + score
                }));
                break;
            case QuestionType.ns:
                setMBTI((prevMBTI)=> ({
                    ...prevMBTI,
                    NS : prevMBTI.NS + score
                }));
                break;
            case QuestionType.tf:
                setMBTI((prevMBTI)=> ({
                    ...prevMBTI,
                    TF : prevMBTI.TF + score
                }));
                break;
            case QuestionType.pj:
                setMBTI((prevMBTI)=> ({
                    ...prevMBTI,
                    PJ : prevMBTI.PJ + score
                }));
                break;
            default:
                console.log("something was wrong");
                break;
        }

        //그리고 index 처리
        if(index < 11) setIndex( (index) => index + 1 ); //마지막 페이지가 아니면
        console.log("updateMBTI, mbti, index" + mbti + index);

        if(index === 11) navigate("/result", {state:mbti});
    }

    return(
        <Container>
                <ProgressBar progress={(index+1)}></ProgressBar>
                    <QuestionBox>
                        <Question>{
                        questions[index].text.split("/").map((sentence,index)=>(
                            <React.Fragment key={index}>
                                {sentence}
                            </React.Fragment>
                        ))
                        }</Question>
                    </QuestionBox>

                    <AnswerBox>
                    {
                        questions[index].options.map((option,i)=> (
                                <AnswerLabel htmlFor={String(option.type)} key={i}>
                                    <AnswerText>
                                    {
                                        option.text.split("/").map((sentence,index)=>(
                                            <React.Fragment key={index}>
                                                {sentence} <br/>
                                            </React.Fragment>
                                        ))
                                    }
                                    </AnswerText>
                                <AnswerInput id={String(option.type)} type= "radio" value={option.type} onClick={updateMBTI}></AnswerInput>
                                </AnswerLabel>
                        ))
                    }
                    </AnswerBox>

        </Container>
    );
}

export default TestPage;