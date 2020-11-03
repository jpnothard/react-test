import React from 'react'
import styled from 'styled-components'

import Container from '../elements/Container'
import JustCopy from '../elements/JustCopy'

import { Sizes, Theme} from '../../tokens'

const EditManufacturerWrapper = styled.div`
  padding-top: ${Sizes.rem(15)};
  padding-bottom: ${Sizes.rem(15)};
  min-height: 100vh;
  display: flex;
  align-items: center;
  
  .header {
    text-align: center;
  }
`;

const EditManufacturer = (props) => {

  return (
    <EditManufacturerWrapper {...props} >
      <Container>
        <JustCopy className="header" theme={Theme.epsilon}>
          <h2>Edit Manufacturer</h2>
          <p>-- Another app coming soon --</p>
        </JustCopy>
      </Container>
    </EditManufacturerWrapper>
  )
}

EditManufacturer.defaultProps = {
  theme: Theme.default
}

export default EditManufacturer;