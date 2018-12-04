//const p = document.getElementById("pasus");   //Nadje element u html-u i ubaci ga u konstantu `p`
//p.innerText = "Da li sam promenio text?";     //Zatim promeni njegovu vrednost, konstante `p`


const u1 = document.getElementById("unos1");    //Izvlaci elemente iz HTML-a
const u2 = document.getElementById("unos2");    //Izvlaci elemente iz HTML-a
const pasus = document.getElementById("pasus"); //Izvlaci elemente iz HTML-a
const dugme = document.getElementById("dugme");   //Izvlaci elemente iz HTML-a



function proveri() {

    if (unos1.value.toLowerCase() == "server")      // .toLowerCase sluzi da izajednaci slova, tj nije bitno dal su velika ili mala unesena
        pasus.innerText = "Bravo, odgovor je tacan!"
    else
       pasus.innerText = "Odgovor nije tacan"
}

//function proveri() {
  //  pasus.innerText = "Uneli ste ime " + u1.value;      //ispisuje elemente nakon unosa imena 
    //alert ("Uneli ste ime " + unos1.value);


    dugme.addEventListener ("click", proveri);             // na klik dugmeta da pozove `proveri` funkciju

    