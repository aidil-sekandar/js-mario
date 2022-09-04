const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 500;

const player = new Player();

const keys = {
  left: {
    isPressed: false,
  },
  right: {
    isPressed: false,
  },
};

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 1100, 500);
  player.update();

  if (keys.right.isPressed) {
    player.velocity.x = 7;
  } else if (keys.left.isPressed) {
    player.velocity.x = -7;
  } else {
    player.velocity.x = 0;
  }
};

animate();
