function genParity() {
    a1 = parseInt(document.getElementById("input0").value)
    a2 = parseInt(document.getElementById("input1").value)
    a3 = parseInt(document.getElementById("input2").value)

    // simuliere bitwise XOR
    ap = (a1 + a2 + a3) % 2
    // gegebenenfalls fehler, wenn eingabe ungültig
    if(ap != 0 && ap != 1) {
        document.getElementById("resultDiv").innerText = "Beim Generieren des Paritätsbits ist ein Fehler aufgetreten; Überprüfe die Eingabe"
        document.getElementById("resultDiv").style.color = "red"
    } else {
        document.getElementById("input3").value = ap
        document.getElementById("resultDiv").innerText = "Paritätsbit wurde generiert"
        document.getElementById("resultDiv").style.color = "lime"
    }
}

function repairData() {
    bits = []
    bits.push(parseInt(document.getElementById("input0").value),
    parseInt(document.getElementById("input1").value),
    parseInt(document.getElementById("input2").value),
    parseInt(document.getElementById("input3").value))

    for(i = 0; i < 4; i++) {
        if(bits[i] != 0 && bits[i] != 1) {
            sum = 0
            for(j = 0; j < 4; j++) {
                if(j != i) {
                    sum += bits[j]
                }
            }
            sum %= 2
            console.log(sum)
            if(sum != 0 && sum != 1) {
                document.getElementById("resultDiv").innerText = "Beim Reparieren der Daten kam es zu einem Fehler; Überprüfe, dass nur ein Feld leer ist"
                document.getElementById("resultDiv").style.color = "red"
                return
            }
            document.getElementById("input" + i).value = sum
            document.getElementById("resultDiv").innerText = "Daten wurden erfolgreich repariert"
            document.getElementById("resultDiv").style.color = "lime"
            return
        }
    }
    document.getElementById("resultDiv").innerText = "Daten bereits intakt; Leere ein Feld, damit etwas korrigiert werden kann"
    document.getElementById("resultDiv").style.color = "lime"
}