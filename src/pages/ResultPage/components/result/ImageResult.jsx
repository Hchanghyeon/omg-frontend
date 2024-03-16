import React from "react"
import styled from "@emotion/styled";
import { Tooltip } from "@mui/material";

const ImageResultContainer = styled.div`
    width:100%;
    max-width: 150px;
    height:180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width:100px;
    }

    > div {
        margin-top: 5px;
        font-size:10px;
        color:silver;
    }
`


export const ImageResult = () => {
    return (
        <ImageResultContainer>
            <Tooltip title="캐릭터의 이미지는 넥슨에서 제공되지 않아 기본이미지로 설정합니다.">
                <img src="/images/image.png"></img>
            </Tooltip>
            <div>이미지를 제공하지 않습니다.</div>
        </ImageResultContainer>
    )
}