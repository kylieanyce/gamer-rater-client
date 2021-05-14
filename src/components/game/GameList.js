import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { GameContext } from "./GameProvider.js"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)
    const history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <article className="games">
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                        <button className="btn btn-3"
                            onClick={() => history.push(`/games/${game.id}/edit`)}
                        >Edit</button>
                        <div className="game__name">{game.title}</div>
                        <div className="game__players">Players needed: {game.number_of_players}</div>
                        <div className="game__playtime">Play Time: {game.game_time_length}</div>
                        <div className="game__designer">Designer: {game.designer}</div>
                        <div className="game__year">Year Released: {game.year_released}</div>
                        <div className="game__age">Age Recommendation: {game.age_recommendation}</div>
                    </section>
                })
            }
        </article>
    )
}