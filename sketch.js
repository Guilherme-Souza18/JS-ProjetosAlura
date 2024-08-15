function setup() {
  createCanvas(600, 600);
  background("#e3e3e3");
}

function draw() {
  stroke("black");
  fill("blue");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 35);
  }
}
