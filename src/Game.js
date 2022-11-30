import { useState, useEffect } from "react"
import tokenOpen from './tokenOpen.png'
import tokenRed from './tokenRed.png'
import tokenYellow from './tokenYellow.png'
import tokenRedIcon from './tokenRedIcon.png'
import tokenYellowIcon from './tokenYellowIcon.png'
import { checkScore } from "./Components/CheckScore"
import { startBot } from "./Components/Bot"

// need to rearrange assets into different folders
// should add more to the game board outline

export function Game() {
    const [grid, setGrid] = useState([])
    const [curPlayer, setCurPlayer] = useState("Red")
    const [invalid, setInvalid] = useState(false)
    const [winner, setWinner] = useState(0)
    const [curOpponent, setCurOpponent] = useState('Bot')
    const [scores, setScores] = useState({Red: 0, Yellow: 0})
    const [tieGame, setTieGame] = useState(0)

    // Fills the grid upon loading
    useEffect(() => {
        fillGrid()
    }, [])

    // For selecting betw player choices; this might be unecessary
    const playerChoice ={
        Red: tokenRed,
        Yellow: tokenYellow
    }

    // For filling the grid initially with empty tokens
    const fillGrid = () => {
        let k = 0
        const newGrid = []
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 7; j++) {
                let gameToken = {
                    row: i,
                    col: j,
                    key: k++,
                    value: tokenOpen
                }
                newGrid.push(gameToken)
            }
        }
        setGrid([...newGrid])
    }

    // When the player or bot clicks (player as represented by realPlayer === 1)
    const playerClicks = (row, col, playerNow, realPlayer) => {

        // check if the selected spot is open
        if (row === 5 || grid[(((row+1)*7)+col)].value !== tokenOpen) {

            // check if the selected spot is a win
            const winnerNow = checkScore(row, col, playerNow, grid, playerChoice[playerNow])
            setWinner(winnerNow)
            if (winnerNow === 1) {
                realPlayer = 0    
                setWinner(playerNow)
                setScores({...scores, [playerNow]: scores[playerNow]+1})
            }
            setGrid([...grid], grid[(row*7)+(col)].value = playerChoice[playerNow])
            setInvalid(false)
            setCurPlayer(playerNow === "Red" ? "Yellow" : "Red")

            if(grid.filter(token => token.value === tokenOpen).length === 0) {
                setTieGame(1)
                realPlayer = 0
            }


            // If next player is the bot, call startBot and retrieve the chosen column, 
            // then call playerClicks with the bot's choice and have the human go next by
            // setting realPlayer to 0
            if (curOpponent === 'Bot' && realPlayer === 1) {
                //setTimeout(() => console.log('hihi'), 500)
                const colNow = startBot(playerChoice[playerNow === "Red" ? "Yellow" : "Red"], structuredClone(grid)) // need to clone the grid, else, the bot's first round of trials will alter tha board
                for (let rowNow = 5; rowNow > 0; rowNow--) {
                    if (grid[rowNow*7+colNow].value === tokenOpen) {
                        setTimeout(() => playerClicks(rowNow, colNow, playerNow === "Red" ? "Yellow" : "Red", 0), 500)
                        break
                    }
                }
            }
        } else {
            setInvalid(true)
        }
    }

    const newGame = () => {
        setWinner(0)
        setTieGame(0)
        fillGrid()
    }

    // Build the board with the selected tokens and functionality for future selects
    function ShowVisualGrid() {
        const newVisual = []
        let k = 0
        for (let i = 0; i < 6; i++) {
            const rowNow = grid.filter(token => token.row === i) 
            newVisual.push(
                <div key={i} style={{display: 'flex'}}>
                    {rowNow.map(token => <img style={{cursor: 'pointer'}} 
                    onClick={() => token.value === tokenOpen && winner === 0 ? playerClicks(token.row, token.col, curPlayer, 1) : ""} 
                    className="token" key={k++} src={token.value}/>)}
                </div>)
        }
        return (
            newVisual
        )
    }

    return(
        <div style = {{flexDirection: 'row'}}>
            <div style={{textAlign: 'center'}}>Red: {scores['Red']} Yellow: {scores['Yellow']}</div>
            <ShowVisualGrid />
            <div><button style={{marginTop: 10, width: 210}} onClick={() => newGame()}>New Game</button></div>
            <div><button style={{marginTop: 10, width: 210}} onClick={() => setCurOpponent(curOpponent === 'Bot' ? 'Human' : 'Bot')}>Current Opponent: {curOpponent}</button></div>
            <div style={{paddingTop: 10, textAlign: 'center'}}>
                {curPlayer != 0 && <div style={{display: 'flex', justifyContent: 'center'}}> Current player: <img style={{marginLeft: 20, marginTop: 2}} className="tokenSmall" src={curPlayer === "Red" ? tokenRedIcon : tokenYellowIcon}/></div>}
                {invalid && <div> Invalid move</div>}
                {winner !== 0 && <div>{winner} wins!</div>}
                {tieGame !== 0 && <div>Tie game!</div>}
            </div>
        </div>
    )
}