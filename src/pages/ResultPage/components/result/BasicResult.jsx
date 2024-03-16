import React from "react"
import styled from "@emotion/styled";
import { formatDate } from "src/utils/DateChange";
import { Box, BoxTitle, BoxValue, BoxHeader} from "../ResultSection.style";


const BasicResultContainer = styled.div`
    width:100%;
    max-width: 400px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:180px;
`

export const BasicResult = ({basic}) => {
    return (
        <BasicResultContainer>
            <BoxHeader>캐릭터 정보</BoxHeader>
            <Box>
                <BoxTitle>캐릭터 명</BoxTitle><BoxValue>{basic.characterName ?? ""}</BoxValue>
            </Box>
            <Box>
                <BoxTitle>월드 명</BoxTitle><BoxValue>{basic.worldName ?? ""}</BoxValue>
            </Box>
            <Box>
                <BoxTitle>직업</BoxTitle><BoxValue>{basic.characterJobName ?? ""}</BoxValue>
            </Box>
            <Box>
                <BoxTitle>레벨</BoxTitle><BoxValue>Lv.{basic.characterLevel ?? ""}</BoxValue>
            </Box>
            <Box>
                <BoxTitle>성별</BoxTitle><BoxValue>{basic.characterGender ?? ""}</BoxValue>
            </Box>
            <Box>
                <BoxTitle>경험치</BoxTitle><BoxValue>{
                    basic.characterExp !== null ? basic.characterExp.replace(/\B(?=(\d{3})+(?!\d))/g,',') + "EXP" : <>데이터 없음</>
                } </BoxValue>
            </Box>
            <Box>
                <BoxTitle>생성 시각</BoxTitle><BoxValue>
                    {
                    basic.characterExp !== null ? formatDate(new Date(basic.characterDateCreate)) : <>데이터 없음</>
                }</BoxValue>
            </Box>
        </BasicResultContainer>
    )
}