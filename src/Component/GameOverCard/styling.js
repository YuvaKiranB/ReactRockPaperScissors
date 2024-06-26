import styled from 'styled-components'

export const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const GameResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TilePara = styled.p`
  font-family: roboto;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
  color: white;
`

export const TileImage = styled.img`
  height: 150px;
`

export const GameResultPara = styled.p`
  font-family: roboto;
  font-size: 35px;
  font-weight: 600;
  color: white;
  margin: 20px;
`

export const PlayAgainButton = styled.button`
  padding: 15px;
  width: 200px;
  border-width: 0px;
  border-radius: 10px;
  font-family: bree serif;
  font-size: 18px;
  font-weight: 500;
  color: #223a5f;
  cursor: pointer;
`
