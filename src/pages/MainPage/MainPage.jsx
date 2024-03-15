import React from "react"
import { MainPageContainer } from "./MainPage.style"
import { Header } from "src/components/Header/Header"
import { Section } from "./components/Section"
import { Footer } from "src/components/Footer/Footer"

export const MainPage = () => {
    return (
        <MainPageContainer>
            <Header/>
            <Section/>
            <Footer/>
        </MainPageContainer>
    )
}