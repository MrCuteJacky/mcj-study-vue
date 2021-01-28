# BABEL

## Create project
```
npm init -y
npm install babel-loader @babel/core @babel/cli @babel/preset-env webpack
```

## Git
```
git init
```

## Use babel
- ### Add .babelrc
```
{
"presets": ["@babel/preset-env"]
}
```

- ### Use babel
```
npx babel src/lab1_var_let_const.js
```

- ### Use babel to file
```
npx babel src/lab1_var_let_const.js --out-file out/lab1_var_let_const.js
```

## module
### setting package.json
```
"type": "module"
```
### run module js
```
node --es-module-specifier-resolution=node src/lab3_main.js
```
