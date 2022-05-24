let arm = [];
let population = 6;
let  miStorage = window.localStorage;

function setup() {

  const w = window.innerWidth;
  const h = window.innerHeight;

  createCanvas(w, h);
  for (let i = 0; i < population; i++){
    arm.push(new waveMaker());
  }


}

function draw() {
  background(0,10);
  for (let i = 0; i < arm.length; i++){
    arm[i].update(i);
  }
}


function waveMaker(){
  this.size = 10;
  this.yoff = 0;
  this.roff = 0;

  this.update = function(uIndex){
    this.roff += 0.025;
    let xoff = 0;
    let yoff = this.yoff;
    push();
    translate(width/2,height/2);
    rotate(this.roff+uIndex);
    strokeWeight(2);
    stroke(255,255);
    beginShape();
    //vertex(0,0);
    for (let x = 0; x < height; x += this.size){
    stroke(255,60);
      let y = map( noise(xoff,yoff), 0, 1, -this.size*8, this.size*8);
      vertex(x,y);
      //let v2size = map(noise(this.roff),0,1,1,6);
      //vertex(x+this.size,y*v2size);
      // point(x,y);
      // point(y,x);
      //xoff += 0.05;
      xoff += (localStorage.getItem("valor") * 0.0005);
    }

    //this.yoff += 0.01;
    this.yoff += (localStorage.getItem("valor") * 0.0001);

    let colr = map( noise(xoff,this.roff),0,1,-45,300);
    
    //fill(0-colr-50,0-colr-50,240-colr-50,125);

    switch (localStorage.getItem("valor")) {
      case "130":
        fill(214-colr-50,255-colr-50,183-colr-50,125);
      break;

      case "370":
        fill(231-colr-50,33-colr-50,29-colr-50,125);
      break;

      case "400":
        fill(232-colr-50,27-colr-50,23-colr-50,125);
      break;

      case "180":
        fill(239-colr-50,255-colr-50,174-colr-50,125);
      break;

      case "230":
        fill(243-colr-50,227-colr-50,68-colr-50,125);
      break;

      case "100":
        fill(122-colr-50,231-colr-50,199-colr-50,125);
      break;

      case "300":
        fill(232-colr-50,64-colr-50,61-colr-50,125);
      break;

      case "240":
        fill(254-colr-50,145-colr-50,57-colr-50,125);
      break;

      case "50":
        fill(148-colr-50,193-colr-50,241-colr-50,125);
      break;
    
      default:
        break;
    }
    endShape(CLOSE);
    pop();
  }
}

function windowResized(){
  w = windowWidth;
  h = windowHeight;
 resizeCanvas(w, h);
}












