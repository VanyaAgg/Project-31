class Plinko{
    constructor(x,y,r){
        var options = {
            restitution : 0.04
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.color = color("white");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
      pop();

    }
}