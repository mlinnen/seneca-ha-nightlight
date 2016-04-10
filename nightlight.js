

module.exports = function nightlight(options) {
    var seneca = this;
    
    setInterval(function(options) {
        seneca.act({ role: 'suncalculator', cmd: 'eventcheck', lat: 35.227085, long: -80.843124 }, function(err, result) {
            if (result.answer=='none'){
                seneca.log.debug('not time yet');
            } 
            else if (result.answer=='sunrise'){
                seneca.log.info('Lights out')
                this.act({ role: 'zwave', cmd: 'control_off', id: 7 });  // 1st Floor Hall
                this.act({ role: 'zwave', cmd: 'control_off', id: 8 });  // 2nd Floor Hall
                this.act({ role: 'zwave', cmd: 'control_off', id: 3 });  // Family Room Lamp
                this.act({ role: 'zwave', cmd: 'control_off', id: 10 }); // Back Porch
                this.act({ role: 'zwave', cmd: 'control_off', id: 4 });  // Front Porch
                this.act({ role: 'lifx', cmd: 'light_off', id: 'Family Room 1' });  // Family Room 1
                this.act({ role: 'lifx', cmd: 'light_off', id: 'Family Room 2' });  // Family Room 2
            }
            else if (result.answer=='sunset'){
                seneca.log.info('Lights on')
                this.act({ role: 'zwave', cmd: 'control_on', id: 4 });  // Front Porch
                this.act({ role: 'lifx', cmd: 'light_on', id: 'Family Room 1' });  // Family Room 1
                this.act({ role: 'lifx', cmd: 'light_on', id: 'Family Room 2' });  // Family Room 2
            }
        })
    }, 30000);
}

