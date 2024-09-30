//1. feladat
function szamolas(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;

    let felszin;
    let terfogat;
    if(a > 0 || b > 0 || c > 0){
        felszin = 2 * ((a * b) + (a * c) + (b * c));
        terfogat = a * b * c;
    }
    else{
        document.getElementById("hiba").innerHTML = "Helytelen bemenet!";
    }

    document.getElementById("f_e").innerHTML = "A téglatest felszíne: " + felszin + " cm";
    document.getElementById("t_e").innerHTML = "A téglatest térfogata: " + terfogat + " cm" + `<sup>2</sup>`;
}

//2. feladat
function idok(){
    let currentHours = 14;
    let currentMinutes = 34;
    let currentSeconds = 42;
    let mspercekben = (currentHours * 3600) + (currentMinutes * 60) + currentSeconds;
    document.getElementById("mspercek").innerHTML = mspercekben + " s egyenlő 14 óra 32 perc és 42 másodperc idejével."
}

//3. feladat
function testszamolas(){
    let mass_in_kg = 81.2;
    let height_in_m = 1.78;
    let testomegindex = mass_in_kg / (height_in_m**2);
    document.getElementById("tomegindex").innerHTML = "A testtömegindex értéke: " + testomegindex + "kg/m" + `<sup>2</sup>`;
}

//4. feladat
function ertekeles(){
    let szazalek = document.getElementById("jegy_szazalek").value;
    if(szazalek < 0 || szazalek > 100){
        document.getElementById("hiba4").innerHTML = "Helytelen bemenet!";
    }
    else if(szazalek < 40){
        document.getElementById("jegy").innerHTML = "Az osztályzat értéke: F";        
    }
    else if(szazalek < 55){
        document.getElementById("jegy").innerHTML = "Az osztályzat értéke: D";
    }
    else if(szazalek < 70){
        document.getElementById("jegy").innerHTML = "Az osztályzat értéke: C";
    }
    else if(szazalek < 85){
        document.getElementById("jegy").innerHTML = "Az osztályzat értéke: B";
    }
    else{
        document.getElementById("jegy").innerHTML = "Az osztályzat értéke: A";
    }
}

//5. feladat
function szokoeve(){
    let ev = document.getElementById("ev").value;
    if(ev < 1){
        document.getElementById("hiba5").innerHTML = "Helytelen bemenet!";
    }
    else if (ev % 4 == 0){
        document.getElementById("ev_eredmeny").innerHTML = ev + " szökőév.";
    }
    else{
        document.getElementById("ev_eredmeny").innerHTML = ev + " nem szökőév.";
    }
}

//6. feladat
function nyertes(){
    let kpo = document.getElementById("kpo").value;
    let random = Math.random(1,4);

    switch(kpo){
        case kpo < 1 || kpo > 3: document.getElementById("hiba6").innerHTML = "Helytelen bemenet!"; break;
        case kpo == random: document.getElementById("nyertes_eredmenye").innerHTML = "A játék döntetlen."; break;
        case kpo == 3 && random == 1: document.getElementById("nyertes_eredmenye").innerHTML = "A második játékos nyert."; break;
        case kpo == 3 && random == 2: document.getElementById("nyertes_eredmenye").innerHTML = "Az első játékos nyert."; break;
        case kpo == 2 && random == 1: document.getElementById("nyertes_eredmenye").innerHTML = "Az első játékos nyert."; break;
        case kpo == 2 && random == 3: document.getElementById("nyertes_eredmenye").innerHTML = "A második játékos nyert."; break;
        case kpo == 1 && random == 2: document.getElementById("nyertes_eredmenye").innerHTML = "A második játékos nyert."; break;
        case kpo == 1 && random == 3: document.getElementById("nyertes_eredmenye").innerHTML = "Az első játékos nyert."; break;
    }
}

//7. feladat
function darabolas(){
    let szo = document.getElementById("szo").value;
    let szoarray = [szo];

    for(let i = 0; i < String.length(szo); i++){
        document.getElementById("db_eredmeny").innerHTML = szoarray[0];
        szoarray[0]++;
    }
}

//8. feladat
function szam_fakt(){
    let fakt = document.getElementById("fakt").value;
    let bekertszam_fakt = 1;
    for(let i = 0; i <= fakt; i++){
        bekertszam_fakt = i * (i-1);
    }
    document.getElementById("fakt_eredmeny").innerHTML = fakt + " faktoriálisa " + bekertszam_fakt + ".";
}

//9. feladat
function atlag(){
    let bekertszam = document.getElementById("bekertszam").value;
    bekertszam = String(bekertszam);
    let ossz = 0;
    const szamtomb = new Array(bekertszam.split());
    for(let i = 0; i < Array.length(szamtomb); i++){
        ossz = ossz + szamtomb[0];
        szamtomb[0]++;
    }
    let atlagjegy = ossz / Array.length(bekertszam);
    document.getElementById("atlag_eredmeny").innerHTML = "A számjegyek átlaga: " + atlagjegy;
}

//10. feladat
function megrajzol(){
    let meret = document.getElementById("meret").value;
    let karakter = "%";
    let tomb = new Array();
    for(let i = 0; i < meret; i++){
        for(let j = 0; j < meret; j++){
            tomb[0,0] += karakter;
        }
        tomb[0]++;
    }
}

//11. feladat
function elemzes(){
    let bekertstring = document.getElementById("bekertstring").value;
    do{
        document.getElementById("elemzeseredmenye").innerHTML = bekertstring;
    }while(bekertstring = true);
}

//12. feladat
function megmutat(){
    let szamtomb = new Array(100);
    for(let i = 0; i < 101; i++){
        if(szamtomb[0] % 3 != 0){
            i.join(szamtomb);
        }
        szamtomb[0]++;
    }

    document.getElementById("megoldas").innerHTML = szamtomb;
}

//13. feladat
function osztok(){
    let szamok = new Array();
    for(let i = 0; i < 21; i++){
        document.getElementById("elemzesered").innerHTML = szamok + `<br>`
    }
}

//14. feladat
function szamsor(){
    let szamlalo = 1;
    do{
        if(szamlalo % 3 == 0){
            document.getElementById("szamsor_eredm").innerHTML = "fizz";
        }
        else if(szamlalo % 5 == 0){
            document.getElementById("szamsor_eredm").innerHTML = "buzz";
        }
        else if(szamlalo % 5 == 0 && szamlalo % 3 == 0){
            document.getElementById("szamsor_eredm").innerHTML = "fizzbuzz";
        }
        else{
            document.getElementById("szamsor_eredm").innerHTML = szamlalo + " ,";
        }
        szamlalo++;
    }while(szamlalo < 21);
}