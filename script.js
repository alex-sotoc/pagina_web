let dibujoActual = 'rana'; // Inicia mostrando la rana por defecto

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent("canvas-container");
  noLoop(); // Renderizado estático optimizado
}

function draw() {
  background(240); // Fondo neutro por defecto

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
  }
}

// Función para cambiar de dibujo mediante los botones
function cambiarDibujo(nombre) {
  dibujoActual = nombre;
  redraw(); // Vuelve a ejecutar draw() para actualizar el lienzo
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