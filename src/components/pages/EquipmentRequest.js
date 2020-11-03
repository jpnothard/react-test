import React from 'react'
import styled from 'styled-components'

import Container from '../elements/Container'
import JustCopy from '../elements/JustCopy'
import Button from '../elements/Button'
import EquipmentGrid from '../templates/EquipmentGrid'

import { Sizes, Theme} from '../../tokens'

import api from '../../data'

const EquipmentRequestWrapper = styled.div`
  padding-top: ${Sizes.rem(15)};
  padding-bottom: ${Sizes.rem(15)};
  
  .header {
    text-align: center;
  }
`;

const EquipmentRequest = (props) => {
  const appObject = api('Equipment Request')

  const handleSubmit = (event) => {
    event.preventDefault()
    let triggerNames = appObject.workflowTriggers.onSubmit.join(' and ')
    alert(`I havn't plugged in the data yet, but this is where we handle the triggers: ${triggerNames}.`)
  }

  return (
    <EquipmentRequestWrapper {...props} >
      <Container>
        
        <JustCopy className="header" theme={Theme.alpha}>
          <h3>{appObject.name}</h3>
          <p>{appObject.description}</p>
        </JustCopy>

        <form onSubmit={handleSubmit}>
          <EquipmentGrid 
            theme={Theme.alpha} 
            layouts={appObject.layout} 
            fields={appObject.fields} 
            layoutMap={appObject.layoutMap} 
          />
          <button type="submit">
            <Button theme={Theme.alpha}>Submit</Button>
          </button>
        </form>

      </Container>
    </EquipmentRequestWrapper>
  )
}

EquipmentRequest.defaultProps = {
  theme: Theme.default
}

export default EquipmentRequest;