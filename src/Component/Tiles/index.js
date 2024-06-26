import Context from '../../Context'

import {ListItem, TileImage, TileButton} from './styling'

const GetTiles = props => (
  <Context.Consumer>
    {value => {
      const {clickedButton} = value
      const {imageUrl, id} = props
      let testId = null

      if (id === 'ROCK') {
        testId = 'rockButton'
      }
      if (id === 'SCISSORS') {
        testId = 'scissorsButton'
      }
      if (id === 'PAPER') {
        testId = 'paperButton'
      }

      console.log(testId)

      const clickedTile = () => {
        let player = null
        if (id === 'ROCK') {
          player = 0
        } else if (id === 'SCISSORS') {
          player = 1
        } else if (id === 'PAPER') {
          player = 2
        }

        clickedButton(player)
      }

      return (
        <ListItem>
          <TileButton data-testid={testId} onClick={clickedTile}>
            <TileImage src={imageUrl} alt={id} />
          </TileButton>
        </ListItem>
      )
    }}
  </Context.Consumer>
)

export default GetTiles
