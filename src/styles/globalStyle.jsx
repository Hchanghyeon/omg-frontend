import { Global, css } from "@emotion/react"

const style = css`
    @font-face {
        font-family: "GmarketSansTTFMedium";
        font-weight: normal;
        src: url("../fonts/GmarketSansTTFMedium.ttf") format("truetype");
    }

    body {
        background-color: #3f3bde;
        color:white;
        margin: 0 auto;
        width:100%;
        max-width: 1024px;
        height: 100dvh; 
        font-family: "GmarketSansTTFMedium";
    }

    #root {
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
`

const GlobalStyle = () => {
    return <Global styles={style} />;
};
  
export default GlobalStyle;