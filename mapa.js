function setup() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    createCanvas(w, h);
    img = loadImage('/data/Mapa Cali.png');
    imageMode(CENTER);
}

function draw (){
    const w = window.innerWidth;
    const h = window.innerHeight;
    background(0);
    img.resize(680,h-10);
    image(img, w/2, h/2);
}


function windowResized(){
     w = windowWidth;
     h = windowHeight;
    resizeCanvas(w, h);
  }