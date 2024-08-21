//GBBPage.jsx

import GBBInput from "./GBBInput";
import GBBResult from "./GBBResult";
import GBBHeader from "./GBBHeader";
import { useState } from "react";
import styled from "styled-components";

const GamePageWrapper = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;

    white-space: pre-wrap;
`;

function GBBGamePage(props){
    const [myChoice, setMyChoice] = useState("");
    const [comChoice, setComChoice] = useState("");
    const [gbbResult, setGbbResult ]= useState("");

    const choices = ["가위", "바위", "보"];

    const handleChoice = (e) => {
        const myChoice = e.target.value;
        console.log(`내 선택 : ${myChoice}`);
        setMyChoice(myChoice);

        const comChoice = choices[Math.floor(Math.random() * 3)];
        setComChoice(comChoice);
        console.log(`컴퓨터 선택 : ${comChoice}`);

        calcResult(myChoice, comChoice); //방법 1 : 상태를 즉시 업데이트할 수 있도록 파라미터로 넘겨줌
    }

    // 방법 2 : useEffect를 사용하여 myChoice, comChoice가 변경될 때 calcResult 실행
    // useEffect(() => {
    //     calcResult();
    // }, [myChoice, comChoice]);

    const calcResult = (myChoice, comChoice) => { 
        let result = "";

        if (myChoice === comChoice) {
            result = "비겼습니다  へ(￣∇￣へ)";
        } else if (myChoice === "가위") {
            if (comChoice === "바위") {
                result = "졌습니다  ｡･ﾟﾟ･(>д<)･ﾟﾟ･｡";
            } else {
                result = "이겼습니다  ヾ(*´∀｀*)ﾉ";
            }
        } else if (myChoice === "바위") {
            if (comChoice === "보") {
                result = "졌습니다  ｡･ﾟﾟ･(>д<)･ﾟﾟ･｡";
            } else {
                result = "이겼습니다  ヾ(*´∀｀*)ﾉ";
            }
        } else { // myChoice === "보"
            if (comChoice === "가위") {
                result = "졌습니다  ｡･ﾟﾟ･(>д<)･ﾟﾟ･｡";
            } else {
                result = "이겼습니다  ヾ(*´∀｀*)ﾉ";
            }
        }

        setGbbResult(result);
    }


    return (
        <GamePageWrapper>
            <GBBHeader/>
            <GBBInput handleChoice={handleChoice}/>
            <GBBResult myChoice={myChoice} comChoice={comChoice} gbbResult={gbbResult}/>
        </GamePageWrapper>
    );
}

export default GBBGamePage;