const {
  spawn
} = require('child_process');
const images = [
  '#700bad',
'#dadb0d',
'#fa7a55',
'#e7ce7c',
'#101ca7',
'#badca7',
'#a55e1f',
'#1dcd1e',
'#ca7bff',
'#badb01',
'#b1e55d',
'#b000b5',
'#dab055',
'#defec7',
'#ac1d1c',
'#bab1e5',
'#bada55',
'#ba51c5',
'#b1a5ed',
'#add1c7',
'#defea7',
'#effec7',
'#0dde57',
'#0ff5e7',
'#01de57',
'#5ad157',
'#5afe57',
'#5e1ec7',
'#b00b00',
'#c105ed',
'#b055e5',
'#dabb1e',
'#dec0de',
'#d0ab1e',
'#d00d1e',
'#faece5',
'#fe11a5',
'#1ad1e5',
'#f001ed',
'#0b5e55',
'#501ace',
'#c0ffee',
'#50c001',
'#dabe57',
'#dababe',
'#1ce7ea',
'#deba7e'
]
//
//
// const images = ['ff0000','ffff22','ffff33', '0000ff']
//



function delay(array) {
  if (!array.length) return

  const split = 1
  const head = array.slice(0, split)
  const tail = array.slice(split)

  head.forEach((image) => {
    image = image.slice(1)
    const wget = spawn('wget', [`http://placehold.it/2700x1119/${image}/${image}`, '-O', `#${image}.png`]);

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

  setTimeout(function() {
    delay(tail)
  }, 10)

}

delay(images)
