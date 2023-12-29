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