import styled from 'styled-components'

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid white;
  padding: 30px;
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120px;
`

export const DescriptionHeading = styled.h1`
  margin: 0px;
  padding: 5px;
  font-size: 24px;
  color: white;
  font-weight: 500;
  font-family: Bree Serif;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: white;
  height: 120px;
  border-radius: 10px;
`

export const ScorePara = styled.p`
  font-family: bree serif;
  font-size: 25px;
  color: #223a5f;
  font-weight: 500;
  margin-bottom: 0px;
  padding-bottom: 0px;
  margin-top: 20px;
`

export const Score = styled.p`
  font-family: Roboto;
  margin-top: 0px;
  padding-top: 0px;
  font-size: 50px;
  margin-bottom: 30px;
  font-weight: 600;
  color: #223a5f;
`
