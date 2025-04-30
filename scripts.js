let atkārtotPoga = document.createElement("button");
atkārtotPoga.innerText = "Atkārtot";
atkārtotPoga.style.display = "none";
atkārtotPoga.onclick = function () {
    kuraJautajumaKarte = 0;
    raditJautajumu(); // funkcija, kas parāda nākamo jautājumu
    atkārtotPoga.style.display = "none";
};
document.body.appendChild(atkārtotPoga);

// Pēc pēdējā jautājuma:
function pārbaudītAtbildi(atbilde) {
    let pareiza = jautajumi[kuraJautajumaKarte].pareiza;

    if (atbilde === pareiza) {
        monetas++;
        document.getElementById("coins").innerText = "Monētas: " + monetas;
    } else {
        dzivibas--;
        document.getElementById("lives").innerText = "Dzīvības: " + dzivibas;
        if (dzivibas === 0) {
            alert("Spēle beigusies! Tu zaudēji.");
            atkārtotPoga.style.display = "block";
            return;
        }
    }

    kuraJautajumaKarte++;
    if (kuraJautajumaKarte >= jautajumi.length) {
        alert("Jautājumi beigušies!");
        atkārtotPoga.style.display = "block";
    } else {
        raditJautajumu();
    }
}