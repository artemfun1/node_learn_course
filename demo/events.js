const EventEmitter = require('events')


// const emitter = new EventEmitter()

// emitter.on('any',(data)=>{
// console.log(data)
// })

// emitter.emit('any',{a:1})

class Dispatcher extends EventEmitter{
  subscribe(eventname,cb){
    console.log('podpiska')
    this.on(eventName,cb)
  }
}