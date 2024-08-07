## File system

### To read/write files,

- add fs.readFile(path.join(\_\_dirname,<foldername>,<filename>))

- fs.writeFile(path.join(\_\_dirname, <folder>, <file>),<content to write>, fn)

## NPM - package manager

- using nodemon to run the nodejs without using terminal cmds
- initialize npm by `npm init`
- npm watches `package.json` to see what packages to install from npm
- node_modules folder gets bloated easily as one package might have dep on another package and it will be downloaded as well.
- To install as dev dep, use `npm i nodemon -D`
- scripts: {
  "start" : "node index",
  "dev": "nodemon index"
  }
- To run project, `npm run dev`

## Building a web server (no framework)

- main file as server.js,

## Middleware (express)

Middleware is a request handler that allows you to intercept and manipulate requests and responses before they reach route handlers

- custom - app.use(re,res,next)
- built-in - app.use()
- third-party - cors

- app.use() - does not accept regex, more likely for middleware
- app.all() - used for routing, accepts regex

## Routing

- Routes folder handles all the routing info

## REST API setup

- create employee file to see how to create api

## MVC pattern

- data folder contains db details
- controller folder contains employeeController which just implements the employee functionality for GET req in the employee
- config folder to hold cors config options

### CRUD example

- Creating new employee, we should just add req.body to the obj structure we need.

## JWT Auth

- Install bcrypt package to securely hash and salt the password
- Json Web Token : Form of user identification that has access and refresh token
- Risk of xss and csrf. Not recommended to store token in local storage or cookie. store in memory
- API will verify access token in middleware.
- Refresh token as httpOnly cookie not accessible by javascript.

### To create random token

- In terminal, type node and then enter require('crypto').randomBytes(64).toString('hex')
- crypto is a node core module
- This creates env variables

## User Roles & Permissions

- Authentication is the process of identifying who someone is
- Authorization is the process of verifying what resources someone has access to
- JWT token allows access to api endpoints
- send roles while sending the accessToken. On registering, give the role by default as User

- To test the user roles, user must have roles assigned in the json file and token must be valid. verifyJWT middleware will run first then only go to employees route

## MongoDB & Mongoose

### Data Models

- Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
