# Wally.Speedway

## Rules

[Wiki](https://en.wikipedia.org/wiki/Motorcycle_speedway)

## Project setup

```
mkdir wally.speedway
cd wally.speedway

git init
git remote add origin http://git.wally.best/wally/wally.speedway.git
```

Create `README.md`

```
git add ./README.md`
git commit -m "init"
git push --set-upstream origin master
```

Create `.gitignore`: [gitignore.io](https://www.toptal.com/developers/gitignore?templates=node)

Init NPM

```
{                                                            
  "name": "wally.speedway",                                  
  "version": "0.0.1",                                        
  "description": "Wally.Speedway",                           
  "main": "index.js",                                        
  "scripts": {                                               
    "test": "echo \"Error: no test specified\" && exit 1"    
  },                                                         
  "repository": {                                            
    "type": "git",                                           
    "url": "http://git.wally.best/wally/wally.speedway.git"  
  },                                                         
  "keywords": [                                              
    "wally",                                                 
    "speedway"                                               
  ],                                                         
  "author": "wally",                                         
  "license": "MIT"                                           
}
```

Init TS

```
npm i typescript -D
tsc --init
```

Test

```
node .\dist\main.js
```

Init Webpack

```
npm i webpack webpack-cli ts-loader -D
```

Create `webpack.config.js`:

```

```

Add Server

```
npm i webpack-dev-server -D
```

Pack `public` assets

```
npm i copy-webpack-plugin -D
```