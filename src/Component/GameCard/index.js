import Context from '../../Context'
import GetTile from '../Tiles'

import {GameContainer, GameList} from './styling'

const GetGameCard = () => (
  <Context.Consumer>
    {value => {
      const {choicesList} = value

      return (
        <GameContainer>
          <GameList>
            {choicesList.map(eachItem => (
              <GetTile
                imageUrl={eachItem.imageUrl}
                id={eachItem.id}
                key={eachItem.id}
              />
            ))}
          </GameList>
        </GameContainer>
      )
    }}
  </Context.Consumer>
)

export default GetGameCard
