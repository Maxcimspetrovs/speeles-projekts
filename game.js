let jautajumi = [
    {jautajums: "5 + 3", atbildes: ["7", "8", "10"], pareiza: "8"},
    {jautajums: "12 + 4", atbildes: ["16", "15", "19"], pareiza: "16"},
    {jautajums: "1 + 10", atbildes: ["17", "13", "11"], pareiza: "11"},
    {jautajums: "3 + 6", atbildes: ["8", "9", "12"], pareiza: "9"},
    {jautajums: "19 + 0", atbildes: ["18", "19", "20"], pareiza: "19"},
    {jautajums: "10 + 2", atbildes: ["11", "12", "13"], pareiza: "12"},
    {jautajums: "1 + 17", atbildes: ["18", "19", "20"], pareiza: "18"},
    {jautajums: "4 + 4", atbildes: ["6", "7", "8"], pareiza: "8"},
    {jautajums: "13 + 6", atbildes: ["18", "19", "20"], pareiza: "19"},
    {jautajums: "7 + 7", atbildes: ["12", "14", "26"], pareiza: "14"},
];

let kuraJautajumaKarte = 0;
let dzivibas = 5;
let monetas = 0;

function rādītJautājumu() {
    let jaut =
    jautajumi[kuraJautajumaKarte];

document.getElementById("question").
innerText = jaut.jautajums;

    let atbDiv =
document.getElementById("answers");
    atbDiv.innerHTML = "";

jaut.atbildes.forEach(function(atbilde) {
    let poga =
document.createElement("button");
        poga.innerText = atbilde;
        poga.onclick = function() {
            pārbaudītAtbildi(atbilde);
        };
        atbDiv.appendChild(poga);
    });
}

function pārbaudītAtbildi(atbilde) {
    let pareiza =
    jautajumi[kuraJautajumaKarte].pareiza;

    if (atbilde === pareiza) {
        monetas++;

document.getElementById("coins").innerText = "Monētas: " + monetas;
    } else {
        dzivibas--;

document.getElementById("lives").innerText = "Dzīvības: " + dzivibas;
        if (dzivibas === 0) {
            alert("Spēle beigusies! Tu zaudēji.");
            return;
        }
    }
    kuraJautajumaKarte++;
if (kuraJautajumaKarte < jautajumi.length){
    rādītJautājumu();
    } else {
        alert("Spēle pabeigta! Tu saņēmi" + monetas + "monētas.");
    }
}

rādītJautājumu();