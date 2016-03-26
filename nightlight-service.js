require('seneca')()
  .use('nightlight')
  .use('../../seneca-zwave-homegenie/zwave-control')
  .listen({host:"localhost" })