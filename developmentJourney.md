 ### 1) working with firebase
  - make firebase account in its console and create its database inside `firestore database`
  - make `firebase.js` file at same level as app folder(both are in appName folder with package.json and package-lock.json files)
  - copy the initializing SDK we get from firebase console after making the app there and place this SDK content in `firebase.js` file
  - import `getFirestore`
  - make a constant variable for firebase and export it
  - make a collection in `firebase` console
  ### 2) working on app to initialize it
  - make it a client side app by adding `use client` at top of page.js file inside `app` folder
  - import client side state variables and functions from react- `useState` and `useEffect`
##### 3) make a box
- import itfrom `material ui` into `page.js`
- return the box from `home function` of `page.js` file
- add `Inventory` inside the `box` and give it some `text` to be displayed on the screen
### 4) adding functionality to page.js file( everything done inside home method of page.js)
- call `useState() with empty array` method to get `inventory` and `setInventory` variables
- call `useState() with default value false` again to get `open` and `setOpen`
- call `useState() with empty string` to get `itemName` and `setItemName`
##### 5) updateInventory() method- an async function to fetch inventory from firebase
    - use async function
    - get snapshots by doing a `query` of the `firebase database`
  
