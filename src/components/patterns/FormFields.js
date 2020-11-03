import React from 'react'

import JustForms from '../elements/JustForms'
import { Theme } from '../../tokens'

const FormFields = ( props ) => {
  const { 
    label,
    name,
    id,
    type,
    maxLength,
    minLength,
    required
  } = props;

  // do some validation for the props that matter

  const fieldSet = () => {
    
    if (type === 'textarea' || type === 'location' ) {
      return (
        <div className="field">
          <label htmlFor={id}>{label}:</label>
          <input
            id={id}
            name={name}
            type={ type }
            maxLength={ maxLength }
            minLength={ minLength }
            required={ required }
          />
        </div>
      )
    }

    if (type === 'image' ) {
      return (
        <div className="field">
          <label htmlFor={id}>{label}:</label>
          <input
            id={id}
            name="fileToUpload" 
            type="file" 
            required={ required } />
        </div>
      )
    }

    if (type === 'text' ) {
      return (
        <div className="field">
          <label htmlFor={id}>{label}:</label>
          <input
            id={id}
            type={ type }
            name={name}
            maxLength={ maxLength }
            minLength={ minLength }
            required={ required }
          />
        </div>
      )
    }

    if (type === 'datetime' ) {
      return (
        <div className="field">
          <label htmlFor={id}>{label}:</label>
          <input
            id={id}
            name={name}
            type='date'
            required={ required }
          />
        </div>
      )
    }

    if (type === 'currency' || type === 'integer' || type === 'phone') {
      return (
        <div className="field">
           <label htmlFor={id}>{label}:</label>
          <input
            id={id}
            name={name}
            type="number"
            max={ maxLength }
            min={ minLength }
          />
        </div>
      )
    }

    if (type === 'bool') {
      return (
        <div className="field">
          <input 
            type="checkbox" 
            id={id} 
            name={name} 
            value={name}
            defaultChecked={true} />
          <label className="inline" htmlFor={id}>{label}:</label>

        </div>
      )
    }

    return <p>this is {type}</p>
  }

  return (
    <div className={props.className || ''} theme={props.theme} >
      <JustForms theme={props.theme}>        
        {fieldSet()}
      </JustForms>
    </div>
  )
}

FormFields.defaultProps = {
  theme: Theme.default,
  label: '',
  name: '',
  id: '',
  type: '',
  maxLength: Infinity,
  minLength: 0,
  required: false
}

export default FormFields;