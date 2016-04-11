var seneca = require('seneca')()


seneca.use('nightlight');
seneca.use('seneca-zwave-homegenie');
seneca.use('seneca-suncalculator');
seneca.use('seneca-lifx');

seneca.listen({host:"localhost" })
