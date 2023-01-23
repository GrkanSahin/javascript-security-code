let gelen = document.querySelector("input");
let goster = document.querySelector("p");

let sayi,harf,donustur;
let liste=[];

function sifredegistir() {
    for(let i= 0; i<6; i++) {
        sayi =Math.random()*91;
               
        if (sayi<65) {
            sayi = Math.random()*26+65
            harf=String.fromCharCode(sayi)
        }

        harf=String.fromCharCode(sayi)
        liste[i]=harf
        goster.innerHTML=liste
    }
    donustur=liste.join("")
    goster.innerHTML=donustur
}



function kontrolet() {
    let kontrol = gelen.value;
    if (kontrol== donustur) {
        alert("sifre dogru")
    }else {
        alert("sifre yanliş")
        sifredegistir()
    }
}

sifredegistir()

