import React from "react"
import { useMainPage } from "./hooks/useMainPage"

export const MainPage = () => {
    const gameData = useMainPage("황창구리","스카니아");

    return (
        <div>
            {JSON.stringify(gameData)};
        </div>
    )
}