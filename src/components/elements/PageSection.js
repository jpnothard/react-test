import React from 'react';
import styled from 'styled-components'
import { Sizes, Breakpoints } from '../../tokens'

const PageSectionWrapper = styled.div`
  padding: ${props => Sizes.rem(props.spaceMobile)} 0;
  
  @media screen and (min-width: ${Breakpoints.large}) {
    padding: ${props => Sizes.rem(props.spaceDesktop)} 0;
  }
`;

const PageSection = (props) => {
  return <PageSectionWrapper {...props}>{props.children}</PageSectionWrapper>
}

PageSection.defaultProps = {
  spaceDesktop: 0,
  spaceMobile: 0
}

export default PageSection;