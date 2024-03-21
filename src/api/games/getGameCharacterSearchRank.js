import axiosInstance from "src/api/axiosInstance";

export const getGameCharacterSearchRank = async (gameType) => {
    const { data } = await axiosInstance.get(`/games/${gameType}/rank`);

    return data;    
}