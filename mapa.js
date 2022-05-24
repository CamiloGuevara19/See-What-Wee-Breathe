function setup() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    let  miStorage = window.localStorage;
    createCanvas(w, h);
    img = loadImage('/data/Mapa Cali.png');
    mouse = loadImage('/data/mouse.png')
    imageMode(CENTER);
    document.body.style.cursor = 'none';
}
let ubicaciones = [];
let trail = [];
let a = 0;


ubicaciones[0]={
    nombre: "Parque la Flora",
    posX: 824,
    posY: 137,
    valor: 130,
    }
    ubicaciones[1]={
    nombre: "Unico",
    posX: 971,
    posY: 237,
    valor: 370,
    }
    ubicaciones[2]= {
    nombre: "San Nicolas",
    posX: 780,
    posY: 247,
    valor: 400,
    }
    ubicaciones[3]={
    nombre: "San Antonio (loma)",
    posX: 693,
    posY: 301,
    valor: 100,
    }
    ubicaciones[4]={
    nombre: "Tequendama",
    posX: 707,
    posY: 426,
    valor: 230,
    }
    ubicaciones[5]={
    nombre: "Caney",
    posX: 844,
    posY: 556,
    valor: 180,
    }
    ubicaciones[6]={
    nombre: "Unicentro",
    posX: 692,
    posY: 656,
    valor: 300,
    }
    ubicaciones[7]={
    nombre: "Javeriana",
    posX: 765,
    posY: 740,
    valor: 240,
    }
    ubicaciones[8]={
    nombre: "Comfandi",
    posX: 690,
    posY: 835,
    valor: 50,
    }

function draw (){
    const w = window.innerWidth;
    const h = window.innerHeight;
    
    background(0);
    
    img.resize(h*0.77,h-10);
    image(img, w/2, h/2);
    paintMouse()   
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
function mousePressed(){
    
    ubicaciones.forEach(actual =>{
      if(actual.posX-23 < mouseX && actual.posX+23>mouseX&&actual.posY-23<mouseY&&actual.posY+23>mouseY){
        localStorage.setItem('nombre', actual.nombre);
        localStorage.setItem('valor', actual.valor);
        console.log(actual.valor + ":" + actual.nombre)

        window.location.href = "./index.html";
      }
    })
}