class  slingShot{
    constructor(bodyA, pointB){
        this.sling1=loadImage("sling1.png")
        this.sling2=loadImage("sling2.png")
        this.sling3=loadImage("sling3.png")
        var options= {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.02,
            length:10

        }

       
        this.Body=Matter.Constraint.create(options)
    Matter.World.add(myWorld,this.Body)
   
}
Display(){
    var a=this.Body.bodyA.position
    var b=this.Body.pointB
   line(a.x,a.y,b.x,b.y)
}
}