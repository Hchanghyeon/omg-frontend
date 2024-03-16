import { useState } from "react";
import * as React from 'react';
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
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

export const Section = () => {
    const worldNames = ['스카니아', '루나', '제니스', '크로아', '유니온', '엘리시움', '아케인'];
    const worldNameComponents = worldNames.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))

    const gameNames = ['메이플스토리M', '카트라이더 러쉬플러스', 'V4', '히트2', '바람의 나라 연'];
    const gameNamesComponents = gameNames.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))

    const navigate = useNavigate();

    const [characterName, setCharacterName] = useState('');
    const [characterWorldName, setCharacterWorldName] = useState('');
    const [gameName, setGameName] = useState('');
    const [selectedGame, setSelectedGame] = useState('');
    const [open, setOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (event) => {
        setCharacterWorldName(event.target.value);
    };

    const handleChangeGame = (event) => {
        const game = event.target.value;

        if (game === '') {
            setSelectedGame('');
        }

        if (game !== '메이플스토리M') {
            const error = {"code": "error", "message": "지원 준비중인 게임입니다."};

            handleClickOpen(error);
            return;
        }

        setSelectedGame(game);
        setGameName(game);
    };


    const getData = async () => {
        if (characterName === '' || characterWorldName === '') {
            alert("캐릭터명 또는 월드명을 입력해주세요")
            return;
        }

        let data = {};
        try {
            data = await getMapleStoryMCharacterInfo(characterName, characterWorldName);
        } catch (error) {
            handleClickOpen(error.response.data);
            return;
        }
        navigate('/result', {
            state: data
        });
    }

    const handleClickOpen = (error) => {
        if (error.code === "API-002") {
            setErrorMessage("없는 캐릭터이거나 잘못된 입력 값일 수도 있습니다. 다시 한 번 시도해주세요.");
        } else {
            setErrorMessage(error.message);
        }
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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
                            value={gameName}
                            onChange={handleChangeGame}
                            label="게임명"
                        >
                            {gameNamesComponents}
                        </Select>
                    </FormControl>
                </SelectGameContainer>
                {
                    selectedGame === '메이플스토리M' ? <SearchConatiner>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">월드명</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={characterWorldName}
                                    label="월드명"
                                    onChange={handleChange}
                                >
                                    {worldNameComponents}
                                </Select>
                            </FormControl>
                        </Box>
                        <TextField id="outlined-basic" label="캐릭터명" variant="outlined" onChange={(e) => setCharacterName(e.target.value)} />
                        <SizeButton variant="contained" onClick={getData}>입력</SizeButton>
                    </SearchConatiner> : <></>
                }
            </SectionContainer>
            <React.Fragment>
                <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                >
                    <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                        에러메시지
                    </DialogTitle>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <DialogContent dividers>
                        <Typography gutterBottom>
                            {errorMessage}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            확인
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </>
    )
}

const SizeButton = styled(Button)({
    backgroundColor: '#c86c1ccc',
    height: '55px',
})