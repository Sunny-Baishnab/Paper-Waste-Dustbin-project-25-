class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:0.5
        }
        this.body=Bodies.circle(x,y,60,options);
        this.radius=60;
        this.image=loadImage("paper.png");
        World.add(world,this.body);
    }
    display(){
        
        fill("white");
        var pos=this.body.position;
        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,70,70);
    }
}