var seneca = require('seneca')();
seneca.use('../nightlight');

seneca.act({role: 'suncalculator', event: 'sunrise'}, console.log);