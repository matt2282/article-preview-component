function displayShare() {
  const footer = document.querySelector(".profile-footer");
  const share = document.querySelector(".profile-footer-share");
  const shareButtonBackground = document.querySelector(".profile-footer .circle");
  const shareButtonImage = document.querySelector(".profile-footer .circle img");
 share.classList.toggle("hidden");
 footer.classList.toggle("hidden");
 shareButtonBackground.classList.toggle("darkBackgroundButton");
 shareButtonImage.classList.toggle("filterBright");
}
