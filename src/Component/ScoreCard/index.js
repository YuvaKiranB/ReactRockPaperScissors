import Context from '../../Context'

import {
  ScoreCardContainer,
  DetailsContainer,
  DescriptionHeading,
  ScoreContainer,
  ScorePara,
  Score,
} from './styledComponents'

const GetScoreCard = () => (
  <Context.Consumer>
    {value => {
      const {score} = value
      const strScore = score.toString()

      return (
        <ScoreCardContainer>
          <DetailsContainer>
            <DescriptionHeading>ROCK PAPER SCISSORS</DescriptionHeading>
          </DetailsContainer>
          <ScoreContainer>
            <ScorePara>Score</ScorePara>
            <Score>{strScore}</Score>
          </ScoreContainer>
        </ScoreCardContainer>
      )
    }}
  </Context.Consumer>
)

export default GetScoreCard
