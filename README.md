# seneca-ha-nightlight
This is a Seneca plugin that checks when the sun has come up or gone down and turns various z-wave and lifx devices off and on when this happens.
This is a work in progress right now as it is not very re-usable.

## Install
Since Seneca and this service are built on top of [Node.js](https://nodejs.org) you will need to have it installed.
Clone this repository into a directory of your choice and run the following command:
```
npm install
```

You will not be able to run this service unless you have the [seneca-zwave-homegenie](https://github.com/mlinnen/seneca-zwave-homegenie) plugin installed in the same directory. 
So make sure you install this dependent plugin from github before you attempt to run this plugin.

Modify the nightlight.js to change the zwave and lifx devices you want to turn on and off when sunset and sunrise does occur.

## Example
If you followed the install instructions you should be able to run the following command.
```
node startallservices.js
```
This will find the seneca-suncalculator, seneca-zwave-homegenie and seneca-lifx plugins and launch them along with the nightlight plugin.  Every 30 seconds the nightlight 
plugin wakes up and checks if it is sunrise or sunset and it will call the zwave and lifx plugin to turn the lights on or off.

## Actions
This plugin does not respond to any actions.  Actually this plugin could have been a simple client instead of a plugin.

# Roadmap
These are a few items I think this module could use to make it more useful.  I don't have any plans on
when the following will be done or in what order.
- Convert this into a service with actions or simply make it a client.  Need to decide if this should remain a service.
    - If it remains a service perhaps it should expose actions to add, remove and list the zwave devices this service uses. 
- Make the zwave devices less hardcoded
- Add tests that include mocking out the dependent services
- Add more examples
- Add a build process
