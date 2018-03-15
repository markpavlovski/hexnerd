const { spawn } = require('child_process');



const images = ['ff0000','ffff22','ffff33', '0000ff']




function delay(array){
  if(!array.length) return

  const split = 2
  const head = array.slice(0,split)
  const tail = array.slice(split)

  head.forEach((image)=> {
    const wget = spawn('wget', [`http://placehold.it/1000x300/${image}/${image}`, '-O', `${image}.png`]);

    wget.stdout.on('data', (data) => {
      // console.log(`stdout: ${data}`);
    });

    wget.stderr.on('data', (data) => {
      // console.log(`stderr: ${data}`);
    });

    wget.on('close', (code) => {
      console.log(`child process for image ${image} exited with code ${code}`);
    });
  })

  setTimeout(function(){
    delay(tail)
  },2000)

}

delay(images)
