var seneca = require('seneca')();
seneca.use('../nightlight');

seneca.act({role: 'suncalculator', event: 'sunset'}, console.log);