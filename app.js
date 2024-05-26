document.addEventListener("DOMContentLoaded", () => {
  class Board {
    create() {
      for (let i = 0; i < 15; i++) {
        const node = document.createElement("div");
        for (let i = 0; i < 30; i++) {
          const innerNode = document.createElement("div");
          node.appendChild(innerNode);
        }
        document.getElementById("board").appendChild(node);
      }
    }
  }

  class Frog {
    constructor() {
      this.row = 15;
      this.column = 15;
    }

    create() {
      const board = document.getElementById("board");
      const frog = board.childNodes[this.row].childNodes[this.column];
      
      frog.style.backgroundColor = "green";
    }

    update(direction) {
      const board = document.getElementById("board");
      if (direction === "left") {
        const oldFrog = board.childNodes[this.row].childNodes[this.column + 1];
        oldFrog.style.backgroundColor = "white";
      } else if (direction === "up") {
        if (this.row === 0) {
          alert("Game over: win");
          window.location.reload();
        }
        const oldFrog = board.childNodes[this.row + 1].childNodes[this.column];
        oldFrog.style.backgroundColor = "white";
      } else if (direction === "right") {
        const oldFrog = board.childNodes[this.row].childNodes[this.column - 1];
        oldFrog.style.backgroundColor = "white";
      } else {
        const oldFrog = board.childNodes[this.row - 1].childNodes[this.column];
        oldFrog.style.backgroundColor = "white";
      }

      const newFrog = board.childNodes[this.row].childNodes[this.column];
      newFrog.style.backgroundColor = "green";
    }

    move(e) {
      switch(e.keyCode) {
        case 37:
          this.column -= 1;
          this.update("left");
          break;

        case 38:
          this.row -= 1;
          this.update("up");
          break;

        case 39:
          this.column += 1;
          this.update("right");
          break;

        case 40:
          this.row += 1;
          this.update("down");
          break;
      }
    }
  }

  class Car {
    constructor(row, column) {
      this.row = row;
      this.column = column;
    }

    create() {
      const board = document.getElementById("board");
      const car = board.childNodes[this.row].childNodes[this.column];
      if (this.row > 0) {
        car.style.backgroundColor = "red";
      }
    }

    update() {
      this.detectCollision();

      const board = document.getElementById("board");
      const oldCar = board.childNodes[this.row].childNodes[this.column + 1];
      const newCar = board.childNodes[this.row].childNodes[this.column];

      if (oldCar !== undefined) {
        oldCar.style.backgroundColor = "white";
      }  
      
      if (newCar !== undefined) {
        newCar.style.backgroundColor = "red";
      }
    }

    detectCollision() {
      if (this.column === frog.column && this.row === frog.row) {
        alert("Game over");
        window.location.reload();
      }
    }
  }

  class Traffic {
    constructor() {
      this.cars = [];
    }

    create() {
      const cars = [];
      for (let i = 0; i < 15; i++) {
        const carNumber = Math.floor(Math.random() * 10);
        if (carNumber > 8) {
          cars.push(true)
        } else {
          cars.push(false)
        }
      }

      for (let i = 0; i < 15; i++) {
        if (cars[i]) {
          const car = new Car(i, 29);
          car.create();
          this.cars.push(car);
        }
      }
    }

    update() {
      for (let i = 0; i < this.cars.length; i++) {
        this.cars[i].column -= 1;
        this.cars[i].update();
      }
    }
  }

  const board = new Board();
  const frog = new Frog();
  const traffic = new Traffic();
  const updateGame = function() {
    traffic.update();
    traffic.create();
  }

  board.create();
  frog.create();
  traffic.create();
  
  setInterval(updateGame, 200);

  document.addEventListener('keydown', frog.move.bind(frog));
})