import { apps } from '../data/Apps.json';
import { objects } from '../data/Objects.json';


const combineFieldSets = (base, extras) => {
  return base.fields.map( fieldSet => {
    // if the fieldset is marked as having extra options
    if ( fieldSet.object ) {
      const extraFields = extras.filter(item => item.name === fieldSet.object)

      // checking the extraFields to see if they have extra options
      fieldSet.subFields = extraFields[0].properties.map(field => {
        if ( field.object ) {
          const extraSubFields = extras.filter(item => item.name === field.object)
          field.subFields = extraSubFields[0].properties
        }
        return field
      })
    
      return fieldSet
    }
    return fieldSet
  })
}

const configureLayouts = ( layouts, baseFields ) => {
  let layoutArray = []
  let currentRow = 0
  baseFields.forEach( (_, i) => {
    if ( layouts[i] ) {
      if ( currentRow !== layouts[i].position.row ) {
        currentRow++
      }
      layoutArray[currentRow] = layouts[i].position.column + 1
    }
  })
  return layoutArray;
}



const api = (appName) => {
  const baseApi = apps.filter(app => app.name === appName)
  
  let fieldSetResult;
  baseApi.forEach(function(singleApi){
    fieldSetResult = combineFieldSets(singleApi, objects);
  })

  // Create a map that we can use to for layout
  const layoutMap = (baseApi[0].layout.length) ? configureLayouts(baseApi[0].layout, fieldSetResult) : false

  return {
    ...baseApi[0],
    layoutMap,
    fields: fieldSetResult // this just overrides the fields from the base api
  };
};

export default api;