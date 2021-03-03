# Angular Mysql CRUD Tutorial - REST API Node & Typescript


en la terminal:
    /////////////// BACKEND //////////////////////

    npm init --yes
    npm i express morgan promise-mysql cors 
    npm install -g typescript 
    tsc --init
    tsc (antes debo crear src/index.ts y configurar tsconfig.js)
    npm run build (antes debo configurar package.json)
    npm i nodemon -D
    npm run dev
    npm i @types/express -D
    npm i @types/morgan @types/cors -D
    mysql -u root -p
    npm i promise-mysql@3.3.1

    /////////////// FRONTEND //////////////////////
    ng new client  --routing
    ng g c components/navigation
    ng g c components/product-form
    ng g c components/product-list
    ng g s services/products
    

en tsconfig.js:
    "target": "es6"
    "ourDir": "./build"

en package.json:
    "scripts":{
        "build": "tsc -w",
        "dev": "nodemon build/index.js"
    }
