import {Component} from 'react'
import GetScoreCard from './Component/ScoreCard'
import GetGameCard from './Component/GameCard'
import Context from './Context'
import GetGameOverCard from './Component/GameOverCard'
import GetRulesButton from './Component/RulesButton'

import {MainContainer, SubContainer} from './AppStyling'

import './App.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {score: 0, isGameOver: false, result: '', you: '', opponent: ''}

  clickedButton = id => {
    const opponent = Math.floor(Math.random() * 3)

    if (id === 0) {
      if (opponent === 0) {
        this.setState({
          isGameOver: true,
          result: 'IT IS DRAW',
          you: choicesList[id],
          opponent: choicesList[opponent],
        })
      } else if (opponent === 1) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU WON',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score + 1,
        }))
      } else if (opponent === 2) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU LOSE',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score - 1,
        }))
      }
    } else if (id === 1) {
      if (opponent === 0) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU LOSE',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score - 1,
        }))
      } else if (opponent === 1) {
        this.setState({
          isGameOver: true,
          result: 'IT IS DRAW',
          you: choicesList[id],
          opponent: choicesList[opponent],
        })
      } else if (opponent === 2) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU WON',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score + 1,
        }))
      }
    } else if (id === 2) {
      if (opponent === 0) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU WON',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score + 1,
        }))
      } else if (opponent === 1) {
        this.setState(previousState => ({
          isGameOver: true,
          result: 'YOU LOSE',
          you: choicesList[id],
          opponent: choicesList[opponent],
          score: previousState.score - 1,
        }))
      } else if (opponent === 2) {
        this.setState({
          isGameOver: true,
          result: 'IT IS DRAW',
          you: choicesList[id],
          opponent: choicesList[opponent],
        })
      }
    }
  }

  reset = () => {
    this.setState({isGameOver: false})
  }

  render() {
    const {score, isGameOver, result, you, opponent} = this.state
    return (
      <Context.Provider
        value={{
          score,
          isGameOver,
          result,
          you,
          opponent,
          choicesList,
          clickedButton: this.clickedButton,
          clickedPlayAgain: this.reset,
        }}
      >
        <MainContainer>
          <SubContainer>
            <GetScoreCard />
            {isGameOver ? <GetGameOverCard /> : <GetGameCard />}
            <GetRulesButton />
          </SubContainer>
        </MainContainer>
      </Context.Provider>
    )
  }
}

export default App
