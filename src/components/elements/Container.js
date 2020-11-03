import React from 'react'
import styled from 'styled-components'
import { Breakpoints, Sizes } from '../../tokens'

const ContainerWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 ${Sizes.rem(8)};

  @media screen and (min-width: ${Breakpoints.large}) {
    padding: 0 ${Sizes.rem(25)};
  }
`;

const Container = (props) => {
  return <ContainerWrapper {...props}>{props.children}</ContainerWrapper>
}

export default Container;