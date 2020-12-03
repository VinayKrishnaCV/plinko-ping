class Plinko{
    constructor(x,y) {
        var options = {
         isStatic: true
        }
        this.body = Bodies.circle(x,y,5,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        ellipse(pos.x, pos.y, 10, 10);
    }
}