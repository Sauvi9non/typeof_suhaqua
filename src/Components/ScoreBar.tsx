import styled from "styled-components";

const BarWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    place-items: center;
    margin: 1rem auto;
`;

const BarLabel = styled.span`
    margin: 0;
`

const Bar = styled.div<{score: number}>`
    width: 300px;
    height: 40px;
    border-radius: 50px;
    background-color: lightgray;
    display: flex;
    flex-direction: row;
    justify-content: center;
    overflow: hidden;
    transition: width 1.0s ease;
`;

const Left = styled.div`
    background-color: #A7A6FF;
    border-radius: 50px 0px 0px 50px;
    width: 1%;
    height: 40px;
    margin: 0px;
    transition: width 1.0s ease;
`;

const Right = styled.div`
    background-color: #A5FEFC;
    border-radius: 0px 50px 50px 0px;
    width: 1%;
    height: 40px;
    margin: 0px;
    transition: width 1.0s ease;
`;

type ScoreBarProps = {
    score: number;
    leftName: string;
    rightName: string;
}

function ScoreBar({score, leftName, rightName}: ScoreBarProps){
    const absScore = Math.abs(score);
    return(

        <BarWrapper>
            <BarLabel style={{color: "#624CBA"}}>{leftName}</BarLabel>
            <Bar score={score}>
            {
                ( score < 0 ) ?
                    <>
                    <Left style={{ width:`${33*absScore+1}%`}}></Left>
                    <Right style={{ width: `${(33*(3-absScore))}%`}}></Right>
                    </>
                :   <>
                    <Left style={{ width:`${(33*(3-absScore))+1}%`}}></Left>
                    <Right style={{ width: `${33*absScore}%`}}></Right>
                    </>
            }
        </Bar>
            <BarLabel style={{color: "#2BADAB"}}>{rightName}</BarLabel>
        </BarWrapper>

    );
}

export default ScoreBar;