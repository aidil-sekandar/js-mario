// Player class and configurations
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 400,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
    this.gravity = 0.5;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    this.draw();

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.velocity.y = 0;
    }
  }
}

// player movement
window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.isPressed = true;
      break;
    case 68:
      keys.right.isPressed = true;
      break;
    case 87:
      player.velocity.y = -6;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.isPressed = false;
      break;
    case 68:
      keys.right.isPressed = false;
      break;
  }
});
