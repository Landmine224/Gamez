var player;
var blobs = [];
var count;
function setup() {
  createCanvas(windowWidth, windowHeight);
  count = floor(width/10);
 player = new Blob(25);
  for(var i = count; i > 0; i--) {
    blobs[i] = new Blob(random(5, 25));
    blobs[i].pos.x = random(0, width);
    blobs[i].pos.y = random(0, height);
  }
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(220);
  var temp = floor(frameCount/frameRate());
  var time;
  if(temp != time){
	time = temp;
  }
  player.show();
  player.move();

  for(var i = count; i > 0; i--) {
	var check = player.eat(blobs[i]) 
	if(check){
		blobs.splice(i, 1);
	} if(blobs[i] != undefined) {
	    blobs[i].show();

	}
  }
  
  if(blobs.length == 1){
	  noLoop();
  }
   push();
  textSize(25);
  fill(255, 0, 255);
  text(time, 20, 30);
  pop();
}

function keyPressed() {
  if (keyCode == 87 || keyCode == UP_ARROW) {
    player.move(0, -1);
  }
  if (keyCode == 83 || keyCode == DOWN_ARROW) {
    player.move(0, 1);
  }
  if (keyCode == 65 || keyCode == LEFT_ARROW) {
    player.move(-1, 0);
  }
  if (keyCode == 68 || keyCode == RIGHT_ARROW) {
    player.move(1, 0);
  }
  console.log(keyCode);
  if (keyCode == 32) {
	player.pos.x = width/2;
	player.pos.y = height/2;
  }
}

function keyReleased() {
  if (keyCode == 87 || keyCode == UP_ARROW) {
    player.move(0, 1);
  }
  if (keyCode == 83 || keyCode == DOWN_ARROW) {
    player.move(0, -1);
  }
  if (keyCode == 65 || keyCode == LEFT_ARROW) {
    player.move(1, 0);
  }
  if (keyCode == 68 || keyCode == RIGHT_ARROW) {
    player.move(-1, 0);
  }
}