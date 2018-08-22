
import crossroads from 'crossroads'


import homeController from './controllers/homeController'
import peopleController from './controllers/peopleController';
import localController from './controllers/localController';
// Agregar los demas controllers


crossroads.addRoute('/', function () {
   $('#root').load('./partials/home.html', homeController)
})
crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', homeController)
})

crossroads.addRoute('#/people', function () {
  $('#root').load('./partials/people.html', peopleController)
})
crossroads.addRoute('#/local-storage', function () {
  $('#root').load('./partials/local-storage.html', localController)
})


// En cada cambio del # va a verificar las rutas
$(window).on('hashchange', function () {
  crossroads.parse(window.location.hash)
})
console.log("hola");
crossroads.parse(window.location.hash)





/*













crossroads.addRoute('#/contact', function () {
  $('#root').load('./partials/contact.html', homeController)
})
crossroads.addRoute('#/people', function () {
  $('#root').load('./partials/people.html', homeController)
})
crossroads.addRoute('#/local-storage', function () {
  $('#root').load('./partials/local-storage.html', homeController)
})*/