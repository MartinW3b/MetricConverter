const inputFld = document.getElementById("input-fld")
const inputBtn = document.getElementById("input-btn")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

inputBtn.addEventListener("click", function() {
  
  let meterCalc = inputFld.value * 3.281
  let feetCalc = inputFld.value * 0.305
  
  let litersCalc = inputFld.value * 0.264
  let gallonsCalc = inputFld.value * 3.785
  
  let kilogramsCalc = inputFld.value * 2.204
  let poundsCalc = inputFld.value * 0.453
 
  if(inputFld.value === "") {
    document.getElementById("err").textContent = "You must choose a number greater than zero"
    } else {
    document.getElementById("err").textContent = ""  
    function calc(result1, result2, unit1, unit2) {
    return `${inputFld.value} ${unit1} = ${result1.toFixed(3)} ${unit2} |       ${inputFld.value} ${unit2} = ${result2.toFixed(3)} ${unit1}`
}
    lengthText.textContent = calc(meterCalc, feetCalc, "meters", "feet")
    volumeText.textContent = calc(litersCalc, gallonsCalc, "liters", "gallons")
    massText.textContent = calc(kilogramsCalc, poundsCalc, "kilograms", "pounds")
}
})
 