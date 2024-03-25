import styled from "@emotion/styled";

export const SectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:90%;
    background-color: white;
    border-radius: 10px;
    color:black;
    height:100vh;


@media screen and (max-width: 600px) {
        .table-container {
            font-size:10px;
            max-width: 350px;
            width:100%;
        }

        .table-cell {
            font-size:12px;
        }

        .table-cell-table {
            width:20px;
            font-size:12px;
        }

        input {
            width:80px;
            font-size:12px;
        }

        label {
            font-size:12px;
        }

        .size-button {
            height: 48px;
        }

        table {
            width:300px;
        }
    }

`

export const SearchConatiner = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
`

export const SectionHeader = styled.div`
    font-size:24px;
    font-weight: bold;
    margin-bottom: 15px;

    @media only screen and (max-width: 600px){
        font-size:18px;
    }
`

export const SelectGameContainer = styled.div`
    
`