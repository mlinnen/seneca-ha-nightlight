var seneca = require('seneca')()


seneca.use('nightlight');
seneca.use('../seneca-zwave-homegenie/zwave-control');

seneca.listen({host:"localhost" })