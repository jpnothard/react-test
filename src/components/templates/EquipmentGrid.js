import React from 'react'
import styled from 'styled-components'

import Grid from '../elements/Grid'
import EquipmentItem from './EquipmentItem'

import { Breakpoints, Sizes, Theme} from '../../tokens'

const EquipmentGridWrapper = styled.div`
  padding-top: ${Sizes.rem(3)};
  padding-bottom: ${Sizes.rem(3)};
  
  @media screen and (max-width: ${Breakpoints.large}) {
    text-align: center;
  }
`;

const EquipmentGrid = (props) => {
  const { layouts, layoutMap, fields } = props

  const renderedRows = (fields, layouts, layoutMap) => {
    return fields.map((field, index) => {
      
      const itemLayoutSetting = layouts.filter(item => item.field === field.name)[0]
      const columnCount = itemLayoutSetting ? 12 / layoutMap[itemLayoutSetting.position.row] : 12

      return (
        <Grid item desktop={columnCount} key={index}>
          <EquipmentItem theme={props.theme} field={field}/>
        </Grid>
      )      
    });
  }

  return (
    <EquipmentGridWrapper {...props} >
      <Grid container>
        {renderedRows(fields, layouts, layoutMap)}
      </Grid>
    </EquipmentGridWrapper>
  )
}

EquipmentGrid.defaultProps = {
  theme: Theme.default
}

export default EquipmentGrid;