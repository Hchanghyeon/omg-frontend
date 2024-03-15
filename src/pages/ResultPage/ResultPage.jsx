import React from "react"
import { useLocation } from "react-router-dom"

export const ResultPage = () => {
    const location = useLocation();
    const data = location.state;

    return (
        <div>
            {JSON.stringify(data)};
        </div>
    )
}