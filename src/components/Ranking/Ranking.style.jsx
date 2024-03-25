import styled from '@emotion/styled';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';

export const CustomTableCell = styled(TableCell)({
    backgroundColor:"#3f3bde",
    color: 'white'
})

export const CustomTableContainer = styled(TableContainer)({
    borderStyle:"solid",
    borderColor:"white",
    borderWidth:"1px"
})


export const RankingContainer = styled.div`

`

export const RankingHeader = styled.div`
    margin-top:50px;
    margin-bottom:10px;
    text-align: center;
    font-size:18px;
    font-weight: bold;


    @media only screen and (max-width: 600px){
        font-size:15px;
    }
`

export const RankingSubHeader = styled.div`
    text-align: right;
    margin-top:5px;
    margin-bottom:5px;
    font-size:12px;

    color:gray;
    @media only screen and (max-width: 600px){
        font-size:11px;
    }
`

export const RankingRefreshTimer = styled.div`
    text-align: center;
    margin-top:10px;
    font-size:13px;
    font-weight: bold;
    color:gray;

    @media only screen and (max-width: 600px){
        font-size:11px;
    }
`
