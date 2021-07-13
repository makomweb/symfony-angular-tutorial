# Tutorial project: Symfony + Angular + Material

## Create Symfony service and start the backend

~~~bash
symfony new backend
cd backend
composer install
symfony server:start -d
~~~

## Create the Angular client

~~~bash
npm install -g @angular/cli
~~~

Edit environment variables so that Angular is in the PATH.

`C:\Users\YOUR_USERNAME\AppData\Roaming\npm\node_modules\@angular\cli\bin`

Create the client app

~~~bash
ng new client
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
composer require nelmio/cors-bundle
~~~
