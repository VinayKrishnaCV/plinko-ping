class Particle{
    constructor(x,y) {
        var options = {
         isStatic: false
        }
        this.body = Bodies.circle(x,y,5,options);
        this.colour=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display(){
        push()
        var pos =this.body.position;
        rectMode(CENTER);
        fill(this.colour);
        ellipse(pos.x, pos.y, 10, 10);
        pop()
    }
}