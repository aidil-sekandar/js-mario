class Platform {
  constructor({ x, y }) {
    this.position = {
      x,
      y,
    };
    this.width = 300;
    this.height = 15;
  }

  draw() {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const platform_collision_detection_rect = () => {
  platforms.forEach((platform) => {
    const player_left = player.position.x;
    const player_right = player.position.x + player.width;
    const player_bottom = player.position.y + player.height;

    const platform_left = platform.position.x;
    const platform_right = platform.position.x + platform.width;
    const platform_up = platform.position.y;

    const detection = [
      player_bottom <= platform_up,
      player_bottom + player.velocity.y >= platform_up,
      player_right >= platform_left,
      player_left <= platform_right,
    ];

    if (detection.every((e) => e)) {
      player.velocity.y = 0;
    }
  });
};
