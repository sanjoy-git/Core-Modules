const eventEmitter=require('events');
// const emitter=new eventEmitter();

class School extends eventEmitter{
    startPeriod(){
        setTimeout(() => { 
          this.emit('bellRing',{
            priod:'first',
            text:'hello word',
          });
        }, 2000);
    }
}

module.exports=School;
