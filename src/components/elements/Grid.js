import React from 'react';
import styled from 'styled-components'
import { Sizes, Breakpoints } from '../../tokens'

const GridWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${Sizes.rem(-4)};
  margin-right: ${Sizes.rem(-4)};
`;

const GridItem = styled.div`
  padding-left: ${Sizes.rem(4)};
  padding-right: ${Sizes.rem(4)};
  flex: 0 1 ${props => parseFloat(props.mobile) * (100 / 12)}%;
  width: ${props => parseFloat(props.mobile) * (100 / 12)}%;
  
  @media screen and (min-width: ${Breakpoints.large}) {
    flex: 0 1 ${props => parseFloat(props.desktop) * (100 / 12)}%;
    width: ${props => parseFloat(props.desktop) * (100 / 12)}%;
  }
`;

const Grid = ({ children, container, item, mobile, desktop, className }) => {
  if (container) {
    return (
      <GridWrapper className={className}>
        {children}
      </GridWrapper>
    )
  }
  
  if (item) {
    return (
      <GridItem mobile={mobile} desktop={desktop} className={className}>
        {children}
      </GridItem>
    )
  }
}

Grid.defaultProps = {
  mobile: 12,
  desktop: 12,
  container: false,
  item: false
}

export default Grid;