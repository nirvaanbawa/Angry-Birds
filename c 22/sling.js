class Sling{
constructor(a,b){
  this.sling1=loadImage("sling1.png")
        this.sling2=loadImage("sling2.png")
        this.sling3=loadImage("sling3.png")
  this.conn=Matter.Constraint.create({
    
    pointA:a,
    bodyB:b,
    stiffness:0.008,
    length:20
    
        })
        Matter.World.add(myWorld,this.conn)
}
display(){
  
  if(this.conn.bodyB!=null){
    var a=this.conn.pointA
  var b=this.conn.bodyB.position
  push()
  if(a.x<195)
  strokeWeight(5.5)
  else
  strokeWeight(3)
  stroke("#301607")
  line(a.x-38,a.y+15,b.x-30,b.y)
  line(a.x+20,a.y,b.x+25,b.y)
  image(this.sling3,b.x-25,b.y,15,20)
  pop()
  }

    //line(this.conn.pointA.x,this.conn.pointA.y,this.conn.bodyB.position.x,this.conn.bodyB.position.y)
image(this.sling1,204,650,40,130)
image(this.sling2,180,630,40,80)
}

fly(){
  this.conn.bodyB=null
}

}