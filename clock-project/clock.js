const hh = document.getElementById("hh");
const mm = document.getElementById("mm");
const ss = document.getElementById("ss");

const setClockHands = function () {
  let time = Date().split(" ")[4];
  let h = time.split(":")[0];
  let m = time.split(":")[1];
  let s = time.split(":")[2];
  console.log(h, m, s);

  let sAngle = s * 6;
  let mAngle = m * 6;
  let hAngle = (h > 12 ? h % 12 : h) * 30;

  ss.style.transform = `rotate(${sAngle}deg)`;
  mm.style.transform = `rotate(${mAngle}deg)`;
  hh.style.transform = `rotate(${hAngle}deg)`;

};

setInterval(setClockHands, 1000);
