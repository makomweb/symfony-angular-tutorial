# Tutorial project: Symfony + Angular + Material

## Create Symfony service and start the backend

~~~bash
symfony new backend
cd backend
composer install
symfony server:start -d
~~~

## Create the Angular client + start it

~~~bash
npm install -g @angular/cli
~~~

Edit environment variables so that Angular is in the PATH.

`C:\Users\YOUR_USERNAME\AppData\Roaming\npm\node_modules\@angular\cli\bin`

Create the client app

~~~bash
ng new client
cd client
ng serve --open
~~~

## Create a new backend controller

~~~bash
cd server
composer require symfony/orm-pack
composer require --dev symfony/maker-bundle
php bin/console make:controller
~~~

## Install CORS

~~~bash
cd server
composer require nelmio/cors-bundle
~~~

## Install Material

~~~bash
cd client
ng add @angular/material

# or 

npm install @angular/material @angular/cdk @angular/animations --save

ng add @angular/material
~~~

## Create a UI component

~~~bash
cd client
ng g c weather --module=app
~~~

## Create a UI service

~~~bash
cd client
ng g s weather
~~~

## Layout the components

~~~bash
cd client
npm install -s @angular/flex-layout
~~~