class Pipe {
	constructor() {
		this.top = Math.floor(random(HEIGHT/2))
		this.bottom = Math.floor(random(HEIGHT/2))
		this.x = WIDTH
		this.w = 25
		this.speed = 3
	}

	show() {
		fill(255)
		noStroke()
		rect(this.x, 0, this.w, this.top)
		rect(this.x, HEIGHT-this.bottom, this.w, this.bottom)
	}

	update() {
		this.x -= this.speed
	}

	isOffScreen() {
		return this.x+this.w < 0 ? true : false
	}

	isCollision(bird) {
		if (
			(bird.x + floor(BIRD_SIZE/2) >= this.x && bird.x <= this.x + this.w) &&
			(bird.y - floor(BIRD_SIZE/2) <= this.top || bird.y + floor(BIRD_SIZE/2) >= HEIGHT - this.bottom)
		) {
			return true;
		}
		return false;
	}
}
