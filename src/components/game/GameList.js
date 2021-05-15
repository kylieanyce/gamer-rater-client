import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { GameContext } from "./GameProvider.js"
import { Link } from "react-router-dom"

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
                        <Link to={`/games/${game.id}`} className="game__name">{game.title}</Link>
                    </section>
                })
            }
        </article >
    )
}