const targetWords = [
  "RADYO",
  "SEHPA",
  "DOLAP",
  "KALEM",
  "KAVUN",
  "KÖPEK",
  "MERAK",
  "BASIN",
  "ROMAN",
  "BALON"
];

var word = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log(word);
var words = word.split("");
/**toggle dark mode */
function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function toggleAccordion() {
  var accordionBody = document.getElementById("accordion-body");
  accordionBody.classList.toggle("show");
}
/**play button */
const showHide = () => {
  document.getElementById("load-container").style = "display: none";
  document.getElementById("game-container").style = "display: block";
};
setTimeout(() => {
  gameSetup(5);
  appendKeyboard();
}, 100);
var kelimeler = [];
var a = -5;
var b = 0;

function fonksiyon() {
  //kelimeyi alıyor
  b = 0;
  var ad = document.getElementById("answer");
  let add = ad.value.toUpperCase();
  var uzunluk = ad.value.length;
  a = a + 5;
  //kelimenin uzunluğuna bakıyor
  if (uzunluk < 5) {
    alert("5 harfli olmalı")
  }
  //kelimeyi listeye atıyor
  else {
    kelimeler.push(ad.value);

    //harflere bölüyor;
    var sonuc = add.split("");
    j = 0;
    for (i = 1 + a; i <= a + 5; i++) {
      document.getElementById(i).innerHTML = sonuc[j];
      j++
      if (j == 5) {
        j = 0;
      }
    }
    var k, l;

    console.log(sonuc + "  " + words);
    for (k = 0; k < 5; k++) {
      for (l = 0; l < 5; l++) {
        if (words[k] === sonuc[l]) {
          var id = (((a / 5)) * 5) + l + 1;
          if (words[k] === sonuc[k]) {
            var id = (((a / 5)) * 5) + k + 1;
            var keyel = sonuc[k].toLowerCase();
            var keyele = document.getElementById(keyel);
            keyele.style.backgroundColor = "#00FF00";
            var element = document.getElementById(id);
            element.style.backgroundColor = "#00FF00";
          } else {
            var keyel = sonuc[l].toLowerCase();
            var keyele = document.getElementById(keyel);
            keyele.style.backgroundColor = "#FFFF00";
            var element = document.getElementById(id);
            element.style.backgroundColor = "#FFFF00";
            var h;
            for (h = 0; h < 5; h++) {
              if (h === l) {
                continue;
              } else {
                var gril = sonuc[h].toLowerCase();
                var grile = document.getElementById(gril);
                grile.style.backgroundColor = "#252422";
              }
            }
          }
          b++;
          if (b == 5) {
            document.querySelector('.win').style.display = 'block';
          }
          break;
        } else if (l === 4) {
          var id = (((a / 5)) * 5) + l + 1;
          var gril = sonuc[l].toLowerCase();
          var grile = document.getElementById(gril);
          grile.style.backgroundColor = "#252422";
        }
      }
    }
    //check if any letter from the user's word does not exist in the random word
    for (let i = 0; i < sonuc.length; i++) {
      if (!words.includes(sonuc[i])) {
        let grayel = sonuc[i].toLowerCase();
        let grayele = document.getElementById(grayel);
        grayele.style.backgroundColor = "#252422";
      }
    }
  }
  if (a / 5 == 5) {
    document.querySelector('.lost').style.display = 'block';
  }
}
