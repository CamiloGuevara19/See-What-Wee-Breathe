let arm = [];
let population = 6;

function setup() {
  createCanvas(800, 600);
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
      let colr = map( noise(xoff,this.roff),0,1,-45,300);
    stroke(255,60);
    fill(0,255-colr-50,200-colr-50,125);
      let y = map( noise(xoff,yoff), 0, 1, -this.size*8, this.size*8);
      vertex(x,y);
      //let v2size = map(noise(this.roff),0,1,1,6);
      //vertex(x+this.size,y*v2size);
      // point(x,y);
      // point(y,x);
      xoff += 0.05;
    }

    this.yoff += 0.01;
    endShape(CLOSE);
    pop();
  }
}










