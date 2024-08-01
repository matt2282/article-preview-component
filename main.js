function displayShare() {
  const footer = document.querySelector(".profile-footer");
  const circle = document.querySelector(".circle");
  const img = document.querySelector(".profile-footer .circle img");
  const share = document.querySelector(".profile-footer-share-desktop");
  if (window.matchMedia("(min-width: 769px)").matches) {
    if (getComputedStyle(share).display === "none") {
      share.style.display = "flex";
      circle.style.backgroundColor = "hsl(214, 17%, 51%)";
      img.style.filter = "brightness(10)";
    } else {
      share.style.display = "none";
      circle.style.backgroundColor = "hsl(210, 46%, 95%)";
      img.style.filter = "brightness(1)";
    }
  } else {
    circle.style.backgroundColor = "hsl(210, 46%, 95%)";
    img.style.filter = "brightness(1)";
    const share = document.querySelector(".profile-footer-share");
    if (getComputedStyle(share).display === "none") {
      footer.style.display = "none";
      share.style.display = "flex";
    } else {
      footer.style.display = "flex";
      share.style.display = "none";
    }
  }
}
function checkMediaQuery() {
  const share = document.querySelector(".profile-footer-share");
  const footer = document.querySelector(".profile-footer");
  const desktop = document.querySelector(".profile-footer-share-desktop");
  const circle = document.querySelector(".circle");
  const img = document.querySelector(".profile-footer .circle img");
  if (window.matchMedia("(min-width: 769px)").matches) {
    footer.style.display = "flex";
    if (share.style.display == "flex") {
      desktop.style.display = "flex";
      circle.style.backgroundColor = "hsl(214, 17%, 51%)";
      img.style.filter = "brightness(10)";
    }
    share.style.display = "none";
  } else {
    if (getComputedStyle(desktop).display === "flex") {
      footer.style.display = "none";
      desktop.style.display = "none";
      share.style.display = "flex";
    }
  }
}

window.addEventListener("resize", checkMediaQuery);
window.addEventListener("load", checkMediaQuery);
