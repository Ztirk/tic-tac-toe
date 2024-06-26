class TicTacToe {
  #board;
  #player;
  #ctx;

  constructor() {
    this.#board = Array.from({ length: 9 });
    this.#player = "X";
    this.#ctx = this.#accessCanvas();
    this.#initializeBoard();
    this.#canvasElement.addEventListener("click", this.#ticTacToe);
  }

  #initializeBoard() {
    const ctx = this.#ctx;

    ctx.canvas.width = 300;
    ctx.canvas.height = 300;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 300, 300);

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(100, 0);
    ctx.lineTo(100, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 100);
    ctx.lineTo(300, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.moveTo(0, 200);
    ctx.lineTo(300, 200);
    ctx.stroke();
  }

  /** @param {MouseEvent} e */
  #ticTacToe = (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    /** @type {CanvasRenderingContext2D} */
    const ctx = this.#ctx;

    ctx.beginPath();
    ctx.strokeStyle = this.#player == "X" ? "yellow" : "green";
    if (!this.#board[0] && x > 0 && x < 100 && y > 0 && y < 100) {
      this.#board[0] = this.#player;
      if (this.#player == "O") ctx.arc(50, 50, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(20, 20);
        ctx.lineTo(80, 80);
        ctx.moveTo(20, 80);
        ctx.lineTo(80, 20);
      }
    } else if (!this.#board[1] && x > 100 && x < 200 && y > 0 && y < 100) {
      this.#board[1] = this.#player;
      if (this.#player == "O") ctx.arc(150, 50, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(120, 20);
        ctx.lineTo(180, 80);
        ctx.moveTo(120, 80);
        ctx.lineTo(180, 20);
      }
    } else if (!this.#board[2] && x > 200 && x < 300 && y > 0 && y < 100) {
      this.#board[2] = this.#player;
      if (this.#player == "O") ctx.arc(250, 50, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(220, 20);
        ctx.lineTo(280, 80);
        ctx.moveTo(220, 80);
        ctx.lineTo(280, 20);
      }
    } else if (!this.#board[3] && x > 0 && x < 100 && y > 100 && y < 200) {
      this.#board[3] = this.#player;
      if (this.#player == "O") ctx.arc(50, 150, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(20, 120);
        ctx.lineTo(80, 180);
        ctx.moveTo(20, 180);
        ctx.lineTo(80, 120);
      }
    } else if (!this.#board[4] && x > 100 && x < 200 && y > 100 && y < 200) {
      this.#board[4] = this.#player;
      if (this.#player == "O") ctx.arc(150, 150, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(120, 120);
        ctx.lineTo(180, 180);
        ctx.moveTo(120, 180);
        ctx.lineTo(180, 120);
      }
    } else if (!this.#board[5] && x > 200 && x < 300 && y > 100 && y < 200) {
      this.#board[5] = this.#player;
      if (this.#player == "O") ctx.arc(250, 150, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(220, 120);
        ctx.lineTo(280, 180);
        ctx.moveTo(220, 180);
        ctx.lineTo(280, 120);
      }
    } else if (!this.#board[6] && x > 0 && x < 100 && y > 200 && y < 300) {
      this.#board[6] = this.#player;
      if (this.#player == "O") ctx.arc(50, 250, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(20, 220);
        ctx.lineTo(80, 280);
        ctx.moveTo(20, 280);
        ctx.lineTo(80, 220);
      }
    } else if (!this.#board[7] && x > 100 && x < 200 && y > 200 && y < 300) {
      this.#board[7] = this.#player;
      if (this.#player == "O") ctx.arc(150, 250, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(120, 220);
        ctx.lineTo(180, 280);
        ctx.moveTo(120, 280);
        ctx.lineTo(180, 220);
      }
    } else if (!this.#board[8] && x > 200 && x < 300 && y > 200 && y < 300) {
      this.#board[8] = this.#player;
      if (this.#player == "O") ctx.arc(250, 250, 30, 0, 2 * Math.PI);
      else {
        ctx.moveTo(220, 220);
        ctx.lineTo(280, 280);
        ctx.moveTo(220, 280);
        ctx.lineTo(280, 220);
      }
    }
    ctx.stroke();

    if (this.#isWon() || this.#isWon() == undefined) {
      this.#playAgain();
    } else this.#swapPlayer();
  };

  #canvasElement = document.getElementById("canvas");

  #accessCanvas = () => {
    var c = document.getElementById("canvas");
    /** @type {CanvasRenderingContext2D} */
    var ctx = c.getContext("2d");
    return ctx;
  };

  #winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  #swapPlayer = () => {
    if (this.#player == "X") this.#player = "O";
    else this.#player = "X";
  };

  #isWon = () => {
    const board = this.#board;

    for (const [a, b, c] of this.#winningConditions)
      if (
        board[a] &&
        board[b] &&
        board[c] &&
        board[a] == board[b] &&
        board[b] == board[c]
      ) {
        this.#canvasElement.removeEventListener("click", this.#ticTacToe);
        return board[a];
      }

    if (board.every((v) => v !== undefined)) return undefined;

    return false;
  };

  #playAgain = () => {
    const divElem = document.getElementById("div");
    divElem.style.display = "flex";

    const h1Elem = document.getElementById("h1");
    h1Elem.textContent =
      this.#isWon() == undefined ? "Draw!" : this.#player + " Won!";

    const buttonElem = document.getElementById("button");
    buttonElem.addEventListener("click", () => {
      this.#board = Array.from({ length: 9 });
      divElem.style.display = "none";
      this.#canvasElement.addEventListener("click", this.#ticTacToe);
      this.#ctx.clearRect(
        0,
        0,
        this.#ctx.canvas.width,
        this.#ctx.canvas.height
      );
      this.#initializeBoard();
    });
  };
}

new TicTacToe();
