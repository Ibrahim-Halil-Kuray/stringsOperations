//string olarak verilen bir isim ve soyismin sadece bas harflerini Uppercase a cevirin.
let nameOfPerson = "asik veysel";

let first = nameOfPerson.charAt(0).toUpperCase() + nameOfPerson.slice(1, nameOfPerson.indexOf(" "));

let last = nameOfPerson.charAt(nameOfPerson.indexOf(" ") + 1).toUpperCase() + nameOfPerson.slice(nameOfPerson.indexOf(" ") + 2);

let result = first + " " + last;

console.log(result);


// 0 dan 100 e kadar olan sayilari, bir satirda 10 sayi ve her 
// sayinin arasinda virgul olacak sekilde yazdiriniz (10x10 luk bir kare seklinde)
let numbers = [];
for (let i = 1; i <= 100; i++) {

    numbers.push(i);
    if (i % 10 == 0) {
        numbers.push("\n");
    }
}

console.log(numbers.join());

//0 dan 100 e kadar olan prime (asal sayilari) yazdirin 

for (let sayi = 2; sayi <= 100; sayi++) {

    let asalSayi = true;

    for (let bolen = 2; bolen < sayi; bolen++) {

        if (sayi % bolen == 0) {

            asalSayi = false;

            break
        }

    }
    if (asalSayi) console.log(sayi)
}
//Kucuk, buyuk, ozel karakterler ve sayilardan olusan 8 ile 16 (hane) uzunluklari arasinda guvenli 50 adet sifre olusturunuz. 

let kucukHarfler = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "ü", "v", "y", "z", "x"];
let buyukHarfler = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "Ü", "V", "Y", "Z", "X", "Ö", "Ä"];
let sayilarimiz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let ozelKarakterler = ["+", "*", "%", "&", "/", "(", ")"];
let liste = kucukHarfler.concat(buyukHarfler, sayilarimiz, ozelKarakterler);
let sifre = "";
for (let adet = 0; adet < 50; adet++) {

    for (let index = 0; index < 3; index++) {
        sifre += kucukHarfler[Math.floor(kucukHarfler.length * Math.random())];
        sifre += buyukHarfler[Math.floor(buyukHarfler.length * Math.random())];
        sifre += sayilarimiz[Math.floor(sayilarimiz.length * Math.random())];
        sifre += ozelKarakterler[Math.floor(ozelKarakterler.length * Math.random())];

    }
    sifre += "\n";

}
console.log(sifre);

/* 
   5)  Asagidaki sekli programlama yapilarini kullanarak cizdiriniz.
   *
   **
   ***
   ****
   *****
   ******
 */

let sekil = "";
for (let satir = 1; satir < 7; satir++) {
    for (let yildizlar = 1; yildizlar < satir; yildizlar++) {
        sekil += "*"
    }
    sekil += "\n"
}
console.log(sekil)