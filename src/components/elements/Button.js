import React from 'react'
import styled from 'styled-components'
import { Sizes, Breakpoints, Theme } from '../../tokens'

const ButtonWrapper = styled.div`
  background: ${props => props.theme.primary};
  padding: ${Sizes.rem(2)};
  font-size: ${Sizes.rem(4)};
  border-radius: ${Sizes.px(1)};
  color: white;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  
  &:hover {
    background: ${props => props.theme.secondary};
  }

  @media screen and (min-width: ${Breakpoints.large}) {
    padding: ${Sizes.rem(3)};
    font-size: ${Sizes.rem(4)};
  }
`;

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>
}

Button.defaultProps = {
  theme: Theme.default
}

export default Button;