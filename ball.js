class Ball {
    constructor(x,y,radius){
    var options = {
        density:1,
        friction:1,
        restitution:1

    }
    this.body = Bodies.circle(x, y, radius, options)
    World.add(world,this.body)
    }

    display(){
    ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius) 
    }
}