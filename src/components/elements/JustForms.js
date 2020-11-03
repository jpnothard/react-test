import React from 'react';
import styled from 'styled-components'
import { Sizes, Breakpoints, Theme } from '../../tokens'

const JustFormsWrapper = styled.div`

  .holder {
    @media screen and (min-width: ${Breakpoints.large}) {
      background: ${props => ( props.theme.secondary !== 'inherit') ? props.theme.secondary : 'currentColor'};
      margin: ${Sizes.em(1, 2)} 0;
    }
  }
  
  legend,
  label {
    display: block;
    font-size: ${Sizes.rem(4)};
    line-height: ${Sizes.em(5, 4)};
    font-weight: 400;
    padding: ${Sizes.em(1, 2)} 0;

    &.inline {
      display: inline-block;
    }
  }

  legend {
    color: ${props => props.theme.primary};
    font-size: ${Sizes.rem(6)};
    font-weight: 600;
  }
  

  input {
    margin: 0;
    width: 100%;
    display: block;
    font-size: ${Sizes.rem(4)};
    padding: ${Sizes.em(1, 2)};
    border: 2px solid white;
    background: white;
    border-radius: 2px;
    box-sizing: border-box;
    font-family: inherit;
  }

  input[type="checkbox"] {
    display: inline-block;
    width: auto;
    margin-right: ${Sizes.px(2)};
  }


  .field + .field {
    margin-top: ${Sizes.rem(2)};
  }

  .fieldset {
    margin: ${Sizes.px(5)} 0;
  }
`;

const JustForms = (props) => {
  return <JustFormsWrapper {...props}>{props.children}</JustFormsWrapper>
}

JustForms.defaultProps = {
  theme: Theme.default
}

export default JustForms;