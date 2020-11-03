# React Test

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Task

Using either React or React Native, construct an interface to dynamically render apps from JSON objects.  We're not necessarily looking for a complete solution but would expect candidates to spend a few dedicated hours on the test and we would want to see some of this:

- A master layout (e.g. title bar, css/stylesheets, etc.)
- At least one interactive app dynamically generating from JSON
- A set of reusable components
- Responsive design

This test is purposefully open-ended so feel free to do as much work (or as little) as you feel fit to demonstrate your skills.

## JSON Structure
### Apps.json
- his file contains the definition of 2 apps.  Each app has metadata about the app, an array of fields and an array of layout elements
- Fields have a name, type and an optional validation object
- Fields marked as 'object' will also have an 'object' property specifying which object the field is linked to (in the Objects.json file).  These fields are complex types that can't be described in a single value

### Data.json
- This file contains lookup data that will be useful for making selections in the apps.  E.g.  There are 5 'Equipment' records with various properties that will be useful for allowing users to choose equipment in an app

### Objects.json
- This file contains the metadata of objects that will be used in the apps - e.g. what is a 'Manufacturer'
