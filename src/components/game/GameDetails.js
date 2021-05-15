import React, { useState, useContext, useEffect } from "react"
import { useHistory, useParams } from "react-router"
import { GameContext } from "./GameProvider.js"

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const [game, setGame] = useState({})
    const { gameId } = useParams()
    const history = useHistory()

    useEffect(() => {
        getGameById(gameId)
            .then((res) => {
                setGame(res)
            })
    }, [])

    return (
        <section className="gameDetails">
            <h3>{game.title}</h3>
            <div className="game__players">Players needed: {game.num_of_players}</div>
            <div className="game__playtime">Play Time: {game.game_time_length}</div>
            <div className="game__designer">Designer: {game.designer}</div>
            <div className="game__year">Year Released: {game.year_released}</div>
            <div className="game__age">Age Recommendation: {game.age_recommendation}</div>

        </section>
    )


}