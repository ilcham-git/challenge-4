//pilihan com
function getPilihanKomputer() {
  const com = Math.random();
  if (com < 0.34) return `batu`;
  if (com >= 0.34 && com < 0.67) return `kertas`;
  return `gunting`;
}

//rule game
function getHasil(com, player) {
  if (player == com) return `DRAW`;
  if (player == `batu`) return com == `gunting` ? `PLAYER 1 WIN` : `COM WIN`;
  if (player == `kertas`) return com == `gunting` ? `COM WIN` : `PLAYER 1 WIN`;
  if (player == `gunting`) return com == `batu` ? `COM WIN` : `PLAYER 1 WIN`;
}

//fungsi acak gambar
function acak() {
  const gambarKomputer = document.querySelector(".komputerPilihan");
  const gambar = ["batu", "kertas", "gunting"];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1500) {
      clearInterval;
      return;
    }
    gambarKomputer.setAttribute("src", "assetsgame/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

//membandingkan pilihan player dan com
const pilihanPemain = document.querySelectorAll("#player img");
pilihanPemain.forEach(function (i) {
  i.addEventListener("click", function () {
    const pKomputer = getPilihanKomputer();
    const pPemain = i.className;
    const hasil = getHasil(pKomputer, pPemain);
    //fungsi acak
    acak();
    //set time out
    setTimeout(function () {
      const gambarKomputer = document.querySelector(".komputerPilihan");
      gambarKomputer.setAttribute("src", "assetsgame/" + pKomputer + ".png");
      const vs = document.querySelector("#vs");
      vs.innerHTML = `<p class="pemenang">${hasil}</p>`;
    }, 1500);
  });
});

//reset game
const tombol = document.querySelector("#refresh");
tombol.onclick = function () {
  const vs = document.querySelector("#vs");
  vs.innerHTML = `VS`;
};
