import styled from "@emotion/styled";

export const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    display:flex;
    align-items: center;
    margin-top:10px;
    margin-bottom:10px;
    height: 60px;
    justify-content: center;
`;

export const FooterText = styled.div`
    font-size:12px;
    font-weight: bold;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        color: white;
        text-decoration: none;
    }

    @media only screen and (max-width: 600px){
        font-size:10px;
    }
`
