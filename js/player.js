// Player class and configurations
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
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
    ctx.fillStyle = "blue";
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
const standard_speed = 7;
const jump_high = 8;

const player_movement_controller = () => {
  if (keys.right.isPressed && player.position.x <= 600) {
    player.velocity.x = standard_speed;
  } else if (keys.left.isPressed && player.position.x >= 100) {
    player.velocity.x = -standard_speed;
  } else {
    player.velocity.x = 0;

    platform_scrolling_effects();
  }
};

// key input
const left = 65;
const right = 68;
const jump = 87;

window.addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case left:
      keys.left.isPressed = true;
      break;
    case right:
      keys.right.isPressed = true;
      break;
    case jump:
      player.velocity.y = -jump_high;
      break;
  }
});

window.addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case left:
      keys.left.isPressed = false;
      break;
    case right:
      keys.right.isPressed = false;
      break;
  }
});
