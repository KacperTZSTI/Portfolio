
let body = document.querySelector('body');


const next = document.getElementById("next");
const pause = document.getElementById("pause");
const prev = document.getElementById("prev");
let width = document.getElementById("scroll").style.width
let i = 0;
let g = 0;
document.getElementById("scroll").scrollLeft = i * window.innerWidth;
console.log(i);
console.log(g);
next.onclick = () => {
  if(i == 10){
    i = 0
  }else{
    i+=1;
  }
  console.log(i);
  console.log(g);

  document.getElementById("scroll").scrollLeft = i * window.innerWidth;
  console.log("feasuhwrequig G GWR EYUIIH");
  g = i + 1;
      body.style.backgroundImage = "url('images/SH_" + g + " BLUR.gif')"
};

prev.onclick = () => {
  if(i == 0){
    i = 10
  }else{
    i-=1;
  }
  console.log(i);
  console.log(g);
  document.getElementById("scroll").scrollLeft = i * window.innerWidth;
  g = i + 1;
  body.style.backgroundImage = "url('images/SH_" + g + " BLUR.gif')"
  };
  
  pause.onclick = () => {
    i = 0;
    document.getElementById("scroll").scrollLeft = i * window.innerWidth;
    g = i + 1;
    body.style.backgroundImage = "url('images/SH_" + g + " BLUR.gif')"
    };
    

