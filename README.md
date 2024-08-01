# pantry-inventory-HEADSTARTER

## technologies used

`Next.js` `React` `Firebase` `GCP` `Vercel` `OpenAI` `CI/CD` `material UI`

## initialize nodeJS app

- in a directory, run `npx create-next-app@latest` and answer some follow up questions YES OR NO
- a folder or app is created with the explicit name gave
- now go inside this folder/directory of the app name and all work is done here

  ### initializing materialUI in app

  - run `npm install @mui/material @emotion/react @emotion/styled` inside the app name folder/directory

  ## start and run the app

  - go inside the app name directory and run the app from this directory
  - use  `npm run dev`
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
  
