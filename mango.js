class MANGO{
    constructor(x,y,width,height){
        var options ={
            restitution:1,
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
       this.image = loadImage("mango.png")
        this.width = width;
        this.height  = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);

    }
}