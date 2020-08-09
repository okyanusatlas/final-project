Mckinsey Home task

TASK: Create a calculator app with seperated backend(as API) and frontend

How start it:
1) Checkout the project
2) run npm install inside "be"
3) run npm install inside "fe"
4) run npm start in "fe" and in "be"
5) Frontend code should run on localhost:3000, backend on localhost:5000

Things that are missing/ didn't added because it's a very simple application
1) ESLint, usually I'm adding a standart linter in major projects where we work with 
multiple different people, however I don't believe it's necessery for such a small project
2) Frontend testing, I've skipped it here as only thing the frontend does is to give an input, send it to the server and show the result,
frontend testing is always more painful.
3) If one fancies, npm package "concurrently" is very cool to start both servers in one command (https://www.npmjs.com/package/concurrently)
4) CSS, the UI is useful and does what it is expected to do, however it doesn't look so nice
5) Finding a better way than using the "eval" as it's recommended to not use. Since in this small app there isn't any security issue possible to happen,
I don't see any harm to use this useful command.
6) Having more specific error messages for more specific possible mistakes ( I couldn't think anything other than divide by 0 and wrong inputs)
7) using istanbul or nyc for test coverage

How to run tests: 
1) Go into be folder
2) run "npm run test"





