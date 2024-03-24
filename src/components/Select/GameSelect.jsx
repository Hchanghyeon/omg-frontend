import React from "react"
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const GameSelect = (menuData, selectValue, handleSelectOnChange) => {
    const MenuItems = menuData.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))
    
    return (
        <FormControl variant="standard" sx={{ m: 2, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">게임명</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={selectValue.name}
                onChange={handleSelectOnChange}
                label="게임명"
            >
                {MenuItems}
            </Select>
        </FormControl>
    )
}