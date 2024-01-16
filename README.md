# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# LESSONS

@DOC https://create-react-app.dev/

## 17 CREATE-REACT-APP s TypeScript, iTunes appka

### Vytvoření aplikace

#### create react app

https://create-react-app.dev

### plus typescript

https://create-react-app.dev/docs/adding-typescript

```npx create-react-app my-app --template typescript```

### Přidání podpory SASS

```npm i -D sass```

or

```npm i -D node-sass```

## 18 Komponenty

- Popopis TSX
- Ukázka komponent

## 19 REACT ROUTER

https://reactrouter.com/en/main

```npm i --save react-router-dom``` 

```npm i -D @types/react-router-dom```

**Browser Router**

https://reactrouter.com/en/main/router-components/browser-router

**Hash Router**

https://reactrouter.com/en/main/router-components/hash-router

## 20 Tvoje prvé (lol, lož) FUNCTION KOMPONENTY, podstránky

### React.FC

https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components/

https://stackoverflow.com/questions/59988667/typescript-react-fcprops-confusion

https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets

https://echobind.com/post/react-with-typescript-components-as-function-declarations-vs-function-expressions

## 21 INLINE styles, css-in-js, STYLED COMPONENTS, CSS MODULES

https://legacy.reactjs.org/docs/faq-styling.html

https://legacy.reactjs.org/docs/dom-elements.html#style

https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/

https://reactrouter.com/en/main/components/nav-link

CSS IN REACT

https://styled-components.com/docs/basics#motivation

https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e

https://blog.bitsrc.io/5-ways-to-style-react-components-in-2019-30f1ccc2b5b

https://alligator.io/react/react-css


REACT SASS + MODULES

https://blog.bitsrc.io/how-to-use-sass-and-css-modules-with-create-react-app-83fa8b805e5e


STYLED COMPONENTS

https://www.iamtimsmith.com/blog/how-to-use-styles-in-a-react-js-application

## 23 HOOKS API, useState, useEffect

### HOOKS API

https://reactjs.org/docs/hooks-intro.html
https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889
https://reactjs.org/docs/hooks-overview.html
https://reactjs.org/docs/hooks-reference.html
https://reactjs.org/docs/hooks-faq.html

### useState + useEffect

https://reactjs.org/docs/hooks-state.html
https://reactjs.org/docs/hooks-effect.html
https://overreacted.io/a-complete-guide-to-useeffect/

### HOOKS + AJAX

https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c

### TYPESCRIPT + HOOKS

https://www.carlrippon.com/typed-usestate-with-typescript

## 24 Tunes podstránka v TS s HOOKS a cyklom a formom

### REACT FORMS (EVENT TYPES)

https://www.carlrippon.com/building-super-simple-react-form-component-typescript-basics/
https://www.carlrippon.com/building-a-react-form-component-with-typescript-validation/
https://blaipratdesaba.com/react-typescript-cheatsheet-form-elements-and-onchange-event-types-8c2baf03230c 
https://stackoverflow.com/questions/42081549/typescript-react-event-types


## 25 RODIČ a jeho DETI, sub-komponenty

## 26 KOMUNIKÁCIA komponentov

https://reactjs.org/docs/components-and-props.HTML

https://reactjs.org/docs/composition-vs-inheritance.html

https://www.javascriptstuff.com/component-communication

https://blog.bitsrc.io/react-communication-between-components-c0cfccfa996a

https://react.tips/how-reactjs-components-communicate

https://medium.com/better-programming/angular-vs-react-component-communication-91af1a144295

https://passionfordev.com/react-communication-between-parent-and-child

## 28 komunikace pres callback

v rodičovi pridáš metódu
```
const handleSearchFormSubmit = (data: string) => {

}
```


cez PROP ju prepošleš decku

```onSearchFormSubmit={handleSearchFormSubmit}```


v decku príjmeš funkciu od rodiča

```
interface Props {
onSearchFormSubmit: (data: string) => void
}
```

a potom ju v dieťati môžeš zavolať

```props.onSearchFormSubmit(query)```

takto "poprosíš" rodiča, aby niečo spravil s dátami

### Thinking in React

https://reactjs.org/docs/thinking-in-react.html

### Identify Where Your State Should Live

https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live

## 29 SINGLE SOURCE OF TRUTH, vytiahni stav do rodiča

### THINKING IN REACT
https://reactjs.org/docs/thinking-in-react.html

### LIFTING STATE UP
https://reactjs.org/docs/lifting-state-up.html

### TOP-DOWN DATA FLOW
https://reactjs.org/docs/state-and-lifecycle.html#the-data-flows-down

## 30 REDUX, VUEX, NgRx STORE
- https://redux.js.org
- https://vuex.vuejs.org
- https://ngrx.io/guide/store

## 31 TS INTERFACE, vlastné dátové typy v TS + jeho história

**V TypeScripte si môžeš doprogramovať vlastné dátové typy.**

Ak máš objekty pre usera, môžeš objektu presne definovať jeho tvar.
Že z čoho presne sa každý objekt usera musí skladať.
Potom dostávaš presné rady, chyby, nápovedy.

```
export interface Song {
    id: number
    artist: string
    name: string
}
  
export interface User {
    firstName: string
    lastName: string
    favoriteSong?: Song
}
```

Môžeš si spraviť súbor týchto typov. Naimportovať všade, kde ich chceš používať. 

```
import { Song } from '../../types'
```

## 32 useRef odkaz na DOM elementy, OPTIONAL CHAINING, refaktoring

ve function components nemohu volat methody setState, componentDidMount a ani React.createRef, ale musíš pouýít hook useRef

### REFs IN FUNCTION COMPONENTS (& TYPESCRIPT)

- https://reactjs.org/docs/hooks-reference.html#useref
- https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
- https://blog.logrocket.com/how-to-use-react-createref-ea014ad09dba/
- https://linguinecode.com/post/how-to-use-react-useref-with-typescript

### When to use React useRef and useLayoutEffect vs useEffect
-  https://linguinecode.com/post/when-to-use-useref-and-uselayouteffect

### OPTIONAL CHAINING
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

### ON CHANGE / ON INPUT
- https://stackoverflow.com/questions/17047497/difference-between-change-and-input-event-for-an-input-element
- https://stackoverflow.com/questions/38256332/in-react-whats-the-difference-between-onchange-and-oninput


## 33 LODASH, @types, iTunes api, AXIOS

debounce

```
yarn add lodash-es
yarn add --dev @types/lodash-es
```

### Lodash DOKUMENTACIA, debounce
- https://lodash.com/docs
- https://lodash.com/docs#debounce


### REACT ON/HANDLE NAMING CONVENTION
- https://medium.com/javascript-in-plain-english/handy-naming-conventions-for-event-handler-functions-props-in-react-fc1cbb791364
- https://jaketrent.com/post/naming-event-handlers-react/



### (free) apis
- https://reqres.in
- https://github.com/toddmotto/public-apis
- https://any-api.com
- https://www.reddit.com/r/webdev/comments/3wrswc/what_are_some_fun_apis_to_play_with
- https://www.reddit.com/r/RedLetterMedia.json
- https://dev.to/aumayeung/free-and-fake-apis-you-can-use-to-practice-front-end-development-4eck
