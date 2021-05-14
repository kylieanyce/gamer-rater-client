import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList"
import { GameProvider } from "./game/GameProvider"

export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <Route exact path="/">
                    <GameList />
                </Route>
                <Route exact path="/games">
                    <GameList />
                </Route>
                <Route exact path="/games/:gameId/edit">
                    <GameDetail />
                </Route>
                {/* <Route exact path="/games/new">
                    <GameForm />
                </Route>
                <Route exact path="/games/:gameId/edit">
                    <GameForm /> */}
                {/* </Route> */}
            </GameProvider>
        </main>
    </>
}
