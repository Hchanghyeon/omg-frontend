import axiosInstance from "../axiosInstance";

export const getMapleStoryMCharacterInfo = async (characterName, worldName) => {
    const { data } = await axiosInstance.get("/games/maplestorym", {params: {characterName, worldName}});

    return data;    
}