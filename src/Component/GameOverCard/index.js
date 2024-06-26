import Context from '../../Context'

import {
  GameOverContainer,
  GameResultContainer,
  TileContainer,
  TilePara,
  TileImage,
  GameResultPara,
  PlayAgainButton,
} from './styling'

const GetGameOverCard = () => (
  <Context.Consumer>
    {value => {
      const {you, opponent, result, clickedPlayAgain} = value

      const playAgain = () => {
        clickedPlayAgain()
      }

      return (
        <GameOverContainer>
          <GameResultContainer>
            <TileContainer>
              <TilePara>YOU</TilePara>
              <TileImage src={you.imageUrl} alt="your choice" />
            </TileContainer>

            <TileContainer>
              <TilePara>OPPONENT</TilePara>
              <TileImage src={opponent.imageUrl} alt="opponent choice" />
            </TileContainer>
          </GameResultContainer>
          <GameResultPara>{result}</GameResultPara>
          <PlayAgainButton type="button" onClick={playAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameOverContainer>
      )
    }}
  </Context.Consumer>
)

export default GetGameOverCard
