import React from 'react'

const Context = React.createContext({
  score: 0,
  choicesList: '',
  isGameOver: '',
  result: '',
  you: '',
  opponent: '',
  clickedButton: () => {},
  clickedPlayAgain: () => {},
})

export default Context
