import axiosInstance from "src/api/axiosInstance";

export const getGameCharacterSearchRank = async (gameType) => {
    const { data } = await axiosInstance.get(`/rank/${gameType}`);

    return data;    
}