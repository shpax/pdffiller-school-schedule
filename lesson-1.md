#  Node Package Manager

## Basics (5 min)

- why do package managers exist?
- alternatives to npm (yarn & bower)
- module system

## What is package.json (10-15 min)

[link to docs](https://docs.npmjs.com/files/package.json)

```bash
npm init
```
- name
- version - semver [?]
- description
- [scripts](https://docs.npmjs.com/misc/scripts), reserved words (start, stop, test, prepare, prepublish, postpublish)
- main file

### Semver
- ^ (minor)
-  ~ (patch), 
- git urls (git://github.com/npm/cli.git#v1.0.27)

### Module tree structure (10 min)
```bash
npm install --save-dev webpack
```
- node_modules (local & global - `/usr/local/lib`)
- local .bin folder

### Dependencies (10 min)
- dependencies
- devDependencies (NODE_ENV, external module use)
- peerDependencies (module compatibility)
- bundledDependencies (published with module)
- package-lock.json

## Break (10 min)

## External page resources
- parallel load
- script load & parsing
- defer, async

## Package & task managers (mostly Webpack, 10-15 min)
- Webpack, Grunt, Gulp (2 min)
- Webpack as a module bundler
- Can use custom files or npm modules
```
Module is a discrete chunk of functionality. Provides a single task or responsibility. Abstraction & Encapsulation
```
- Webpack provides code splitting (dynamic import())
- provides loaders (css, sass, jsx, ts, json, jade/pug, etc.)
- Babel, ES standarts
- plugin system

## Sample Project (20-40 min)
- index.html + src/index.js + npm run build (just run webpack --mode=development)
- splitting code to modules, module scope, export & export default
- import vs  require()
- webpack --watch
- webpack.config.js
- webpack-serve
- webpack files path

## Homework
```
Setup webpack for Home Project. Split classes/logic into separate modules & setup their bundling
```