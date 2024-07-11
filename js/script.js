const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const contador1 = document.getElementById("contador1");

let contador = 0;
let jumptime = addEventListener("keydown", () => {
  contador1.textContent = contador;
  contador++;
});

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);

  addEventListener("keydown", () => {
    contador1.textContent = contador;
    contador + 1;
    console.log(contador);
  });
};

const loop = setInterval(() => {
  console.log("loop");

  const pipePosition = pipe.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");
  console.log(marioPosition);
  if (pipePosition > 120) {
  }

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 193) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.left = `${marioPosition}px`;
    mario.src = "./imgs/game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "1px";

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
