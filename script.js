function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const paragraph = document.querySelector("#profile p")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar-sun.png')
    paragraph.textContent = "@kauam0ura"
  } else {
    img.setAttribute('src', './assets/avatar.png')
    paragraph.textContent = "@kauam0ura"
  }
}