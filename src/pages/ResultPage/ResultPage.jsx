import React from "react"
import { useLocation } from "react-router-dom"
import { ResultPageContainer } from "./ResultPage.style";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";
import { ResultSection } from "./components/ResultSection";

export const ResultPage = () => {
    const location = useLocation();
    const gameData = location.state;

    return (
        <ResultPageContainer>
            <Header/>
            <ResultSection character={gameData.result}/>
            <Footer/>
        </ResultPageContainer>
    )
}