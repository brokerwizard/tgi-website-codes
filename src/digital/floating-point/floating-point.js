function genFloat() {
    input = Number(document.getElementById("inputNum").value)
    console.log(input)
    if(input == NaN) {
        document.getElementById("genInfo").innerText = "Die eingegebene Zahl ist ungültig"
        document.getElementById("genInfo").style.color = "red"
        return
    }
    if(input > 32768 || input < -32768) { // größer als 2^15 oder kleiner als -2^15
        document.getElementById("genInfo").innerText = "Wert ausrehalb des möglichen Rahmens von -32768 bis 32768"
        document.getElementById("genInfo").style.color = "red"
    }
    
    cells = document.getElementsByClassName("number")

    sign = input > 0 ? 0 : 1 // berechnet das Vorzeichen
    cells[0].innerText = sign

    input = Math.abs(input)
    exp = Math.floor(Math.log(input) * Math.LOG2E)
    mantissa = input / Math.pow(2, exp)

    if(mantissa == 2) {
        mantissa = 1
        exp += 1
    }
    console.log(exp)
    console.log(mantissa)
    binRepresentationExp = dec2bin(exp).padStart(32, "0")
    binRepresentationMantissa = dec2bin(mantissa * 512)
    console.log(binRepresentationExp)
    console.log(binRepresentationMantissa)
    
    cells[1].innerText = binRepresentationExp[0]
    for (let i = 2; i < 6; i++) {
            cells[i].innerText = binRepresentationExp.charAt(26 + i)
        
    }
    for (let i = 6; i < 16; i++) {
        cells[i].innerText = binRepresentationExp.charAt(i - 6)
    
}
    
}
function dec2bin(dec) {
    return (dec >>> 0).toString(2)
  }