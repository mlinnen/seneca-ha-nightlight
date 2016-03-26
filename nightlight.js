

module.exports = function nightlight(options) {
    var seneca = this;
    
    setInterval(function(options) {
        seneca.act({ role: 'suncalculator', cmd: 'eventcheck', lat: 35.227085, long: -80.843124 }, function(err, result) {
            if (result.answer=='none'){
                console.log('not time yet');
            } 
            else if (result.answer=='sunrise'){
                console.log('Lights out')
                this.act({ role: 'zwave', cmd: 'control_off', id: 7 });  // 1st Floor Hall
                this.act({ role: 'zwave', cmd: 'control_off', id: 8 });  // 2nd Floor Hall
                this.act({ role: 'zwave', cmd: 'control_off', id: 3 });  // Family Room Lamp
                this.act({ role: 'zwave', cmd: 'control_off', id: 10 }); // Back Porch
                this.act({ role: 'zwave', cmd: 'control_off', id: 4 });  // Front Porch
            }
            else if (result.answer=='sunset'){
                console.log('Lights on')
                this.act({ role: 'zwave', cmd: 'control_on', id: 4 });  // Front Porch
            }
        })
    }, 30000);
}

