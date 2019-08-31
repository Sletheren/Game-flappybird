const WIDTH = 400
const HEIGHT = 600
const BIRD_SIZE = 20
const FRAMES_PER_PIPE = 85 

let bird
let pipes = []

function setup () {
	createCanvas(WIDTH, HEIGHT)
	bird = new Bird()
	pipes.push(new Pipe())
}

function draw () {
	background(0)

	for(let i=pipes.length-1; i>=0; i--) {
		pipes[i].show()
		pipes[i].update()
		if(pipes[i].isOffScreen()) {
			pipes.splice(i, 1)
		}
		if(pipes[i].isCollision(bird)) {
			gameOver()
		}
	}

	if (bird.offGrid()) {
		gameOver()
	}

	bird.update()
	bird.show()

	if (frameCount % FRAMES_PER_PIPE === 0) {
		pipes.push(new Pipe())
	}
}

function gameOver () {
	background(255,0,0)
	textSize(40);
	textAlign(CENTER);
	text("YOU DIED.", floor(WIDTH/2), floor(HEIGHT/2));
	fill(255);
	noLoop()
}

function keyPressed () {
	if (keyCode === 32) {
		bird.jump()
	}
}
