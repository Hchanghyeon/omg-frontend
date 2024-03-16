import React from "react"
import styled from "@emotion/styled";
import { ItemBox, ItemBoxTitle, ItemBoxValue, BoxHeader } from "../ResultSection.style";


const ItemResultContainer = styled.div`
    width:100%;
    max-width: 650px;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom:20px;
`

export const ItemResult = ({ item, type }) => {
    return (
        <ItemResultContainer>
            {type === "cash" ? item.filter(itemInfo => itemInfo.itemName.includes("Cash"))
                .map(itemInfo => {
                    return (
                        <ItemBox>
                            <ItemBoxTitle>{itemInfo.itemEquipmentSlotName}</ItemBoxTitle>
                            <ItemBoxValue>{itemInfo.itemName}</ItemBoxValue>
                        </ItemBox>
                    )
                }) : item.filter(itemInfo => !itemInfo.itemName.includes("Cash"))
                .map(itemInfo => {
                    return (
                        <ItemBox>
                            <ItemBoxTitle>{itemInfo.itemEquipmentSlotName}</ItemBoxTitle>
                            <ItemBoxValue>{itemInfo.itemName}</ItemBoxValue>
                        </ItemBox>
                    )
                })}
        </ItemResultContainer>
    )
}