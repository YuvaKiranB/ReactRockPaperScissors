import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'

import {
  RulesContainer,
  RulesButton,
  RulesContainer2,
  ImageContainer,
  RulesImage,
  CloseButton,
} from './styling'

const overlayStyles = {
  backgroundColor: 'translucent',
}

const GetRulesButton = () => (
  <RulesContainer>
    <Popup
      modal
      trigger={<RulesButton type="button">RULES</RulesButton>}
      overlayStyle={overlayStyles}
    >
      {close => (
        <RulesContainer2>
          {/* eslint-disable-next-line */}
          <CloseButton type="button" onClick={() => close()}>
            <RiCloseLine />
          </CloseButton>
          <ImageContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </ImageContainer>
        </RulesContainer2>
      )}
    </Popup>
  </RulesContainer>
)

export default GetRulesButton
