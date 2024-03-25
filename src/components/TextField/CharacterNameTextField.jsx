import React from "react";
import { TextField } from "@mui/material";

export const CharacterNameTextField = ({ setInputValue, handleEnterSubmit }) => {
    return <TextField
                className="table-cell"
                required id="outlined-required"
                label="캐릭터명"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleEnterSubmit();
                    }
                }}
            />
}
