var myEngine, myWorld, body, ball, img, sp, box1, box2, pig1, pig2, pig3, bird, log1, pf
function preload(){
    img=loadImage("bg.png")
}
function setup(){
    createCanvas(1200, 800)
    myEngine=Matter.Engine.create()
    imageMode(CENTER)
    myWorld= myEngine.world
    body=Matter.Bodies.rectangle(width/2,height-5,width,10, {
        isStatic:true

    })
    pf=Matter.Bodies.rectangle(200,750,400,50, {
        isStatic:true
        
    })

    Matter.World.add(myWorld,[ body,pf])
    ellipseMode(RADIUS)
    console.log(body)
    rectMode(CENTER)

   


    box1=new Box(720, 650)
    box2=new Box(760, 650)
    box3=new Box(980, 650)
    box4=new Box(1020, 650)
    box5=new Box(680, 650)
    box6=new Box(1060, 650)
    box7=new Box(720, 600)
    box8=new Box(1020, 600)
    box9=new Box(720, 550)
    box10=new Box(1020, 550)
    box11=new Box(760, 570)
    box12=new Box(980, 570)
    pig1=new Pig(700, 260)
    pig2=new Pig(1040,260)
    pig3=new Pig(854, 600)
    bird=new Bird(200, 550)
    log1=new Log(870,600, 258, PI/2)
    log2=new Log(678,470,205,PI)
    log3=new Log(720,450,127,PI)
    log4=new Log(1060,470,205,PI)
    log5=new Log(1020,450,127,PI)
    log6=new Log(870,300,450,PI/2)
    log7=new Log(700,280,116,PI/2)
    log8=new Log(1040,280,116,PI/2)
  //log9=new Log(300,200,100,PI/2)

    
sling=new Sling({
    x:200,y:600
},bird.Body)
  
}
function draw(){
    background(0)
    image(img,width/2,height/2,width,height)
    Matter.Engine.update(myEngine)
   
   fill("brown")
   rect(body.position.x,body.position.y,width, 10)
   rect(pf.position.x,pf.position.y,750, 80)
   box1.Display()
   box2.Display()
   pig1.Display()
   pig2.Display()
   pig3.Display()
   bird.Display()
   log1.Display()
   box3.Display()
   box4.Display()
   box5.Display()
   box6.Display()
   box7.Display()
   box8.Display()
   box9.Display()
   box10.Display()
   box11.Display()
   box12.Display()
   log2.Display()
   log3.Display()
   log4.Display()
   log5.Display()
   log6.Display()
   log7.Display()
   log8.Display()
   //log9.Display()
   //line(bird.Body.position.x,bird.Body.position.y,log9.Body.position.x,log9.Body.position.y)
  //line(sling.pointA.x,sling.pointA.y,sling.bodyB.position.x,sling.bodyB.position.y)
   textSize(20)
   text(mouseX+","+mouseY,mouseX,mouseY)
sling.display()
   
   
}
function mouseDragged(){
    Matter.Body.setPosition(bird.Body,{
        x:mouseX, y:mouseY
    })
}
function mouseReleased(){
    sling.fly()
}