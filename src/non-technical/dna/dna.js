const genStatus = document.getElementById("genStatus")

function genBin() {
    helix0 = dnaCodeToValue(document.getElementById("tableHelix0").value)
    helix1 = dnaCodeToValue(document.getElementById("tableHelix1").value)
    base0 = parseInt(document.getElementById("tableBase0").value)
    base1 = parseInt(document.getElementById("tableBase1").value)

    sum =  base0 * 32
    sum += helix0 * 8
    sum += base1 * 4
    sum += helix1
    if(sum > -1 && sum < 100) {
        // sum ist nich NaN
        document.getElementById("tableCode").value = sum.toString(2).padStart(6, "0")

        
        genStatus.style.color = "lime"

        helixSum = helix0 + helix1
        if(helixSum % 2 != 1 || Math.floor(helixSum / 2) % 2 == 1 || base0 == base1) {
            // Helixzusammensetzung ist nicht möglich
            genStatus.innerText = "Binärcode aus der DNA generiert. Die DNA ist jedoch praktisch nicht möglich."
        } else
            genStatus.innerText = "Binärcode aus der DNA generiert."

    } else {
        genStatus = document.getElementById("genStatus")
        genStatus.innerText = "Ein Fehler ist aufgetreten. Es sind nicht alle Teile gesetzt."
        genStatus.style.color = "red"
    }
    
}

function genDNA() {
    binValue = parseInt(document.getElementById("tableCode").value, 2)

    helix0 = Math.floor((binValue % 32) / 8)
    helix1 = Math.floor(binValue % 4)
    base0 = Math.floor(binValue / 32)
    base1 = Math.floor((binValue % 8) / 4)

    document.getElementById("tableHelix0").value = valueToDNACode(helix0)
    document.getElementById("tableHelix1").value = valueToDNACode(helix1)
    document.getElementById("tableBase0").value = base0
    document.getElementById("tableBase1").value = base1

    genStatus.style.color = "lime"
    helixSum = helix0 + helix1
    if(helixSum % 2 != 1 || Math.floor(helixSum / 2) % 2 == 1 || base0 == base1) {
        // Helixzusammensetzung ist nicht möglich
        genStatus.innerText = "DNA aus dem Binärcode generiert. Die DNA ist jedoch praktisch nicht möglich."
    } else
        genStatus.innerText = "DNA aus dem Binärcode generiert."
}

function dnaCodeToValue(dna) {
    switch (dna) {
        case "A":
            return 0;
        case "T":
            return 1;
        case "C":
            return 2;
        case "G":
            return 3;
        default:
            return NaN
    }
}

function valueToDNACode(val) {
    switch (val) {
        case 0:
            return "A";
        case 1:
            return "T";
        case 2:
            return "C";
        case 3:
            return "G";
        default:
            return "Error"
    }
}

function checkDNAValidility(helix0, helix1, base0, base1) {
    
}