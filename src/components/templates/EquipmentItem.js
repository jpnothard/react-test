import React from 'react'
import styled from 'styled-components'

import JustForms from '../elements/JustForms';
// import Button from './elements/Button'
import FormFields from '../patterns/FormFields'

import { Sizes, Theme} from '../../tokens'


const EquipmentItemWrapper = styled.div`
  margin: ${Sizes.rem(3)} 0;
`;

const EquipmentItem = (props) => {
  const { field } = props;

  const stringToId = function(str) {
    return `${str.split(" ").join().replace(/[^a-zA-Z ]/g, "")}-${Math.floor(Math.random() * 9999)}`
  };

  const renderFieldSet = (field) => {
    if (field.subFields) {
      return (
        <fieldset className="fieldset">
          <legend>{field.name}</legend>
          {field.subFields.map((field, index) => {
            if (field.subFields) {    
              return (
                <fieldset className="fieldset" key={`${index}--2`}>
                  <legend>{field.name}</legend>
                  {field.subFields.map((field, index) => {
                    return (
                      <FormFields
                        key={`${index}--3`}
                        label={field.name}
                        name={field.name}
                        id={stringToId(field.name)}
                        type={field.type}
                        maxLength={ field.validation ? field.validation['max-value'] : Infinity }
                        minLength={ field.validation ? field.validation['min-value'] : Infinity }
                        required={ field.validation ? field.validation.required : false }
                      />
                    )
                  })}
                </fieldset>
              )
            }
            return (
              <FormFields
                key={`${index}--2`}
                label={field.name}
                name={field.name}
                id={stringToId(field.name)}
                type={field.type}
                maxLength={ field.validation ? field.validation['max-value'] : Infinity }
                minLength={ field.validation ? field.validation['min-value'] : Infinity }
                required={ field.validation ? field.validation.required : false }
              />
            )
          })}
        </fieldset>
      )
    }
    return (
      <FormFields
        label={field.name}
        name={field.name}
        id={stringToId(field.name)}
        type={field.type}
        maxLength={ field.validation ? field.validation['max-value'] : Infinity }
        minLength={ field.validation ? field.validation['min-value'] : Infinity }
        required={ field.validation ? field.validation.required : false }
      />
      
    )
  }

  return (
    <EquipmentItemWrapper {...props} >
      <JustForms theme={props.theme}>        
        {renderFieldSet(field)}
      </JustForms>
    </EquipmentItemWrapper>
  )
}

EquipmentItem.defaultProps = {
  theme: Theme.default
}

export default EquipmentItem;