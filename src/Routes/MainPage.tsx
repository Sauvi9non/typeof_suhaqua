import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

function Main() {
    const navigate = useNavigate();
    const testStart = () => {
        navigate("/typeof_suhaqua");
    }

    return(
            <Start onClick={testStart}>
                시작
            </Start>
    );
}

export default Main;