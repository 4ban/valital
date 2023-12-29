# Valital home assignment
NodeJS API application that provides 3 endpoints: 

*get-word* - Receives a url parameter of a word, uses https://dictionaryapi.dev/ to check if the word can be used as a verb. If it can, return an example usage, if not, return the dictionary definition. This is a GET

*number-to-word* - Receives a single digit (from 0-9) and returns the word ("zero","one"..."nine") of that number in english. Ensure an appropriate RESTful return code is produced for valid and invalid input. Sample input: { "num": 7 }, this is a POST

*who-made-me* - Return a string identifying who created the project and a fun fact about you. This is a GET.

# Installation
```js
  // clone the repo
  cd valital
  npm install 
  // run in dev mode and go to http://localhost:3000/
  npm run dev
  // build for production
  npm run build
  // run production
  npm start
  // run tests
  npm run test
```

# Specs
|Route|Method|Body|URL param|Response|
|---|---|---|---|---|
| /  | GET  |   |   | text  |
|  /api/v1/who-made-me | GET |   |   | text |
| /api/v1/get-word  | GET  |   | word as string (get-word/bear) |  json |
| /api/v1/number-to-word  | POST  | {number: 3}  |  |  json |

# Screenshots
### Tests
<img width="675" alt="SCR-20231228-oncf" src="https://github.com/4ban/valital/assets/2269864/53f26883-f757-409d-81e1-e786ab4e7ab1">

### /api/v1/number-to-word
<img width="1225" alt="SCR-20231228-omsu" src="https://github.com/4ban/valital/assets/2269864/1e3d06f2-3432-4220-b6c1-41dc68c93ade">
<img width="799" alt="SCR-20231228-omqs" src="https://github.com/4ban/valital/assets/2269864/45002074-977b-4632-b567-678232fae77d">
<img width="915" alt="SCR-20231228-ompi" src="https://github.com/4ban/valital/assets/2269864/a643c267-16ce-4fd3-8ed2-52da9648e489">
<img width="1226" alt="SCR-20231228-omnw" src="https://github.com/4ban/valital/assets/2269864/479601cb-63fe-4224-a9aa-1d10315403b4">

### /api/v1/who-made-me
<img width="1208" alt="SCR-20231228-omiy" src="https://github.com/4ban/valital/assets/2269864/df5bdc33-cc28-4b60-a2d8-366d2fe6f4a0">


### /api/v1/get-word
<img width="1208" alt="SCR-20231228-ombk" src="https://github.com/4ban/valital/assets/2269864/77af3f96-03ff-46cd-bb4c-2eb7c83b22cd">
<img width="1206" alt="SCR-20231228-olvc" src="https://github.com/4ban/valital/assets/2269864/e207e639-70e3-4bf6-ac6a-249b34fe304c">
<img width="1204" alt="SCR-20231228-olsr" src="https://github.com/4ban/valital/assets/2269864/3603c93e-4aed-4135-8b23-d26983874dd0">

<img width="1207" alt="SCR-20231228-omen" src="https://github.com/4ban/valital/assets/2269864/bc16157e-77e5-4c13-a858-63eb8021f9c5">

### Basic and middleware
<img width="1208" alt="SCR-20231228-omlu" src="https://github.com/4ban/valital/assets/2269864/ef27234b-38e8-41e6-b3bb-86a2a706a297">
<img width="1208" alt="SCR-20231228-omkq" src="https://github.com/4ban/valital/assets/2269864/72eed7ed-7241-4964-8d9d-71b1bc9a1355">

