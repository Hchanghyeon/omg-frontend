import React from "react"
import {
    CharacterContainer,
    BasicHeader,
    BoxHeaderCenter,
    ResultSectionContainer,
    LoginLogoutDate,
    LoginDate,
    LogoutDate,
    ItemContainer,
    ItemContainerWrapper
} from "./ResultSection.style"
import { BasicResult } from "./result/BasicResult";
import { StatResult } from "./result/StatResult";
import { formatDate } from "src/utils/DateChange";
import { ImageResult } from "./result/ImageResult";
import { ItemResult } from "./result/ItemResult";

export const ResultSection = ({ character }) => {
    return (
        <ResultSectionContainer>
            <BasicHeader>
                <h2>캐릭터 기본 정보</h2>
            </BasicHeader>
            <CharacterContainer>
                <ImageResult />
                <BasicResult basic={character.characterBasic} />
                <StatResult stat={character.characterStat} />
            </CharacterContainer>
            <LoginLogoutDate>
                <LoginDate>마지막 로그인 {formatDate(new Date(character.characterBasic.characterDateLastLogin))}</LoginDate>
                <LogoutDate>마지막 로그아웃 {formatDate(new Date(character.characterBasic.characterDateLastLogout))}</LogoutDate>
            </LoginLogoutDate>
            <ItemContainer>
                <h2>캐릭터 장비 정보</h2>
                <ItemContainerWrapper>
                    <BoxHeaderCenter>캐시</BoxHeaderCenter>
                    <ItemResult item={character.characterItemEquipment.itemEquipment} type={"cash"}></ItemResult>
                    <BoxHeaderCenter>일반</BoxHeaderCenter>
                    <ItemResult item={character.characterItemEquipment.itemEquipment} type={"normal"}></ItemResult>
                </ItemContainerWrapper>
            </ItemContainer>
        </ResultSectionContainer>
    )
}