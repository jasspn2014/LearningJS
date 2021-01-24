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
//   if (sAngle == 0) {
//     ss.style.transition = "none";
//   }
//   if (mAngle == 0) {
//     mm.style.transition = "none";
//   }
//   if (hAngle == 0) {
//     hh.style.transition = "none";
//   }
  ss.style.transform = `rotate(${sAngle}deg)`;
  mm.style.transform = `rotate(${mAngle}deg)`;
  hh.style.transform = `rotate(${hAngle}deg)`;

//   hh.style.transition = "transform 0.05s ease";
//   mm.style.transition = "transform 0.05s ease";
//   ss.style.transition = "transform 0.05s ease";
};

setInterval(setClockHands, 1000);
