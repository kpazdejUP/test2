function oblicz(){
    var waga = document.getElementById("waga").value;
    waga = parseInt(waga);
    var wzrost = document.getElementById("wzrost").value;
    wzrost = parseInt(wzrost)/100;
    var bmi = waga / (wzrost * wzrost);
    document.getElementById("wynik").innerHTML = bmi.toFixed(2);
}