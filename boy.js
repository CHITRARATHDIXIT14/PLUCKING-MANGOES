class boy
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.boyWidth=150;
		this.boyHeight=200;
		this.wallThickness=10;
		
		this.image=loadImage("sprites/boy.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.boyWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(0, this.y-this.boyHeight/2, this.wallThickness, this.boyHeight, {isStatic:false})
		this.rightWallBody=Bodies.rectangle(this.x+this.boyWidth/2, this.y-this.boyHeight/2, this.wallThickness, this.boyHeight, {isStatic:false})
		
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.boyHeight/2,this.boyWidth, this.boyHeight)
			pop()
			
	}

}
