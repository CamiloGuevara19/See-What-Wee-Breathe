function setup() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    createCanvas(w, h);
    img = loadImage('/data/Mapa Cali.png');
    mouse = loadImage('/data/mouse.png')
    imageMode(CENTER);
    document.body.style.cursor = 'none';
}
let trail = [];
let a = 0;

function draw (){
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    background(0);
    paintMouse()   
    img.resize(h*0.77,h-10);
    image(img, w/2, h/2);
}


function windowResized(){
     w = windowWidth;
     h = windowHeight;
    resizeCanvas(w, h);
  }

  function paintMouse(){
      
    trail.push([mouseX, mouseY]);
    for(let i = 0; i < trail.length; i++) {
    noStroke();
    fill(246, 92, 89, a);
    ellipse(trail[i][0], trail[i][1], 15);
      if(a > 55) {
        trail.shift();
        a = 0;
      }
      a += 5;
    };
    image(mouse,mouseX,mouseY);
  }