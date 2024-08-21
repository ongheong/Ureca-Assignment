//GBBHeader.jsx

import styled from "styled-components";

const Title = styled.h1`
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 10px;
    `;

const SubTitle = styled.div`
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 20px;
    `;

function GBBHeader(props){
    return(
        <div>
            <Title>가위바위보 게임</Title>
            <hr />
            <SubTitle>컴퓨터와 가위바위보를 해보세요!</SubTitle>
        </div>
    );
}

export default GBBHeader;