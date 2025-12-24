const container = document.querySelector(".container");

const resetBtn = document.querySelector("#resetBtn");

const createGrid = (size) => {
  container.innerHTML = "";

  const squareSize = 500 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "black";
    });

    container.appendChild(square);

    resetBtn.addEventListener("click", () => {
      square.style.backgroundColor = "white";
    });
  }
};

createGrid(16);
