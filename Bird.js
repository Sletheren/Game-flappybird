class Bird {
	constructor() {
		this.y = Math.floor(HEIGHT/2)
		this.x = Math.floor(WIDTH/6)
		this.gravity =  0.5
		this.upForce =  -13
		this.airForce = 0.9
		this.velocity = 1
	}

	show() {
		fill(255, 0, 0);
		noStroke()
		ellipse(this.x, this.y, BIRD_SIZE, BIRD_SIZE)
	}

	update() {
		this.velocity += this.gravity
		this.y += this.velocity
	}

	jump() {
		this.velocity += this.upForce
		this.velocity *= this.airForce
	}

	offGrid() {
		if (
			this.y+BIRD_SIZE > HEIGHT ||
			this.y < 0
		) {
			return true;
		}
		return false;
	}
}
