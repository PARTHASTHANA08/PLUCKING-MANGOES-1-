class TREE{
    constructor(x,y,width,height){
        var options ={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
       this.treeimage = loadImage("tree.png");
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.treeimage,pos.x,pos.y,this.width,this.height);
    
    }
}