import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

export const SubmitButton = ({handleButtonSubmit}) => {
    return <CustomButton className="size-button" variant="contained" onClick={handleButtonSubmit}>입력</CustomButton>;
}

const CustomButton = styled(Button)({
    backgroundColor: '#3f3bde',
    height: '55px',
})