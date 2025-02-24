const decreaseBtn = document.getElementById("decrease")
const increaseBtn = document.getElementById("increase")
const resetBtn = document.getElementById("reset")
const counter = document.getElementById("count")

let count = 0

decreaseBtn.addEventListener("click", function () {
  count--
  counter.textContent = count
})

increaseBtn.addEventListener("click", function () {
  count++
  counter.textContent = count
})

resetBtn.addEventListener("click", function () {
  count = 0
  counter.textContent = count
})

increaseBtn.addEventListener("hold",function(){
  count++
  counter.textContent = count
})