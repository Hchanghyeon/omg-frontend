import styled from "@emotion/styled"

export const ResultSectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width:100%;
    height:100%;

            @media only screen and (max-width: 600px){
        h2 {
            font-size:18px;
        }
    }
`
export const BasicHeader = styled.div`
    width:100%;
`

export const CharacterContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-bottom:10px;
    color:black;
    background-color: white;
    border-radius: 10px;
    padding:10px;
    box-sizing: border-box;

    @media screen and (max-width: 600px) {
        > div {
            margin-top:10px;
        }   

        font-size: 13px;
    }
`

export const ItemHeader = styled.div`
    width:100%;
`

export const ItemContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    border-bottom-style: solid;
    border-bottom-color:silver;
    border-bottom-width: 1px;
    padding-bottom:10px;


`

export const StatHeader = styled.div`
    width:100%;
`

export const StatContainer = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    border-bottom-style: solid;
    border-bottom-color:silver;
    border-bottom-width: 1px;
    padding-bottom:10px;
`

export const LoginLogoutDate = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top:10px;
    padding-bottom: 15px;
    font-size:11px;
`

export const LoginDate = styled.div`
    color:black;
`
export const LogoutDate = styled.div`
    color:black;
`

export const Box = styled.div`
    width:100%;
    display:flex;
    justify-content: center;
    align-items: center;
`

export const BoxTitle = styled.div`
color: #3f3bde;
    width:100px;
`

export const BoxValue = styled.div`
    width:300px;
`

export const BoxHeader = styled.div`
    font-size:20px;
    margin-bottom:7px;
    width:300px;

    @media only screen and (max-width: 600px){
        font-size:16px;
    }
`

export const BoxHeaderCenter = styled.div`
    font-size:20px;
    margin-bottom:10px;
    width:300px;
    text-align: center;
    color:black;

            @media only screen and (max-width: 600px){
        font-size:16px;
    }
`

export const ItemBox = styled.div`
    box-shadow: 3px 3px 3px gray;
    max-width:200px;
    width:100%;
    height:60px;
    margin:5px 5px;
    padding:8px;
    box-sizing: border-box;
    border-radius: 5px;
    background-color: white;
    display:flex;
    justify-content: center;
    flex-direction: column;
`
export const ItemBoxTitle = styled.div`
    font-size:12px;
    color:#3f3bde;
`

export const ItemBoxValue = styled.div`
    font-size:11px;
`

export const ItemContainerWrapper = styled.div`
    background-color: white;
    padding:20px;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`