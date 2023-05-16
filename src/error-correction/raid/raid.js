function genParity() {
    a1 = parseInt(document.getElementById("inputText1").value)
    a2 = parseInt(document.getElementById("inputText2").value)
    a3 = parseInt(document.getElementById("inputText3").value)

    // simuliere bitwise XOR
    ap = (a1 + a2 + a3) % 2
    // gegebenenfalls fehler, wenn eingabe ungültig
    if(ap != 0 && ap != 1) {
        document.getElementById("resultDiv").innerText = "Beim Generieren des Paritätsbits ist ein Fehler aufgetreten; Überprüfe die Eingabe"
        document.getElementById("resultDiv").style.color = "red"
    } else {
        document.getElementById("inputTextp").value = ap
        document.getElementById("resultDiv").innerText = "Paritätsbit wurde generiert"
        document.getElementById("resultDiv").style.color = "lime"
    }
}

function repairData() {
    bits = []
    bits.push(parseInt(document.getElementById("inputText1").value),
    parseInt(document.getElementById("inputText2").value),
    parseInt(document.getElementById("inputText3").value),
    parseInt(document.getElementById("inputTextp").value))

    for(i = 1; i <= 4; i++) {
        if(bits[i] != 0 && bits[i] != 1) {
            sum = 0
            for(j = 1; j <= 4; j++) {
                if(j != i) {
                    sum += bits[j]
                }
            }
            sum %= 2
            if(sum != 0 && sum != 1) {
                document.getElementById("resultDiv").innerText = "Beim Reperieren der Daten kam es zu einem Fehler; Überprüfe, dass nur ein Feld leer ist"
                document.getElementById("resultDiv").style.color = "red"
                return
            }
            suffix = i.toString()
            if(suffix == "4") {
                suffix = "p"
            }
            document.getElementById("inputText" + suffix).value = sum
            document.getElementById("resultDiv").innerText = "Daten wurden erfolgreich reperiert"
            document.getElementById("resultDiv").style.color = "lime"
            return
        }
    }
    document.getElementById("resultDiv").innerText = "Daten bereits intakt; Leere ein Feld, damit etwas korrigiert werden kann"
    document.getElementById("resultDiv").style.color = "lime"
}