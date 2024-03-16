import React from "react"
import styled from "@emotion/styled";
import { Box, BoxHeader, BoxTitle, BoxValue } from "../ResultSection.style";

const StatResultContainer = styled.div`
    width:100%;
    max-width: 400px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    height:180px;
`
export const StatResult = ({stat}) => {

    return (
        <StatResultContainer>
            <BoxHeader>캐릭터 스탯</BoxHeader>
            {
                stat.stat.map((characterStat, index) => 
                    (
                    <Box key={index}>
                         <BoxTitle>{characterStat.statName}</BoxTitle><BoxValue>{characterStat.statValue.replace(/\B(?=(\d{3})+(?!\d))/g,',')}</BoxValue>
                    </Box>
                    )
                )
            
            }
        </StatResultContainer>
    )
}