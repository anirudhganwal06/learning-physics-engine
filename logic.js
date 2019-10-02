let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

const fps = 60;         // Frames per second
const cor = 0.6;        // Coefficient of Restitution
const gravity = 9.8;    // Gravity on earth

class Ball {
    radius = 0;
    mass;
    pos = {
        x: 0,
        y: 0
    };
    vel = {
        x: 0,
        y: 0
    };
    acc = {
        x: 0,
        y: 0
    };
    constructor(radius, mass, posx, posy, velx, vely, accx, accy = gravity) {
        this.radius = radius;
        this.mass = mass;
        this.pos.x = posx;
        this.pos.y = posy;
        this.vel.x = velx;
        this.vel.y = vely;
        this.acc.x = accx;
        this.acc.y = accy;
    }
}

const bodies = [];
/** radius, mass, posx, posy, velx, vely, accx, accy **/
bodies.push(new Ball(14, 1, 60, 30, -7.5, 0, 0, gravity));
// bodies.push(new Ball(12, 1, 250, 30, -3, 0, 0, gravity));
bodies.push(new Ball(10, 1, 170, 40, -3, 0, 0, gravity));

let didCollide = pair => {
    let bodyA = bodies[pair[0]];
    let bodyB = bodies[pair[1]];
    if ((((bodyA.pos.x - bodyB.pos.x) ** 2) + ((bodyA.pos.y - bodyB.pos.y) ** 2)) <= ((bodyA.radius + bodyB.radius) ** 2)) {
        return true;
    }
    return false;
}

let checkForCollition = pairs => {
    for (let i = 0; i < pairs.length; i++) {
        let pair = pairs[i];
        let bodyA = bodies[pair[0]];
        let bodyB = bodies[pair[1]];

        let velA = Math.sqrt(((bodyA.vel.x) ** 2) + ((bodyA.vel.y) ** 2));
        let velB = Math.sqrt(((bodyB.vel.x) ** 2) + ((bodyB.vel.y) ** 2));
        let thetaA = Math.atan(bodyA.vel.y / bodyA.vel.x);
        let thetaB = Math.atan(bodyB.vel.y / bodyB.vel.x);
        let contactAngle = Math.PI;


        let collided = didCollide(pair);
        if (collided) {
            bodyA.pos.x -= bodyA.vel.x;
            bodyA.pos.y -= bodyA.vel.y;
            bodyB.pos.x -= bodyB.vel.x;
            bodyB.pos.y -= bodyB.vel.y;


            // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision
            bodyA.vel.x = -(((velA * Math.cos(thetaA - contactAngle) * (bodyA.mass - bodyB.mass)) + (2 * bodyB.mass * velB * Math.cos(thetaB - contactAngle))) * Math.cos(contactAngle) / (bodyA.mass + bodyB.mass)) + (velA * Math.sin(thetaA - contactAngle) * Math.cos(contactAngle - Math.PI / 2));
            bodyA.vel.y = -(((velA * Math.cos(thetaA - contactAngle) * (bodyA.mass - bodyB.mass)) + (2 * bodyB.mass * velB * Math.cos(thetaB - contactAngle))) * Math.sin(contactAngle) / (bodyA.mass + bodyB.mass)) + (velA * Math.sin(thetaA - contactAngle) * Math.sin(contactAngle - Math.PI / 2));
            bodyB.vel.x = -(((velB * Math.cos(thetaB - contactAngle) * (bodyB.mass - bodyA.mass)) + (2 * bodyA.mass * velA * Math.cos(thetaA - contactAngle))) * Math.cos(contactAngle) / (bodyB.mass + bodyA.mass)) + (velB * Math.sin(thetaB - contactAngle) * Math.cos(contactAngle - Math.PI / 2));
            bodyB.vel.y = -(((velB * Math.cos(thetaB - contactAngle) * (bodyB.mass - bodyA.mass)) + (2 * bodyA.mass * velA * Math.cos(thetaA - contactAngle))) * Math.sin(contactAngle) / (bodyB.mass + bodyA.mass)) + (velB * Math.sin(thetaB - contactAngle) * Math.sin(contactAngle - Math.PI / 2));
            // bodyA.vel.x = bodyA.vel.x - ((2 * bodyB.mass / (bodyA.mass + bodyB.mass)) * ((((bodyA.vel.x - bodyB.vel.x) * (bodyA.pos.x - bodyB.pos.x)) + ((bodyA.vel.y - bodyB.vel.y) * (bodyA.pos.y - bodyB.pos.y))) / (((bodyA.pos.x - bodyB.pos.x) ** 2) + ((bodyA.pos.y - bodyB.pos.y) ** 2))) * (bodyA.pos.x - bodyB.pos.x));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
            // bodyA.vel.y = bodyA.vel.y - ((2 * bodyB.mass / (bodyA.mass + bodyB.mass)) * ((((bodyA.vel.x - bodyB.vel.x) * (bodyA.pos.x - bodyB.pos.x)) + ((bodyA.vel.y - bodyB.vel.y) * (bodyA.pos.y - bodyB.pos.y))) / (((bodyA.pos.x - bodyB.pos.x) ** 2) + ((bodyA.pos.y - bodyB.pos.y) ** 2))) * (bodyA.pos.y - bodyB.pos.y));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
            // bodyB.vel.x = bodyB.vel.x - ((2 * bodyA.mass / (bodyB.mass + bodyA.mass)) * ((((bodyB.vel.x - bodyA.vel.x) * (bodyB.pos.x - bodyA.pos.x)) + ((bodyB.vel.y - bodyA.vel.y) * (bodyB.pos.y - bodyA.pos.y))) / (((bodyB.pos.x - bodyA.pos.x) ** 2) + ((bodyB.pos.y - bodyA.pos.y) ** 2))) * (bodyB.pos.x - bodyA.pos.x));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
            // bodyB.vel.y = bodyB.vel.y - ((2 * bodyA.mass / (bodyB.mass + bodyA.mass)) * ((((bodyB.vel.x - bodyA.vel.x) * (bodyB.pos.x - bodyA.pos.x)) + ((bodyB.vel.y - bodyA.vel.y) * (bodyB.pos.y - bodyA.pos.y))) / (((bodyB.pos.x - bodyA.pos.x) ** 2) + ((bodyB.pos.y - bodyA.pos.y) ** 2))) * (bodyB.pos.y - bodyA.pos.y));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
        }
    }
}

let getPairsForCollision = bodies => {
    let i, j;
    let pairs = [];
    for (i = 0; i < bodies.length - 1; i++) {
        for (j = i + 1; j < bodies.length; j++) {
            let bodyA = bodies[i];
            let bodyB = bodies[j];
            let flag = 0;
            if (bodyA.vel.x * bodyB.vel.x < 0) {
                flag = 1;
            }
            if (bodyA.vel.x - bodyB.vel.x > 0) {
                flag = 1;
            }
            if (bodyA.vel.y * bodyB.vel.y < 0) {
                flag = 1;
            }
            if (bodyA.vel.y - bodyB.vel.y > 0) {
                flag = 1;
            }
            // if (flag == 1) {
            pairs.push([i, j]);
            // }
        }
    }
    // console.log(pairs);
    return pairs;
}

let nextVel = (body) => {
    body.vel.x += body.acc.x / fps;
    body.vel.y += body.acc.y / fps;
}

let nextFrame = (bodies) => {
    for (let body of bodies) {
        nextVel(body);
        body.pos.x += body.vel.x;
        body.pos.y += body.vel.y;
    }
}

let checkAndUpdateOnBoundary = body => {
    if (body.pos.x - body.radius <= 0 || body.pos.x + body.radius >= canvas.width) {
        body.vel.x *= -cor;
        body.pos.x = (body.pos.x - body.radius <= 0) ? body.radius : (canvas.width - body.radius);
    }
    if (body.pos.y - body.radius <= 0 || body.pos.y + body.radius >= canvas.height) {
        body.vel.y *= -cor;
        body.pos.y = (body.pos.y - body.radius <= 0) ? body.radius : (canvas.height - body.radius);
    }
};

let draw = bodies => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let i = 0
    for (let body of bodies) {
        ctx.beginPath();
        ctx.arc(body.pos.x, body.pos.y, body.radius, 0, 2 * Math.PI, true);
        if (i % 2 == 0) {
            ctx.fillStyle = '#0f0';
        } else {
            ctx.fillStyle = '#f00';
        }
        ctx.strokeStyle = "#fff";
        ctx.fill();
        ctx.stroke();
        i++;
    }
}

let loop = () => {
    nextFrame(bodies);
    checkForCollition(getPairsForCollision(bodies));
    for (let body of bodies) {
        checkAndUpdateOnBoundary(body);
    }
    draw(bodies);
}

// loop();
setInterval(loop, 1000 / fps);
