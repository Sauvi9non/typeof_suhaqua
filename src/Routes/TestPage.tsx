import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { questions, QuestionType } from "../assets/types";
import { useState } from "react";

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between
    text-align: center;
`

const Question = styled.p`
    font-size: 1.5rem;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`

const QuestionNumber = styled.p`
    font-size: 1.25rem;
    text-align: center;
    @media (max-width: 576px) {
        font-size: 1.25rem;
    }
`

const AnswerInput = styled.input`
    display: none;
`

const AnswerLabel = styled.label`
    width: 100%;
    color: black;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: 1.25em;

    &:focus {
        background-color: lightgray;
        cursor: pointer;
    }

    @media (max-width: 576px) {
        font-size: 1rem;
    } 
`;

const BoxItem = styled.div`
    padding: 20px;
    margin: 10px 0px;
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
            <Form id="mbtiForm" method="get">
               <BoxItem>
                    <QuestionNumber>{questions[index].id} / 12</QuestionNumber>
                    <Question>{questions[index].text}</Question>
                </BoxItem>

                <BoxItem>
                {
                    questions[index].options.map((option,i)=> (
                            <BoxItem>
                            <AnswerLabel htmlFor={String(option.type)} key={i}>{option.text}
                            <AnswerInput id={String(option.type)} type= "radio" value={option.type} onClick={updateMBTI}></AnswerInput>
                            </AnswerLabel>
                            </BoxItem>
                    ))
                }
                </BoxItem>
            </Form>
    );
}

export default TestPage;