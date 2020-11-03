import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

import { Theme, Sizes, Colors } from '../../tokens'
import Container from '../elements/Container'


const NavWrapper = styled.div`
  background: ${Colors.shades.beta};
  padding-top: ${Sizes.rem(4)};
  display: flex;
  align-items: center;

  .nav-list {
    display: flex;
    align-items: center;
  }
`;

const NavItem = styled.li`
  border-bottom: 2px solid transparent;
  padding-bottom: ${Sizes.rem(4)};
  text-align: center;

  &.active {
    border-color: ${props => props.theme.primary};;
  }

  &:not(:first-child) {
    padding-left: ${Sizes.rem(3)};
  }

  a {
    font-size: ${Sizes.rem(4)};
    line-height: ${Sizes.em(5, 4)};
    border-bottom: 2px solid transparent;
  }
`;

const Nav = ( props ) => {
  const location = useLocation();
  
  const buildNavLinks = () => {
    return props.navItems.map((item, i) => {
      const itemClass = location.pathname === item.to ? 'active': ''
      return (
        <NavItem key={i} theme={item.theme} className={itemClass}>
          <Link to={item.to}>
              {item.label}
          </Link>
        </NavItem>
      )
    });
  }

  return (
    <NavWrapper className={props.className || ''} theme={props.theme} >
      <Container>
        <ul className="nav-list">
          {buildNavLinks()}
        </ul>
      </Container>
    </NavWrapper>
  )
}

Nav.defaultProps = {
  theme: Theme.default,
  navItems: []
}

export default Nav;