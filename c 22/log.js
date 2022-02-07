class  Log extends Base{
    constructor(x,y,h,a){
        super(x,y,20,h)
     
this.a=a
      
    Matter.Body.setAngle(this.Body, this.a)
    this.img=loadImage("log.png")
}

}