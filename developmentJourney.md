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
- import it from `material ui` into `page.js` and also `topography`
- return the box from `home function` of `page.js` file
- add `Inventory` inside the `box` and give it some `text` to be displayed on the screen
### 4) adding functionality to page.js file( everything done inside home method of page.js)
- call `useState() with empty array` method to get `inventory` and `setInventory` variables
- call `useState() with default value false` again to get `open` and `setOpen`
- call `useState() with empty string` to get `itemName` and `setItemName`
##### 5) updateInventory() method- an async function to fetch inventory from firebase
- cerate a const variable called `snapshot` to call `query()` method with `collection()` method with parameters `firestore` and string `inventory`- for this import query and collection from `firebase/firestore` and also `firestore` from `@/firebase`
- create a const variable `docs` which uses `await` cycle with method `getDocs` with parameter `snapshot variable we just defined`
- create an empty array `inventoryList`
- use a `forEach loop` on `docs` variable to get each element `doc` in the array `docs`
    - push this element `doc` into `inventoryList`- explicityly create this element from information out of `doc`
        - name property as `doc.id`
        - `...doc.data()`
- call `setInventory` method with parameter `inventoryList`
### 6) useEffect() method call with parameters
- call `useEffect` with empty dependency list
- call `updateInventory` method in `useEffect()` method
##### 7) removeItem() method-async function
- parameter is an item
- create a const avriable `docRef` which called `doc()` method with `collection` method with parameters `firestore` and string `inventory` and 2nd parameter after collection() is `item`
- create a const variable `docSnap` to call `await` method with `docRef` as parameter
- if there is some response from `await` and docSnap exists
    - create a const `quantity` to get `docSnap.data()`
    - if quantity=1, call `deleteDoc` method with `docRef` parameter in `await` cycle
    - else use `await` cycle with `setDoc()` method with parameters-
        - docRef
        - {quantity:quantity-1}
- at end of async method, call `updateInventory` in `await` cycle
##### 8) addItem() method-async function
- parameter is an item
- create a const avriable `docRef` which called `doc()` method with `collection` method with parameters `firestore` and string `inventory` and 2nd parameter after collection() is `item`
- create a const variable `docSnap` to call `await` method with `docRef` as parameter
- if there is some response from `await` and docSnap exists
    - create a const `quantity` to get `docSnap.data()`
    - if quantity=1, call `setDoc` method with `docRef` and `{quantity:quantity+1}` in `await` cycle
    - else use `await` cycle with `setDoc()` method with parameters-
        - docRef
        - {quantity:1}
- at end of async method, call `updateInventory` in `await` cycle
### 9) handleOpen and handleClose methods
- carrow functions which call `setOpen()` with true and false respectively
### 10) creating a modal
![image](https://github.com/user-attachments/assets/3db54adb-d67f-4993-88e2-e19ab9c205c4)

  
