class Bob {
    constructor(x, y, color) {
      var options = {
          //isStatic : true,
          restitution : 1,
          friction : 0,
          frictionAir : 0.0,
          slop : 1,
          inertia : Infinity
      }
      this.body = Bodies.rectangle(x,y,40,40, options);
      this.x = x;
      this.y = y;
      this.color = "black";
       
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(5);
      stroke(73,255,233);
      fill(this.color);
      ellipse(0,0, 60,60);
      pop();
    }
  };