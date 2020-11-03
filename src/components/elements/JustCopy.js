import React from 'react';
import styled from 'styled-components'
import { Sizes, Breakpoints, Theme } from '../../tokens'

const JustCopyWrapper = styled.div`

  *:first-child {
    margin-top: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: ${Sizes.em(1, 2)} 0;
    font-weight: 700;
  }

  h1, h2 {
    color: ${props => props.theme.primary}
  }

  h3, h4, h5, h6 {
    color: ${props => props.theme.secondary}
  }

  h1 {
    font-size: ${Sizes.rem(16)};
    line-height: ${Sizes.em(18, 16)};
    
    @media screen and (min-width: ${Breakpoints.large}) {
      font-size: ${Sizes.rem(18)};
      line-height: ${Sizes.em(20, 18)};
    }
    
  }
  h2 {
    font-size: ${Sizes.rem(8)};
    line-height: ${Sizes.em(10, 8)};
    
    @media screen and (min-width: ${Breakpoints.large}) {
      font-size: ${Sizes.rem(10)};
      line-height: ${Sizes.em(12, 10)};
    }
  }
  h3 {
    font-size: ${Sizes.rem(6)};
    line-height: ${Sizes.em(8, 6)};
    
    @media screen and (min-width: ${Breakpoints.large}) {
      font-size: ${Sizes.rem(6)};
      line-height: ${Sizes.em(8, 6)};
    }
  }
  h4 {
    font-size: ${Sizes.rem(5)};
    line-height: ${Sizes.em(6, 5)};
    
    @media screen and (min-width: ${Breakpoints.large}) {
      font-size: ${Sizes.rem(5)};
      line-height: ${Sizes.em(6, 5)};
    }
  }
  h5, h6 {
    font-size: ${Sizes.px(4)};
    line-height: ${Sizes.px(5, 4)};
    
    @media screen and (min-width: ${Breakpoints.large}) {
      line-height: ${Sizes.px(5, 4)};
    }
  }
  
  p {
    font-size: ${Sizes.rem(4)};
    line-height: ${Sizes.em(5, 4)};
    font-weight: 400;
    margin: ${Sizes.em(1, 2)} 0;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: ${props => props.theme.secondary};;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  ol,
  ul {
    padding: 0;
    margin: 0;
  }

  li {
    font-size: ${Sizes.rem(4)};
    line-height: ${Sizes.em(5, 4)};

    &:not(:first-child) {
      margin-top: ${Sizes.rem(2)}
    }
  }

  ul {
   li {
      position: relative;
      padding-left: ${Sizes.em(5, 4)};

      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: ${Sizes.em(1.75, 4)};
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: ${props => ( props.theme.secondary !== 'inherit') ? props.theme.secondary : 'currentColor'};
      }
   } 
  }
`;

const JustCopy = (props) => {
  return <JustCopyWrapper {...props}>{props.children}</JustCopyWrapper>
}

JustCopy.defaultProps = {
  theme: Theme.default
}

export default JustCopy;