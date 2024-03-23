import { useState, useEffect } from "react";
import * as React from 'react';
import { getGameCharacterSearchRank } from "src/api/games/getGameCharacterSearchRank";
import { getMapleStoryMCharacterInfo } from "src/api/games/getMapleStoryMCharacterInfo";
import { SectionContainer, SearchConatiner, SectionHeader, SelectGameContainer } from "./Section.style";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { ErrorModal } from "src/components/Modal/ErrorModal";
import { mapleStoryWorldNames } from "src/constants/mapleStory";
import { gameInfo } from "src/constants/games";
import { RankingTable } from "src/components/Ranking/Ranking";

export const Section = () => {
    const mapleStoryWorldNamesComponents = mapleStoryWorldNames.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))
    const gameInfosComponents = gameInfo.map((value, index) => (<MenuItem key={index} value={value.name}>{value.name}</MenuItem>))

    const navigate = useNavigate();

    const [characterName, setCharacterName] = useState('');
    const [characterWorldName, setCharacterWorldName] = useState('');
    const [selectedGame, setSelectedGame] = useState({});
    const [rank, setRank] = useState([]);
    const [timer, setTimer] = useState(10);
    const [isRankDataAvailable, setIsRankDataAvailable] = useState(false); 

    const [errorModalOpen, setErrorModalOpen] = useState(false);
    const [errorModalContent, setErrorModalContent] = useState('');
    const errorModalTitle = "에러 메시지입니다.";

    const handleChange = (event) => {
        setCharacterWorldName(event.target.value);
    };

    const handleChangeGame = (event) => {
        const game = event.target.value;

        if (game === '') {
            setSelectedGame('');
        }

        if (game !== '메이플스토리M') {
            const error = { "code": "error", "message": "지원 준비중인 게임입니다." };

            handleErrorModalOpen(error);
            return;
        }

        const selected = gameInfo.filter(item => item.name === game);

        setSelectedGame(selected[0]);
    };

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


    const getCharacerData = async () => {
        if (characterName === '' || characterWorldName === '') {
            const error = new Error();
            error.message = "캐릭터명 또는 월드명을 입력해주세요";

            handleErrorModalOpen(error);
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
                    <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-standard-label">게임명</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={selectedGame.name}
                            onChange={handleChangeGame}
                            label="게임명"
                        >
                            {gameInfosComponents}
                        </Select>
                    </FormControl>
                </SelectGameContainer>
                {
                    selectedGame.name === '메이플스토리M' ? <SearchConatiner>
                        <Box sx={{ minWidth: 120 }} className="form-control">
                            <FormControl fullWidth>
                                <InputLabel className="table-cell" id="filled-basic">월드명</InputLabel>
                                <Select
                                    className="table-cell"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={characterWorldName}
                                    label="월드명"
                                    onChange={handleChange}
                                >
                                    {mapleStoryWorldNamesComponents}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField className="table-cell" required id="outlined-required" label="캐릭터명" onChange={(e) => setCharacterName(e.target.value)} onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                getCharacerData();
                            }
                        }}/>
                        <SizeButton className="size-button" variant="contained" onClick={getCharacerData}>입력</SizeButton>
                    </SearchConatiner> : <></>
                }{
                    selectedGame.name && isRankDataAvailable ? <RankingTable rank={rank} timer={timer} /> : <></>
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


const SizeButton = styled(Button)({
    backgroundColor: '#3f3bde',
    height: '55px',
})