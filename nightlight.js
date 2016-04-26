

module.exports = function nightlight(options) {
    var seneca = this;
    
    setInterval(function(options) {
        // Turn on the lights 30 minutes after sunset
        seneca.act({ role: 'suncalculator', cmd: 'eventcheck', lat: 35.227085, long: -80.843124, offset: 30 }, function(err, result) {
            if (result.answer=='none'){
                seneca.log.debug('not time yet');
            } 
            else if (result.answer=='sunset'){
                seneca.log.info('Lights on')
                this.act({ role: 'zwave', cmd: 'control_on', id: 4 });  // Front Porch
                this.act({ role: 'zwave', cmd: 'control_level', id: 4, level: 35 });  // Front Porch
                this.act({ role: 'lifx', cmd: 'light_on', id: 'Fireplace Right' });  // Fireplace Right
                this.act({ role: 'lifx', cmd: 'light_on', id: 'Fireplace Left' });  // Fireplace Left
            }
        })
        // Turn off the lights 30 minutes before sunrise
        seneca.act({ role: 'suncalculator', cmd: 'eventcheck', lat: 35.227085, long: -80.843124, offset: -30 }, function(err, result) {
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
                this.act({ role: 'lifx', cmd: 'light_off', id: 'Fireplace Right' });  // Fireplace Right
                this.act({ role: 'lifx', cmd: 'light_off', id: 'Fireplace Left' });  // Fireplace Left
            }
        })
    }, 30000);
}

