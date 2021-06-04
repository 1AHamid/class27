//new class
class Chain{
    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            length:10,
            stiffness:0.4
        }
        this.body=Constraint.create(options)
        //adding the object along with its world to the main matter.world class
        //world is where the object belongs
        //each object finally should belong to matter.world
        World.add(world,this.body)
    }
       display(){
        //name spacing
        var pointA=this.body.bodyA.position
        var pointB=this.body.bodyB.position
        line(pointA.x,pointA.y,pointB.x,pointB.y)
       } 
    
}