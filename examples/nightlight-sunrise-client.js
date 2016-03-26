var seneca = require('seneca')()
.client({host:"localhost" })
.act({role: 'suncalculator', event: 'sunrise'}, console.log);