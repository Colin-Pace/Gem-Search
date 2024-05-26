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
    // for (let i = 0; i < 15; i++) {
    //   for (let j = 0; j < 30; j++) {
    //     console.log(board.childNodes[i].childNodes[j]);
    //   }
    // }

    create() {
      const board = document.getElementById("board");
      const frog = board.childNodes[this.row].childNodes[this.column];
      frog.style.backgroundColor = "green";
      //console.log(this.coordinates);
    }

    updateFrog(direction) {
      const board = document.getElementById("board");
      if (direction === "left") {
        const oldFrog = board.childNodes[this.row].childNodes[this.column + 1];
        oldFrog.style.backgroundColor = "white";
      }

      const newFrog = board.childNodes[this.row].childNodes[this.column];
      newFrog.style.backgroundColor = "green";
      //console.log(this.coordinates);
    }

    move(e) {
      //console.log(this.coordinates);
      switch(e.keyCode) {
        case 37:
          this.column -= 1;
          this.updateFrog("left");
          break;

        case 38:
          this.column -= 1;
          this.updateFrog("left");
          break;

        case 39:
          this.column -= 1;
          this.updateFrog("left");
          break;

        case 40:
          this.column -= 1;
          this.updateFrog("left");
          break;
      }
    }
  }

  const board = new Board();
  const frog = new Frog();

  board.create();
  frog.create();

  document.addEventListener('keydown', frog.move.bind(frog));
})