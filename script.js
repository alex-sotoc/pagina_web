let dibujoActual = 'rana'; // Inicia mostrando la rana por defecto

// Variables globales para las animaciones
let sunSize = 30;
let leftX = 150;
let rightX = 250;
let sunRadius = 100;
let xPos = 50;
let yPos = 50;
let xPos2 = 350;
let yPos2 = 100;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvas-container");
  actualizarModoLoop();
}

function draw() {
  if (dibujoActual === 'rana') {
    dibujarRana();
  } else if (dibujoActual === 'conejo') {
    dibujarConejo();
  } else if (dibujoActual === 'cena') {
    dibujarCena();
  } else if (dibujoActual === 'nevado') {
    dibujarNevado();
  } else if (dibujoActual === 'muñeco') {
    dibujarMuñeco();
  } else if (dibujoActual === 'solExplota') {
    animarSolExplota();
  } else if (dibujoActual === 'nubesSeparan') {
    animarNubesSeparan();
  } else if (dibujoActual === 'estrellaFugaz') {
    animarEstrellaFugaz();
  }
}

// Función para cambiar de dibujo o animación mediante los botones
function cambiarDibujo(nombre) {
  dibujoActual = nombre;
  
  // Reiniciar valores de animación si se seleccionan
  if (nombre === 'solExplota') {
    sunSize = 30;
  } else if (nombre === 'nubesSeparan') {
    leftX = 150;
    rightX = 250;
    sunRadius = 100;
  } else if (nombre === 'estrellaFugaz') {
    xPos = 50;
    yPos = 50;
    xPos2 = 350;
    yPos2 = 100;
  }

  actualizarModoLoop();
}

// Controla si p5.js corre de forma continua (animación) o estática
function actualizarModoLoop() {
  if (['solExplota', 'nubesSeparan', 'estrellaFugaz'].includes(dibujoActual)) {
    loop(); // Activa el bucle continuo para animaciones
  } else {
    noLoop(); // Renderizado estático para dibujos fijos
    redraw();
  }
}

// --- 1. RANA ---
function dibujarRana() {
  background(255);
  let x = 200;
  let y = 250;
  noStroke();
  fill(30, 204, 91); // a nice froggy green!
  ellipse(x, y, 200, 100); // face
  ellipse(x - 50, y - 50, 40, 40); // left eye socket
  ellipse(x + 50, y - 50, 40, 40); // right eye socket
  fill(255, 255, 255); // whites of the eyes
  ellipse(x - 50, y - 50, 30, 30); // left eyeball
  ellipse(x + 50, y - 50, 30, 30); // right eyeball
  fill(0, 0, 0);
  ellipse(x, y, 150, 50);
  rect(x - 55, y - 55, 10, 10);
  rect(x + 45, y - 55, 10, 10);
}

// --- 2. DIENTES DE CONEJO ---
function dibujarConejo() {
  background(255);
  let eyeSize = 11;
  let toothLength = 11;
  fill(255);
  stroke(0);
  ellipse(150, 70, 60, 120); // left ear
  ellipse(240, 70, 60, 120); // right ear
  ellipse(200, 170, 150, 150); // face
  
  fill(0, 0, 0);
  ellipse(170, 150, eyeSize, eyeSize); // left eye
  ellipse(230, 150, eyeSize, eyeSize); // right eye
  line(150, 200, 250, 200); // mouth
  
  noFill();
  rect(185, 200, 15, toothLength); // left tooth
  rect(200, 200, 15, toothLength); // right tooth
}

// --- 3. ¿QUÉ HAY DE CENA? ---
function dibujarCena() {
  // Fondo (Mesa de madera)
  background(186, 145, 20); 

  // Plato
  fill(255);
  stroke(0);
  strokeWeight(1);
  ellipse(200, 200, 350, 350);
  ellipse(200, 200, 300, 300);

  // Orilla / Base de la pizza
  fill(212, 148, 55);
  triangle(200, 110, 130, 260, 270, 260);

  // Queso de la pizza
  fill(255, 215, 0);
  triangle(200, 130, 140, 250, 260, 250);

  // Pepperonis
  fill(180, 40, 40);
  ellipse(200, 170, 25, 25);
  ellipse(180, 210, 25, 25);
  ellipse(220, 210, 25, 25);

  // Guisantes verdes
  fill(50, 180, 50);
  ellipse(130, 160, 20, 20);
  ellipse(120, 180, 20, 20);
  ellipse(140, 180, 20, 20);
}

// --- 4. DÍA NEVADO SOLEADO ---
function dibujarNevado() {
  background(0, 200, 255);
  fill(0, 255, 0);
  rect(0, 300, 400, 100); // The ground
  
  fill(255, 255, 0); // The sun
  ellipse(80, 64, 100, 100);
  
  fill(255, 255, 255); // The snowman bodies
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);
}

// --- 5. MUÑECO DE NIEVE ---
function dibujarMuñeco() {
  background(255);
  rect(0, 300, 400, 100);
  ellipse(200, 300, 150, 150);
  ellipse(200, 200, 100, 100);
  ellipse(200, 120, 75, 75);
  line(160, 200, 100, 150); // brazos
  line(240, 200, 300, 150);
}

// --- 6. EL SOL QUE EXPLOTA ---
function animarSolExplota() {
  noStroke();
  background(82, 222, 240);
  
  sunSize = sunSize + 1;
  fill(255, 204, 0);
  ellipse(200, 298, sunSize, sunSize);
  
  fill(76, 168, 67);
  rect(0, 300, 400, 100);
}

// --- 7. NUBES QUE SE SEPARAN ---
function animarNubesSeparan() {
  noStroke();
  background(184, 236, 255);
  
  leftX -= 1;
  rightX += 1;
  sunRadius += 2;
  
  fill(255, 170, 0);
  ellipse(200, 100, sunRadius, sunRadius);
  
  fill(255, 255, 255);
  // Nube izquierda
  ellipse(leftX, 150, 126, 97);
  ellipse(leftX + 62, 150, 70, 60);
  ellipse(leftX - 62, 150, 70, 60);
  
  // Nube derecha
  ellipse(rightX, 100, 126, 97);
  ellipse(rightX + 62, 100, 70, 60);
  ellipse(rightX - 62, 100, 70, 60);
}

// --- 8. ESTRELLA FUGAZ ---
function animarEstrellaFugaz() {
  background(29, 40, 115);
  
  xPos += 2;
  yPos += 3;
  xPos2 -= 1.5;
  yPos2 += 2;
  
  fill(255, 242, 0);
  ellipse(xPos, yPos, 10, 10);
  
  fill(200, 220, 255);
  ellipse(xPos2, yPos2, 6, 6);
}