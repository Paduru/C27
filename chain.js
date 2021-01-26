class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            length : 20,
            stiffness : 0.04
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
        this.pointB = pointB
    }
    display() {
        
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position;
            //var pointB = this.chain.bodyB.position;

            strokeWeight(5);
            line(pointA.x, pointA.y, this.pointB.x, this.pointB.y);
        }
    }
    fly() {
        this.chain.bodyA = null;
    }
}