
var moment = require('moment');
var momenttz= require('moment-timezone');
//console.log(moment().format());
//console.log(moment(new Date(1570690654007)).format('MMMM Do YYYY, h:mm:ss a'));

var anchorage = moment.tz(new Date(1570690654007), "America/Anchorage");
var kolkata = anchorage.clone().tz('Asia/Kolkata');

console.log('anchorage : ',anchorage.format('MM/DD/YYYY h:mm:ss a'));
console.log('asia/kolkata : ',kolkata.format('MM/DD/YYYY h:mm:ss a'));

console.log(new Date('10/21/2019 08:00 AM'));
console.log(new Date('10/21/2019 08:00 PM'));

//var a = moment.tz(new Date('10/21/2019 08:00 AM'),"Asia/Kolkata");
//console.log(a);
console.log(moment(new Date('2019-10-21T16:00:00.000Z')).format('MM/DD/YYYY hh::mm a'))
console.log(moment(new Date('2019-10-22T04:00:00.000Z')).format('MM/DD/YYYY hh::mm a'))


