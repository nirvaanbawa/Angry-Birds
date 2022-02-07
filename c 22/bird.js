
class  Bird{
    constructor(x,y){
        this.w=60
        this.h=60

       
        this.Body=Matter.Bodies.rectangle(x,y,this.w,this.h,{
            friction:0.5,
            density:3,
            restitution:0
        })
    Matter.World.add(myWorld,this.Body)
    this.img=loadImage("bird.png")
}
Display(){
    
    push()
    translate(this.Body.position.x,this.Body.position.y)
    rotate(this.Body.angle)
   image(this.img,0,0,this.w,this.h)
    pop()
}
}