import React, { useState } from "react"

export const GameContext = React.createContext()

export const GameProvider = (props) => {
    const [games, setGames] = useState([])

    const getGames = () => {
        return fetch("http://localhost:8000/games", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("gr_token")}`
            }
        })
            .then(response => response.json())
            .then(setGames)
    }

    const getGameById = (id) => {
        return fetch(`http://localhost:8000/games/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("gr_token")}`
            }
        })
            .then(response => response.json())
    }

    const createGame = (game) => {
        return fetch("http://localhost:8000/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("gr_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(getGames)
    }

    const updateGame = (game) => {
        return fetch(`http://localhost:8000/games/${game.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("gr_token")}`
            },
            body: JSON.stringify(game)
        })
            .then(getGames)
    }

    return (
        <GameContext.Provider value={{
            games, getGames, updateGame, createGame, getGameById
        }} >
            { props.children}
        </GameContext.Provider>
    )
}