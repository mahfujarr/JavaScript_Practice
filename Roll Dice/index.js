const rollBtn = document.getElementById("roll")
const counter = document.getElementById("count")

let random

rollBtn.addEventListener("click", function () {
  random = Math.floor(Math.random() * 6) + 1
  counter.textContent = random
  const notification = document.createElement("div")
  notification.textContent = `You rolled a ${random}!`
  notification.style.position = "absolute"
  notification.style.top = `${rollBtn.offsetTop + rollBtn.offsetHeight + 10}px`
  notification.style.left = `${rollBtn.offsetLeft - 40}px`
  notification.style.backgroundColor = "black"
  notification.style.color = "white"
  notification.style.padding = "10px"
  notification.style.borderRadius = "5px"
  document.body.appendChild(notification)

  setTimeout(() => {
    document.body.removeChild(notification)
  }, 1000)
})
