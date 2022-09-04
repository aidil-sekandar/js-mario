const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1100;
canvas.height = 500;

const player = new Player();

const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, 500, 1100);
  player.update();
};

animate();
