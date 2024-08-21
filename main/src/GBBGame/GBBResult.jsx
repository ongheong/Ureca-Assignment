//GBBResult.jsx

import styled from "styled-components";

const ResultWrapper = styled.div`
    margin-top: 50px;
    font-size: 20px;
    text-align: center;
    padding: 20px;
    border: 1px solid #f0f0f0;
    padding: 20px 10px;
    background-color: #f9f9f9;
    border-radius: 5px;
`;

const ChoiceWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`;

const Choice = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    color: ${props => props.color};
    `;

function GBBResult(props){
    return(
        <ResultWrapper>
            <ChoiceWrapper>
                <Choice color={"black"}>당신의 선택<br />{props.myChoice}</Choice>
                <Choice color={"blue"}>컴퓨터의 선택<br />{props.comChoice}</Choice>
            </ChoiceWrapper>
            <div>결과: {props.gbbResult}</div>
        </ResultWrapper>
    );
}

export default GBBResult;