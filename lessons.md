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