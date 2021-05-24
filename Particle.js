class particle {
    constructor(x, y, r) {
        var options = {

            isStatic: true
        }
        this.body = Bodies.circle(x, y, this.r, options);
        this.r=r;
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
     ellipse(pos.x, pos.y, pos.z);
    }
};