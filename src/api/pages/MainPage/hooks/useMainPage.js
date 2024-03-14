import { useEffect, useState } from "react"
import { getMapleStoryMCharacterInfo } from "../../../games/getMapleStoryMCharacterInfo";

export const useMainPage = (characterName, worldName) => {
    const [gameData, setGameData] = useState({});

    useEffect(() => { 
        const fetchData = async () => {
            const data = await getMapleStoryMCharacterInfo(characterName, worldName);
            setGameData(data);
        }

        fetchData();
    }, [characterName, worldName]);
    
    return gameData;
}