# Review Questions

## What is Node.js?

node.js allows javascript code to be used outside the browser. pre-2009 most back-end servers were built using
c++, java, python, node.js allows users who are familiar with javascript to implement server code or back-end code using javascript

## What is Express?

express is a node.js framework which works comparitively to how react works in the front-end but in express's case works on the backend express adds extra functionality, like routing, middleware support and a simpler API.

## Mention two parts of Express that you learned about this week.

two parts or features of express is middleware and routing

## What is Middleware?

middleware are functions that have access to the request object and response object, and the next function in the app's request/response
cycle, examples are logging or security, middleware can change the req, res but does not have to

## What is a Resource?

resources are what we preform crud operations on. they can be virtually anything but in this context refers to the data or information we wish to pass to the browser

## What can the API return to help clients know if a request was successful?

in order to help the client know if a request was successful, an api can return a message or code that states and clarifies the process, code(200) for example

## How can we partition our application into sub-applications?

we can partition our application into sub-applications using express routers

## What is express.json() and why do we need it?

express.json parses JSON to objects, parses incoming requests with JSON payloads
