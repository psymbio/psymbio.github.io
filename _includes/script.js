

document.addEventListener("DOMContentLoaded", () => {
  let mousePosX = 0,
    mousePosY = 0,
    mouseCircle = document.getElementById("mouse-circle");

  document.onmousemove = (e) => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
  };

  let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

    mouseCircle.style.top = revisedMousePosY + "px";
    mouseCircle.style.left = revisedMousePosX + "px";
  }
  delayMouseFollow();
});

/*
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animate'
    }
});

tl.from("img", {x: 200, opacity: 0, duration: 1.5})
*/

document.getElementById("btn-hamburger").addEventListener("click", f1);
let count = 0;
function f1() {
  if (count % 2 == 0) {
    document.getElementById("home").style.display = "block";
    document.getElementById("shop").style.display = "block";
    document.getElementById("contact").style.display = "block";
    document.getElementById("hamburgerline-2").style.width = "0px";
    document.getElementById("hamburgerline-1").style.transform =
      "translateY(11px) rotate(-45deg)";
    document.getElementById("hamburgerline-3").style.transform =
      "translateY(-7px) rotate(45deg)";
  } else {
    document.getElementById("home").style.display = "none";
    document.getElementById("shop").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("hamburgerline-2").style.width = "25px";
    document.getElementById("hamburgerline-1").style.transform = "rotate(0)";
    document.getElementById("hamburgerline-3").style.transform = "rotate(0)";
  }
  count += 1;
}
