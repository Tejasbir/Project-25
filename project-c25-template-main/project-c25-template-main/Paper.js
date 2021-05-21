class Paper{
    constructor(x,y,r){
    var options = {
        isStatic:false,
        restitution: 0.5,
        friction:0.4,
        density:0.2
    }
    this.x = x
    this.y = y
    this.r = r
    this.image = loadImage("paper.png")
    this.body = Bodies.circle(this.x, this.y, this.r-20, options)
    World.add(world,this.body) 
    }
    diplay(){
        var p = this.body.position
        push()
        translate(p.x,p.y)
        fill(255,0,255)
        ImageBitmapRenderingContext(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}