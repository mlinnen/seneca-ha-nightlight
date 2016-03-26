

module.exports = function nightlight(options) {

  this.add({role:'suncalculator',event:'sunrise'}, function (msg, respond) {
      console.log('Lights out')
      this.act({role:'zwave',cmd:'control_off',id:7});  // 1st Floor Hall
      this.act({role:'zwave',cmd:'control_off',id:8});  // 2nd Floor Hall
      this.act({role:'zwave',cmd:'control_off',id:3});  // Family Room Lamp
      this.act({role:'zwave',cmd:'control_off',id:10}); // Back Porch
      this.act({role:'zwave',cmd:'control_off',id:4});  // Front Porch
      respond(null, {answer: 'ok'})
  })
  this.add({role:'suncalculator',event:'sunset'}, function (msg, respond) {
      console.log('Lights on')
      this.act({role:'zwave',cmd:'control_on',id:4});  // Front Porch
      respond(null, {answer: 'ok'})
  })

}

