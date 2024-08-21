//GBBInput.jsx
import styled from "styled-components";

const Button = styled.button`
    margin-right: 10px;
    padding: 30px 40px;
    font-size: 20px;
    font-weight: bold;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: fit-content;
    margin-bottom: 10px;

    &:hover {
        background-color: #e0e0e0;
    }
    `;

function GBBInput(props){

    return(
        <div>
            <div>
            <Button onClick={props.handleChoice} value="가위">가위<br/>✌️</Button>
            <Button onClick={props.handleChoice} value="바위">바위<br/>✊</Button>
            <Button onClick={props.handleChoice} value="보">보<br/>🖐️</Button>
            </div>
            <div>&lt;&lt;가위, 바위, 보 하나만 선택하세요&gt;&gt;</div>
        </div>
    );
}

export default GBBInput;