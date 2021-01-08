var schedule = require('node-schedule');     

schedule.scheduleJob('00 * * * *', function(){
    console.log('Hello World, This scheduler will say "Hello" every hour to you');
});    