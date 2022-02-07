var a=0

function setup(){
createCanvas(800, 800)
angleMode(DEGREES)
rectMode(CENTER)
}

function draw(){
    background(220)
    push()
    translate(200,200 )
    rotate(a)
    rect(0, 0, 20, 100)
    
a+=1
pop()
rect(200,200,20,100)
}