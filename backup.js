window.addEventListener("load", () => {
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = 500;
  canvas.width = 1100;

  const gravity = 0.55;

  class Player {
    constructor() {
      this.position = {
        x: 100,
        y: 400,
      };
      this.height = 40;
      this.width = 40;
      this.velocity = {
        x: 0,
        y: 0,
      };
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
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }

  class Platform {
    constructor({ x, y }) {
      this.position = {
        x,
        y,
      };
      this.width = 200;
      this.height = 15;
    }

    draw() {
      ctx.fillStyle = "blue";
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }

  const player = new Player();
  const platforms = [new Platform({ x: 500, y: 300 }), new Platform({ x: 300, y: 500 })];

  const keys = {
    left: {
      isPressed: false,
    },
    right: {
      isPressed: false,
    },
  };

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

  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player.update();
    platforms.forEach((platform) => {
      platform.draw();
    });

    if (keys.right.isPressed && player.position.x < 600) {
      player.velocity.x = 7;
    } else if (keys.left.isPressed && player.position.x > 100) {
      player.velocity.x = -7;
    } else {
      player.velocity.x = 0;

      platforms.forEach((platform) => {
        if (keys.right.isPressed) {
          platform.position.x -= 7;
        } else if (keys.left.isPressed) {
          platform.position.x += 7;
        }
      });
    }

    platform_collision_detection_rect();
  };

  window.addEventListener("keydown", ({ keyCode }) => {
    switch (keyCode) {
      case 65:
        keys.left.isPressed = true;
        break;
      case 68:
        keys.right.isPressed = true;
        break;
      case 87:
        player.velocity.y = -10;
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

  animate();
});
