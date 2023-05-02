//Video Number 31
const EventEmitter = require('events');
const celebrity = new EventEmitter();
//The functions which contains happens is a listener .
//the celebrity.on is an observer i.e an event emitter.

//Observer 1
celebrity.on('race',(Happens)=>{
    if(Happens==='win'){
        console.log('Congratulations ! You Win .')
    }
});

//Observer 2
celebrity.on('race',(Happens)=>{
    if(Happens==='lost'){
        console.log(`Sorry ! You ${Happens}` )
    }
});

process.on('exit',(code)=>{
    console.log('Process exited with code',code)
})

celebrity.emit('race','lost');
celebrity.emit('race','win');