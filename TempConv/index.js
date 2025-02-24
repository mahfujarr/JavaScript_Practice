const toCelcius = document.getElementById('celsius')
const toFahrenheit = document.getElementById('fahrenheit')

function convert(temp) {
  if (toCelcius.checked) {
    return (temp - 32) * 5/9;
  }
  else if (toFahrenheit.checked) {
    return (temp * 9/5) + 32;
  }
}

document.getElementById('convert').addEventListener('click', function(){
  let temp = Number(document.getElementById('display').value);
  document.getElementById('result').innerHTML = convert(temp).toFixed(2) + ` ${(toCelcius.checked) ? '°C' : '°F'}`;
})