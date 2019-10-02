// let c = document.getElementById('myCanvas');
// var ctx = c.getContext("2d");
// let position = {
//     y: 0
// }
// ctx.moveTo(0, position.y);
// ctx.lineTo(100, position.y);
// ctx.stroke();

// setTimeout(() => {
//     console.log('y = ' + position.y);
//     position.y += 10;
//     ctx.moveTo(0, position.y);
//     ctx.lineTo(100, position.y);
//     ctx.stroke();
// }, 1000);

// setTimeout(() => {
//     console.log('y = ' + position.y);
//     position.y += 10;
//     ctx.moveTo(0, position.y);
//     ctx.lineTo(100, position.y);
//     ctx.stroke();
// }, 1000);

// setInterval(() => {
//     console.log('y = ' + position.y);
//     position.y += 10;
//     ctx.moveTo(0, position.y);
//     ctx.lineTo(100, position.y);
//     ctx.stroke();
// },
//     1000);

// var canvas = document.getElementById("myCanvas");

// canvas.addEventListener("mousemove", getPosition, false);

// function getPosition(event) {
//     var x = event.x;
//     var y = event.y;

//     var canvas = document.getElementById("myCanvas");

//     x -= canvas.offsetLeft;
//     y -= canvas.offsetTop;

//     console.clear();
//     console.log("x:" + x + " y:" + y);
// }


//get DPI
// let dpi = window.devicePixelRatio;
// //get canvas
// let canvas = document.getElementById('myCanvas');
// //get context
// let ctx = canvas.getContext('2d');

// accX = 0;
// accY = 10;
// velX = 1;
// velY = 0;
// ballPosX = 100;
// ballPosY = 20;
// radius = 10;
// fpi = 100;
// cor = 0.99

// // loop through 50fps

// let animate = () => {
//     console.log('velX: ' + velX);
//     console.log('velY: ' + velY);
//     // draw ball at ballPosX, ballPosY coordinates
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// ctx.beginPath();
// ctx.arc(ballPosX, ballPosY, radius, 0, Math.PI * 180, true);
// ctx.fill();
//     // fill in colours etc

//     // move ball
//     ballPosX = calcNextPos('x');
//     ballPosY = calcNextPos('y');

//     // do boundary detection for bounce
//     if (ballPosX + radius > canvas.width || ballPosX - radius < 0) {
//         // change velX to negative to bounce the ball the oposite X direction
//         velX = -(cor * calcNextVel('x'));
//     }
//     if (ballPosY + radius > canvas.height || ballPosY - radius < 0) {
//         // change velX to negative to bounce the ball the oposite X direction
//         velY = -(cor * calcNextVel('y'));
//     }
//     // do the same for velY
// }

// let calcNextPos = (dir) => {
//     let nextPos;
//     if (dir == 'x') {
//         nextPos = calcNextVel('x') + ballPosX;
//         posX = nextPos;
//     } else {
//         nextPos = calcNextVel('y') + ballPosY;
//         posY = nextPos;
//     }
//     return nextPos;
// }

// let calcNextVel = (dir) => {
//     let nextVel;
//     if (dir == 'x') {
//         nextVel = accX / fpi + velX;
//         velX = nextVel;
//     } else {
//         nextVel = accY / fpi + velY;
//         velY = nextVel;
//     }
//     return nextVel;
// }

// setInterval(animate, 1000 / fpi);






/*****************************************  good one  *********************************************/
// const fps = 60;     // Frames per second
// const cor = 1;    // Coefficient of Restitution

// class Ball {
//     radius = 0;
//     mass = 1;
//     pos = {
//         x: 0,
//         y: 0
//     };
//     vel = {
//         x: 0,
//         y: 0
//     };
//     acc = {
//         x: 0,
//         y: 0
//     };
//     constructor(radius, mass, posx, posy, velx, vely, accx, accy) {
//         this.radius = radius;
//         this.mass = mass;
//         this.pos.x = posx;
//         this.pos.y = posy;
//         this.vel.x = velx;
//         this.vel.y = vely;
//         this.acc.x = accx;
//         this.acc.y = accy;
//     }
// }

// let calcNextPos = (dir, ball) => {
//     ball.pos[dir] = calcNextVel(dir, ball) + ball.pos[dir];
//     return ball.pos[dir];
// }

// let calcNextVel = (dir, ball) => {
//     ball.vel[dir] = ball.acc[dir] / fps + ball.vel[dir];
//     return ball.vel[dir];
// }


// // let checkAndUpdateOnBoundary = body => {
// //     if (body.pos.x <= 0 || body.pos.x + body.width >= canvas.width) {
// //         // nextVel(body);
// //         body.vel.x *= -cor;
// //         body.pos.x = (body.pos.x <= 0) ? 0 : (canvas.width - body.width);
// //         // body.pos.x = (body.pos.x <= 0) ? (-body.pos.x) : (2 * canvas.width - 2 * body.width - body.pos.x);
// //     }
// //     if (body.pos.y <= 0 || body.pos.y + body.height >= canvas.height) {
// //         // nextVel(body);
// //         body.vel.y *= -cor;
// //         body.pos.y = (body.pos.y <= 0) ? 0 : (canvas.height - body.height);
// //         // body.pos.y = (body.pos.y <= 0) ? (-body.pos.y) : (2 * canvas.height - 2 * body.height - body.pos.y);
// //     }
// // };

// let checkBoundryCondition = (ball) => {
//     if (ball.pos.x + ball.radius >= canvas.width - 1 || ball.pos.x - ball.radius <= 1) {
//         ball.vel.x *= -cor;
//         ball.pos.x = (ball.pos.x - ball.radius <= 0) ? 0 : (canvas.width - ball.radius);
//         // ball.pos.x = calcNextPos('x', ball);
//     }
//     if (ball.pos.y + ball.radius >= canvas.height - 1 || ball.pos.y - ball.radius <= 1) {
//         ball.vel.y *= -cor;
//         ball.pos.y = (ball.pos.y - ball.radius <= 0) ? 0 : (canvas.height - ball.radius);
//         // ball.pos.y = calcNextPos('y', ball);

//     }
// };

// let canvas = document.getElementById('myCanvas');
// let ctx = canvas.getContext('2d');
// let didCollide = pair => {
//     let ballA = balls[pair[0]];
//     let ballB = balls[pair[1]];
//     if ((((ballA.pos.x - ballB.pos.x) ** 2) + ((ballA.pos.y - ballB.pos.y) ** 2)) <= ((ballA.radius + ballB.radius + 10) ** 2)) {
//         return true;
//     }
//     return false;
// }

// let checkForCollition = pairs => {
//     for (let i = 0; i < pairs.length; i++) {
//         let pair = pairs[i];
//         let ballA = balls[pair[0]];
//         let ballB = balls[pair[1]];
//         let collided = didCollide(pair);
//         // let collided = true
//         if (collided) {
//             // ballA.vel.x = -ballA.vel.x;
//             // ballA.vel.x = ballA.vel.x - ((2 * ballB.mass / (ballA.mass + ballB.mass)) * ((((ballA.vel.x - ballB.vel.x) * (ballA.pos.x - ballB.pos.x)) + ((ballA.vel.y - ballB.vel.y) * (ballA.pos.y - ballB.pos.y))) / (((ballA.pos.x - ballB.pos.x) ** 2) + ((ballA.pos.y - ballB.pos.y) ** 2))) * (ballA.pos.x - ballB.pos.x));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
//             // ballA.vel.y = ballA.vel.y - ((2 * ballB.mass / (ballA.mass + ballB.mass)) * ((((ballA.vel.x - ballB.vel.x) * (ballA.pos.x - ballB.pos.x)) + ((ballA.vel.y - ballB.vel.y) * (ballA.pos.y - ballB.pos.y))) / (((ballA.pos.x - ballB.pos.x) ** 2) + ((ballA.pos.y - ballB.pos.y) ** 2))) * (ballA.pos.y - ballB.pos.y));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
//             // ballB.vel.x = ballB.vel.x - ((2 * ballA.mass / (ballB.mass + ballA.mass)) * ((((ballB.vel.x - ballA.vel.x) * (ballB.pos.x - ballA.pos.x)) + ((ballB.vel.y - ballA.vel.y) * (ballB.pos.y - ballA.pos.y))) / (((ballB.pos.x - ballA.pos.x) ** 2) + ((ballB.pos.y - ballA.pos.y) ** 2))) * (ballB.pos.x - ballA.pos.x));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
//             // ballB.vel.y = ballB.vel.y - ((2 * ballA.mass / (ballB.mass + ballA.mass)) * ((((ballB.vel.x - ballA.vel.x) * (ballB.pos.x - ballA.pos.x)) + ((ballB.vel.y - ballA.vel.y) * (ballB.pos.y - ballA.pos.y))) / (((ballB.pos.x - ballA.pos.x) ** 2) + ((ballB.pos.y - ballA.pos.y) ** 2))) * (ballB.pos.y - ballA.pos.y));   // These equations of final velocity in 2d are copied from wikipedia link: https://en.wikipedia.org/wiki/Elastic_collision 
//         }
//     }
// }

// let getPairsForCollision = balls => {
//     let i, j;
//     let pairs = [];
//     for (i = 0; i < balls.length - 1; i++) {
//         for (j = i + 1; j < balls.length; j++) {
//             let ballA = balls[i];
//             let ballB = balls[j];
//             let flag = 0;
//             if (ballA.vel.x * ballB.vel.x < 0) {
//                 flag = 1;
//             }
//             if (ballA.vel.x - ballB.vel.x > 0) {
//                 flag = 1;
//             }
//             if (ballA.vel.y * ballB.vel.y < 0) {
//                 flag = 1;
//             }
//             if (ballA.vel.y - ballB.vel.y > 0) {
//                 flag = 1;
//             }
//             // if (flag == 1) {
//             pairs.push([i, j]);
//             // }
//         }
//     }
//     // console.log(pairs);
//     return pairs;
// }

// let move = balls => {
//     // render balls position to dom
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     let i;
//     for (i = 0; i < balls.length; i++) {
//         let ball = balls[i];
//         if (ball.pos.y > canvas.height) {
//             ball.pos.y = canvas.height;
//         }
//         ball.pos.x = calcNextPos('x', ball);
//         ball.pos.y = calcNextPos('y', ball);
//         checkBoundryCondition(ball);

//         ctx.beginPath();
//         ctx.arc(ball.pos.x, ball.pos.y, ball.radius, 0, Math.PI * 2, true);
//         ctx.stroke();
//         // console.log('velx: ' + ball.vel.x);
//         // console.log('vely: ' + ball.vel.y);
//     }
//     // checkForCollition(getPairsForCollision(balls));
// }

// let balls = [];
// balls[0] = new Ball(10, 1, 50, 40, -3, 0, 0, 10);
// // balls[1] = new Ball(10, 1, 50, 40, -2, 0, 0, 10);
// // balls[2] = new Ball(10, 1, 50, 10, 3, 0, 0, 10);
// // balls[3] = new Ball(10, 10, 100, 100, 1, 0, 0, 10);
// // balls[4] = new Ball(10, 1, 50, 10, 1, 0, 10, 12);
// // balls[5] = new Ball(10, 1, 50, 10, 1, 0, 10, 30);
// setInterval(() => {
//     move(balls);
// },
//     1000 / fps
// );

// // document.addEventListener('mousedown', event => {
// //     const posX = event.x;
// //     const posY = event.y;
// //     console.log(posX + " " + posY);
// //     balls.push(new Ball(10, 1, posX, posY, 0, 0, 2, 10));
// // });


// // let canvas = document.getElementById('myCanvas');
// // let ctx = canvas.getContext('2d');

// // let physicalObjects = [];








/******************  copied from internet  ***********************/

// var canvas = document.getElementById('myCanvas'),
//     ctx = canvas.getContext('2d'),
//     height = 400,
//     width = 400,
//     x = 200,
//     y = 0,
//     vy = 0,
//     ay = 0,
//     m = 0.1,    // Ball mass in kg
//     r = 10,     // Ball radius in cm, or pixels.
//     dt = 0.02,  // Time step.
//     e = -0.5,   // Coefficient of restitution ("bounciness")
//     rho = 1.2,  // Density of air. Try 1000 for water.
//     C_d = 0.47, // Coeffecient of drag for a ball
//     A = Math.PI * r * r / 10000 // Frontal area of the ball; divided by 10000 to compensate for the 1px = 1cm relation
//     ;

// ctx.fillStyle = 'red';

// function loop() {
//     var fy = 0;

//     /* Weight force, which only affects the y-direction (because that's the direction gravity points). */
//     fy += m * 9.81;

//     /* Air resistance force; this would affect both x- and y-directions, but we're only looking at the y-axis in this example. */
//     fy += -1 * 0.5 * rho * C_d * A * vy * vy;

//     /* Verlet integration for the y-direction */
//     dy = vy * dt + (0.5 * ay * dt * dt);
//     /* The following line is because the math assumes meters but we're assuming 1 cm per pixel, so we need to scale the results */
//     y += dy * 100;
//     new_ay = fy / m;
//     avg_ay = 0.5 * (new_ay + ay);
//     vy += avg_ay * dt;

//     /* Let's do very simple collision detection */
//     if (y + r > height && vy > 0) {
//         /* This is a simplification of impulse-momentum collision response. e should be a negative number, which will change the velocity's direction. */
//         vy *= e;
//         /* Move the ball back a little bit so it's not still "stuck" in the wall. */
//         y = height - r;
//     }

//     draw();
// }

// function draw() {
//     ctx.clearRect(0, 0, width, height);
//     ctx.beginPath();
//     ctx.arc(x, y, r, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.closePath();
// }

// /* A real project should use requestAnimationFrame, and you should time the frame rate and pass a variable "dt" to your physics function. This is just a simple brute force method of getting it done. */
// setInterval(loop, dt * 1000);





// Get the width and height of the window
// var win = window,
//     d = document,
//     e = d.documentElement,
//     g = d.getElementsByTagName('body')[0],
//     width = win.innerWidth || e.clientWidth || g.clientWidth,
//     height = win.innerHeight || e.clientHeight || g.clientHeight;

// let canvas = document.getElementById('myCanvas');

// var physicalObjects = [];

// var context = canvas.getContext("2d");

// var PhysicalObject = function (x, y, w, h) {
//     // Set the object's x/y position
//     this.x = x;
//     this.y = y;

//     // Set the object's width and height
//     this.width = w;
//     this.height = h;

//     // Initialise the object's x and y velocity with a value of 0 (it's stationary initially)
//     this.xVel = 0.1;
//     this.yVel = 0.1;

//     // Adjust the object's x velocity
//     this.addXVel = function (vel) {
//         this.xVel += vel;
//     };

//     // Adjust the object's y velocity
//     this.addYVel = function (vel) {
//         this.yVel += vel;
//     };

//     // Update the object's position for the next frame
//     this.nextFrame = function () {
//         this.x += this.xVel;
//         this.y += this.yVel;
//     }
// }

// frameRender = function () {
//     // Clear view
//     context.clearRect(0, 0, width, height);

//     // For each object in the physicalObjects array...
//     for (var i = 0; i < physicalObjects.length; i++) {

//         // Draw a rectangle on the canvas to represent the object, based on the object's x, y, width and height
//         context.fillRect(
//             physicalObjects[i].x,
//             physicalObjects[i].y,
//             physicalObjects[i].width,
//             physicalObjects[i].height
//         );

//         // Tell the object to update itself for the next frame
//         physicalObjects[i].nextFrame();
//     }
// }

// frameRenderLoop = function () {
//     // Use requestAnimationFrame to trigger the 'frameRenderLoop' function as soon as the browser is ready to repaint
//     requestAnimationFrame(frameRenderLoop);

//     // Render the current frame
//     frameRender();radius = 0;
//     mass = 1;
//     pos = {
//         x: 0,
//         y: 0
//     };
//     vel = {
//         x: 0,
//         y: 0
//     };
//     acc = {
//         x: 0,
//         y: 0
//     };
//     constructor(radius, mass, posx, posy, velx, vely, accx, accy) {
//         this.radius = radius;
//         this.mass = mass;
//         this.pos.x = posx;
//         this.pos.y = posy;
//         this.vel.x = velx;
//         this.vel.y = vely;
//         this.acc.x = accx;
//         this.acc.y = accy;
// //     }
// }

// // Start the render loop
// frameRenderLoop();

// // Add an object into the engine at x: 100, y: 100, with a width and height of 20 pixels.
// physicalObjects.push(new PhysicalObject(100, 100, 20, 20));

// // Give it a little push!
// physicalObjects[0].addXVel(0.1);

// function screenLoop(obj) {
//     // Drifted off of right edge 
//     if (obj.x - (obj.width / 2) > canvas.width)
//         obj.x = -obj.width / 2;

//     // Drifted off of left edge
//     if (obj.x + (obj.width / 2) < 0)
//         obj.x = canvas.width + obj.width / 2;

//     // Drifted off of bottom edge 
//     if (obj.y - (obj.height / 2) > canvas.height)
//         obj.y = -obj.height / 2;

//     // Drifted off of top edge
//     if (obj.y + (obj.height / 2) < 0)
//         obj.y = canvas.height + obj.height / 2;
// }









// const fps = 60;
// const cor = 0.5;
// const gravity = 10;

// class Rectangle {
//     mass = 1;
//     pos = {
//         x: 0,
//         y: 0
//     };
//     width;
//     height;
//     vel = {
//         x: 0,
//         y: 0
//     };
//     acc = {
//         x: 0,
//         y: gravity
//     };
//     constructor(mass, posx, posy, width, height, velx, vely, accx, accy = gravity) {
//         this.mass = mass;
//         this.pos.x = posx;
//         this.pos.y = posy;
//         this.width = width;
//         this.height = height;
//         this.vel.x = velx;
//         this.vel.y = vely;
//         this.acc.x = accx;
//         this.acc.y = accy;
//     }
// }

// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');

// const bodies = [];
// /** mass, posx, posy, width, height, velx, vely, accx, accy **/
// bodies.push(new Rectangle(1, 20, 20, 50, 20, 5, 0, 0, gravity));
// bodies.push(new Rectangle(1, 100, 20, 50, 20, 5, 0, 0, gravity));

// let nextVel = (body) => {
//     body.vel.x += body.acc.x / fps;
//     body.vel.y += body.acc.y / fps;
// }

// let nextFrame = (bodies) => {
//     for (let body of bodies) {
//         nextVel(body);
//         body.pos.x += body.vel.x;
//         body.pos.y += body.vel.y;
//     }
// }

// let checkAndUpdateOnBoundary = body => {
//     if (body.pos.x <= 0 || body.pos.x + body.width >= canvas.width) {
//         // nextVel(body);
//         body.vel.x *= -cor;
//         body.pos.x = (body.pos.x <= 0) ? 0 : (canvas.width - body.width);
//         // body.pos.x = (body.pos.x <= 0) ? (-body.pos.x) : (2 * canvas.width - 2 * body.width - body.pos.x);
//     }
//     if (body.pos.y <= 0 || body.pos.y + body.height >= canvas.height) {
//         // nextVel(body);
//         body.vel.y *= -cor;
//         body.pos.y = (body.pos.y <= 0) ? 0 : (canvas.height - body.height);
//         // body.pos.y = (body.pos.y <= 0) ? (-body.pos.y) : (2 * canvas.height - 2 * body.height - body.pos.y);
//     }
// };

// let draw = bodies => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (let body of bodies) {
//         ctx.beginPath();
//         ctx.rect(body.pos.x, body.pos.y, body.width, body.height);
//         ctx.strokeStyle = '#f00';
//         ctx.stroke();
//     }
// }

// let loop = () => {
//     nextFrame(bodies);
//     for (let body of bodies) {
//         checkAndUpdateOnBoundary(body);
//     }
//     draw(bodies);
// }

// // loop();
// setInterval(loop, 1000 / fps);