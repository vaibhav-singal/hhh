class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 200
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.pointB = pointB;
    }

    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            stroke("pink");
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        
        
    }

}