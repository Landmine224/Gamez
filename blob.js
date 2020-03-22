function Blob(d, x, y) {
  if ((x && y) == undefined) {
    this.pos = createVector(width / 2, height / 2);
  } else {
    this.pos = createVector(x, y);
  }
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  if (d == undefined) {
    this.d = 25;
  } else {
    this.d = d;
  }
  this.drag = createVector(0,0);
  this.color = 0;
  this.topSpeed = 10;
  this.ar = this.d/2 * this.d/2 * PI

  this.show = function() {
    push();
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.d);
    pop();
  }

  this.update = function() {
    this.move();
  }
  
  this.eat = function(blob) {
	var minX = this.pos.x - this.d/2;
	var maxX = this.pos.x + this.d/2;
	var minY = this.pos.y - this.d/2;
	var maxY = this.pos.y + this.d/2;
	var eaten;
	if(blob != undefined){
	if((blob.pos.x > minX) && (blob.pos.x < maxX) && (blob.pos.y > minY) && (blob.pos.y < maxY)) {
		var combinedArea = this.ar + blob.ar;
		this.d += sqrt(combinedArea/PI) * .1;
		eaten = true;
		return eaten;
	  }	else {
		  eaten = false;
		  return eaten;
	  }
	}
  }

  this.move = function(x, y) {
    this.acc.add(x / 10, y / 10);
	this.drag.x = -this.vel.x/150;
	this.drag.y = -this.vel.y/150;
	if(this.vel.x > this.topSpeed){
		this.vel.x = this.topSpeed;
	} else if(this.vel.x < -this.topSpeed){
		this.vel.x = -this.topSpeed;
	} else if(this.vel.y > this.topSpeed){
		this.vel.y = this.topSpeed;
	} else if(this.vel.y < -this.topSpeed){
		this.vel.y = -this.topSpeed;
	} else {
		this.vel.add(this.acc);
	}
	this.vel.add(this.drag);
    this.pos.add(this.vel);

    if (this.pos.x > width - this.d/2) {
		this.vel.x = -this.vel.x;
    } else if (this.pos.x < 0 + this.d/2) {
		this.vel.x = -this.vel.x;
    } else if (this.pos.y < 0 + this.d/2) {
		this.vel.y = -this.vel.y
    } else if (this.pos.y > height - this.d/2) {
		this.vel.y = -this.vel.y;
    }
  }


}