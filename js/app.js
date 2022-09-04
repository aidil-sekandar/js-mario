const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 500;

const player = new Player();
const platforms = [
  new Platform({ x: 200, y: 300 }),
  new Platform({ x: 600, y: 400 }),
  new Platform({ x: 400, y: 100 }),
];

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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach((platform) => {
    platform.draw();
  });
  player_movement_controller();
  platform_collision_detection_rect();
};

animate();
