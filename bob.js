class bob {
    constructor(x, y, radius) {
      var options = {
          'restitution':1,
          'friction':0.2,
          'density':7.8,
          'isStatic':true
      }
      this.body=Matter.Bodies.circle(x,y,radius,options);
      this.width = width;
      this.height = height;
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display()
    {
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      circle (0, 0, this.radius);
      pop();
    }
  };