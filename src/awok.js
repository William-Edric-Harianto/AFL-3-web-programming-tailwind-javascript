const next = document.getElementsByClassName("next")[0];
const prev = document.getElementsByClassName("prev")[0];
const wrap = document.getElementsByClassName("img-wrap")[0];
const imgs = document
  .getElementsByClassName("img-wrap")[0]
  .getElementsByTagName("img");

let idx = 0;

function showImg() {
  //balik awal
  if (idx >= imgs.length) {
    idx = 0;
  }
  //ke terakhir
  if (idx < 0) {
    idx = imgs.length - 1;
  }
  wrap.style.transform = `translateX(-${idx * 100}%)`;
}

next.onclick = () => {
  idx++;
  showImg();
};

prev.onclick = () => {
  idx--;
  showImg();
};

setInterval(()=>{
    idx++;
    showImg();
},3000);
