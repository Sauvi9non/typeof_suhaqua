import styled from "styled-components";

const Bar = styled.div`
    width: 90%;
    height: 40px;
    border-radius: 50px;
    background-color: white;
    display: flex;
    align-items: center;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
`;

const Progress = styled.div<{progress: number}>`
    width: ${({progress})=>`calc(100% * ${progress} / 12)`};
    height: 20px;
    border-radius: 50px;
    background-color: #5597FF;
    transition: width 0.5s ease;
    transform-origin: left;
    margin: 10px;
`;

type ProgressBarProps = {
    progress: number;
}

function ProgressBar({progress}:ProgressBarProps) {
    return(
        <Bar>
            <Progress progress={progress}></Progress>
        </Bar>
    );
}

export default ProgressBar;