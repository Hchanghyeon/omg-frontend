import { useState } from "react";
import * as React from 'react';
import { getMapleStoryMCharacterInfo } from "src/api/games/getMapleStoryMCharacterInfo";
import { SectionContainer, SearchCharacterNameInput, SearchConatiner, SectionHeader } from "./Section.style";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";

export const Section = () => {
    const worldNames = ['스카니아','루나','제니스','크로아','유니온','엘리시움','아케인'];
    const worldNameComponents = worldNames.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))

    const navigate = useNavigate();

    const [characterName, setCharacterName] = useState('');
    const [characterWorldName, setCharacterWorldName] = useState('');

    const handleChange = (event) => {
        setCharacterWorldName(event.target.value);
    };
  

    const getData = async () => {
        if(characterName === '' || characterWorldName === ''){
            alert("캐릭터명 또는 월드명을 입력해주세요")
            return;
        }

        const data = await getMapleStoryMCharacterInfo(characterName, characterWorldName);
        navigate('/result', {
            state: data
        });
    }
    

    return (
        <SectionContainer>
            <SectionHeader>
                메이플스토리M 캐릭터 조회
            </SectionHeader>
            <SearchConatiner>
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
                            {
                                worldNameComponents
                            }
                        </Select>
                    </FormControl>
                </Box>
                <TextField id="outlined-basic" label="캐릭터명" variant="outlined" onChange={(e) => setCharacterName(e.target.value)}  />
                <SizeButton variant="contained" onClick={getData}>입력</SizeButton>
            </SearchConatiner>
        </SectionContainer>
    )
}

const SizeButton = styled(Button)({
  backgroundColor:'#c86c1ccc',
  height:'58px',
})