 ### working with firebase
  - make firebase account in its console and create its database inside `firestore database`
  - make `firebase.js` file at same level as app folder(both are in appName folder with package.json and package-lock.json files)
  - copy the initializing SDK we get from firebase console after making the app there and place this SDK content in `firebase.js` file
  - import `getFirestore`
  - make a constant variable for firebase and export it
  - make a collection in `firebase` console
  ### working on app
  - make it a client side app by adding `use client` at top of page.js file inside `app` folder
  - import client side state variables and functions from react- useState and useEffect
  - make a box to be returned from a default method
### adding functionality to page.js file
- call useState() method to get inventory and setInventory variables
- fetch inventory from firebase
    - use async function
    - get snapshots by doing a `query` of the `firebase database`
  
