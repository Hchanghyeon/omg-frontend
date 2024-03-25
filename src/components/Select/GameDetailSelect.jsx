import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const GameDetailSelect = ({menuData, selectValue, handleSelectOnChange}) => {
    const MenuItems = menuData.map((value, index) => (<MenuItem key={index} value={value}>{value}</MenuItem>))

    return (
        <Box sx={{ minWidth: 120 }} className="form-control">
            <FormControl fullWidth>
                <InputLabel className="table-cell" id="filled-basic">월드명</InputLabel>
                <Select
                    className="table-cell"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectValue}
                    label="월드명"
                    onChange={handleSelectOnChange}
                >
                    {MenuItems}
                </Select>
            </FormControl>
        </Box>

    )
}