import { useState, useEffect } from "react";
import * as React from 'react';
import { getGameCharacterSearchRank } from "src/api/games/getGameCharacterSearchRank";
import { getMapleStoryMCharacterInfo } from "src/api/games/getMapleStoryMCharacterInfo";
import { SectionContainer, SearchConatiner, SectionHeader, SelectGameContainer } from "./Section.style";
import { useNavigate } from 'react-router-dom';
import { ErrorModal } from "src/components/Modal/ErrorModal";
import { mapleStoryWorldNames } from "src/constants/mapleStory";
import { gameInfo } from "src/constants/games";
import { RankingTable } from "src/components/Ranking/Ranking";
import { SubmitButton } from "src/components/Button/SubmitButton";
import { CharacterNameTextField } from "src/components/TextField/CharacterNameTextField";
import { GameDetailSelect } from "src/components/Select/GameDetailSelect";
import { GameSelect } from "src/components/Select/GameSelect";

export const Section = () => {
    const characterInputError = new Error("캐릭터명 또는 월드명을 입력해주세요.");
    const errorModalTitle = "에러 메시지입니다.";

    const [characterName, setCharacterName] = useState('');
    const [characterWorldName, setCharacterWorldName] = useState('');
    const [selectedGame, setSelectedGame] = useState({});
    const [rank, setRank] = useState([]);
    const [timer, setTimer] = useState(10);
    const [isRankDataAvailable, setIsRankDataAvailable] = useState(false);
    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorModalContent, setErrorModalContent] = useState('');

    const navigate = useNavigate();

    // 선택한 게임에 따라 변경되는 Input 값을 처리하기 위한 메서드
    const handleChangeGame = (event) => {
        const game = event.target.value;

        if (game === '') {
            setSelectedGame('');
        }

        if (game !== '메이플스토리M') {
            const error = { "code": "error", "message": "지원 준비중인 게임입니다." };

            setSelectedGame(gameInfo[0]);
            handleErrorModalOpen(error);
            return;
        }

        const selected = gameInfo.filter(item => item.name === game);

        setSelectedGame(selected[0]);
    };

    // 랭킹 데이터 갱신
    useEffect(() => {
        const fetchData = async () => {
            const rankData = await getGameCharacterSearchRank(selectedGame.uri);
            setRank(rankData);
            setIsRankDataAvailable(rankData && rankData.length > 0);
        };

        if (selectedGame.name) {
            fetchData();
            const interval = setInterval(() => {
                fetchData();
                setTimer(10);
            }, 10000);

            const timerInterval = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);


            return () => {
                clearInterval(interval);
                clearInterval(timerInterval);
            }
        }
    }, [selectedGame]);


    // 캐릭터 정보 불러오는 메서드
    const getCharacterData = async () => {
        if (characterName === '' || characterWorldName === '') {
            handleErrorModalOpen(characterInputError);
            return;
        }

        let data = {};
        try {
            data = await getMapleStoryMCharacterInfo(characterName, characterWorldName);
        } catch (error) {
            handleErrorModalOpen(error.response.data);
            return;
        }
        navigate('/result', {
            state: data
        });
    }

    // 월드명 갱신 메서드
    const handleChange = (event) => {
        setCharacterWorldName(event.target.value);
    };

    // ErrorModal 관련 메서드
    const handleErrorModalOpen = (error) => {
        if (error.code === "API-002") {
            setErrorModalContent("없는 캐릭터이거나 잘못된 입력 값일 수도 있습니다. 다시 한 번 시도해주세요.");
        } else {
            setErrorModalContent(error.message);
        }

        setErrorModalOpen(true);
    };

    const handleErrorModalClose = () => {
        setErrorModalOpen(false);
    };


    return (
        <>
            <SectionContainer>
                <SectionHeader>
                    모바일 게임 캐릭터 조회 서비스
                </SectionHeader>
                <SelectGameContainer>
                    <GameSelect
                        menuData={gameInfo}
                        selectValue={selectedGame}
                        handleSelectOnChange={handleChangeGame}
                    />
                </SelectGameContainer>
                <SearchConatiner>
                    {
                        selectedGame.name === '메이플스토리M' ?
                            <>
                                <GameDetailSelect
                                    menuData={mapleStoryWorldNames}
                                    selectValue={characterWorldName}
                                    handleSelectOnChange={handleChange}
                                />
                                <CharacterNameTextField
                                    setInputValue={setCharacterName}
                                    handleEnterSubmit={getCharacterData}
                                />
                                <SubmitButton handleButtonSubmit={getCharacterData} />
                            </> : <></>
                    }
                </SearchConatiner>
                {
                    selectedGame.name && isRankDataAvailable && <RankingTable rank={rank} timer={timer} />
                }
            </SectionContainer>
            <ErrorModal
                errorModalOpen={errorModalOpen}
                errorModalContent={errorModalContent}
                errorModalTitle={errorModalTitle}
                handleErrorModalClose={handleErrorModalClose}
                handleErrorModalOpen={handleErrorModalOpen}
            />
        </>
    )
}

