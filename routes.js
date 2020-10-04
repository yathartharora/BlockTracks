const routes = require('next-routes')();

routes
.add('/', 'index')
.add('/developer','/developer')
.add('/about','/about')
.add('/show','/show')
.add('/product/true','/product/true')
.add('/product/false','/product/false')
.add('/product/true','/product/true')
.add('/firms/:address/registration','/registration')
.add('/firms/:address','/product/validity')
.add('/firms/:address/login','/login')


module.exports = routes;