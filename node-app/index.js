/*----------------------------------------------------------------------------*/
/*                     practice with emitters                                 */
/*----------------------------------------------------------------------------*/

// const {EventEmitter} = require('events'); //import EventEmitter
// const eventEmitter = new EventEmitter();  //create new event

// eventEmitter.on('lunch', () => {          //create new callback function on
//     console.log('yum');                   //event
// });

// eventEmitter.emit('lunch');               //emit event to call the function

/*----------------------------------------------------------------------------*/
/*                     non-blocking by using call back                        */
/*----------------------------------------------------------------------------*/

// const { readFile, readFileSync } = require('fs');

// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt);
// console.log('do this ASAP');

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// });

// console.log('Do this ASAP');

/*----------------------------------------------------------------------------*/
/*                     promised base solution                                 */
/*----------------------------------------------------------------------------*/

// const { readFile } = require('fs').promises;

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// };

// app.get('/', async, (request, response) => {
//     response.send(await readFile('./home.html', 'utf8'));
// });

/*----------------------------------------------------------------------------*/
/*                     module practice                                        */
/*----------------------------------------------------------------------------*/

//const myModule = require('./my-module');

//console.log('myModule;')

// const express = require('express');
// const { readFile } = require('fs');

// const app = express();
// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf-8', (err, html) => {
//         if (err) {
//             response.status(500).send('sorry, out of order');
//         }
//         response.send(html);

//     })
// });

// app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));
