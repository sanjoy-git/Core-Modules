const http=require('http');

const os=require('os');
console.log(os.platform());
console.log(os.homedir());
console.log(os.freemem());
console.log(os.cpus());
const fs=require('fs');
fs.writeFileSync('./demofile.txt','Hello word');
fs.appendFileSync('./demofile.txt','Hello words');
fs.readFile('./demofile.txt',(err,data)=>{
  console.log(data.toString());
});
console.log("hello")


const School=require('./school');
const school=new School();

school.on('bellRing',({priod,text})=>{
  console.log(`We need to run! ${priod} ${text}`)
})

school.startPeriod();

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello word");
        res.write("hello word");
        res.end();
    }
    else if(req.url==='/about'){
        res.write("hello word");
        res.write("hello word");
        res.end();
    }
    else{
        res.write('not found')
        res.end();
    }
})

server.listen(3000);

console.log('listening on port 3000');