import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { questions, QuestionType } from "../assets/types";
import { useState, useEffect } from "react";

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
function TestPage(){
    const [index, setIndex] = useState<number>(0); // 0 ~ 11
    const [mbti, setMBTI] = useState({EI: 0, NS: 0, TF: 0, PJ: 0}); //답변 결과 저장할 상태

    const navigate = useNavigate();

    const updateMBTI = (e:React.MouseEvent<HTMLInputElement>) => {
        // 버튼 클릭 시 폼 제출 방지
        if (e.currentTarget.type === "submit") {
            e.preventDefault(); // submit 버튼의 기본 동작 방지
        }
        const score = Number(e.currentTarget.value); // 1이거나 -1
        
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
        if(index < 11) setIndex(index+1); //마지막 페이지가 아니면
    }

    const sendMBTI = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate("/result", {state:mbti});
    }

    useEffect(()=>{
        setMBTI({EI: 0, NS: 0, TF: 0, PJ: 0});
    },[]);

    return(
        <Wrapper>
            <Form onSubmit={sendMBTI} method="get">
                <Question>{questions[index].id}. {questions[index].text}</Question>
                {
                    questions[index].options.map((option,i)=> (
                        <div key={i}>
                            <Answer id={String(option.type)} type={ index == 11 ? "submit" : "radio"} onClick={updateMBTI} value={option.type}></Answer>
                            <label htmlFor={String(option.type)}>{option.text}</label>
                        </div>
                    ))
                }
            </Form>
        </Wrapper>
    );
}

export default TestPage;