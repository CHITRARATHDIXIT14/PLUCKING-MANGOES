class stone{

constructor(x,y,width,height){

var options={
friction:1,
density:1.2,
isStatic:false,
restitution:0
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
this.image=loadImage("sprites/stone.png")
World.add(world,this.body)
}

display(){

var pos=this.body.position
imageMode(CENTER)
image(this.image,pos.x,pos.y,this.width,this.height)




}
















}