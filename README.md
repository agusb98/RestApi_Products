# Nodejs y Mysql, App Completed (Login, Signin, CRUD, ES6+ y More )

![index](https://user-images.githubusercontent.com/61479841/110896651-c97fa800-82da-11eb-8c8f-4e6f5b4491ea.PNG)
![signin](https://user-images.githubusercontent.com/61479841/110896656-cd132f00-82da-11eb-95a2-59bb07026b75.PNG)


aplicación web usando Angular , Nodejs y la base de datos MySQL. En esta aplicación se nuestra REST API, utilizando Nodejs junto con Typescript que luego es utlizada junto a aplicación frontend usando angular y otros modulos de Javascript.

en la terminal: BACKEND 

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

en la terminal: FRONTEND 

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
