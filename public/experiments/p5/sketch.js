let fft;
let mic;
let position = 0;
let still = 2;
let begin;
let end;
let valley;
let peak;

let circ = []; 

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 1; i++) {
    circ.push(new Wave());
  }
  begin = width * 2/25-50;
  end = width+15;
  valley = width * 3/12;
  peak = width * 5 / 6.5;

  fft = new p5.FFT();
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);
  fill(0)
  stroke(255)
   for (let i = 0; i < circ.length; i++) {
    circ[i].display();
   }

  let vol = mic.getLevel();

  console.log(vol);

  for (let y = height / 3; y < height * 2/3; y += 10) {
    beginShape();
    for (let x = begin; x < end; x += 20) {
      let m = 0;
      if (x > valley && x < peak) {
        m = x < width / 2 ? x - valley : peak - x;
        let n = -map(vol * 5, 0, 1, 0, m) * noise(position + x / 20 + y + 1000);
        curveVertex(x, n + y);
      } else {
        curveVertex(x, y);
      }
    }
    endShape();
  }

  position += 0.01
  still += 0.1

}

class Wave {
  constructor() {
    this.x = 40;
    this.y = 40;
    this.diameter = random(width)/5;
    
  }


  display() {

     
    
    
}
}

document.querySelector('body').addEventListener('click', () => {
  getAudioContext().resume();
});