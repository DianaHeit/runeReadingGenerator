// Values of Runes
// 6 Ansuz - Prosperity Vitality
// 5 Fehu - Wealth
// 1 Kaunan - Mortality Pain
// 4 Raidho - Movement Work Growth
// 2 Thurisaz - Danger Suffering
// 3 Uruz - Strength Of Will


// Rune 1

var runeNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomRune = runeNumber1 + ".jpg";

var randomRuneSource = "img/" + randomRune;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomRuneSource);



// Rune 2

var runeNumber2 = Math.floor(Math.random() * 6) + 1;

var randomRuneSource2 = "img/" + runeNumber2 + ".jpg";

document.querySelectorAll("img")[1].setAttribute("src", randomRuneSource2);



// Reload page on button click

// document.querySelector("button").addEventListener("click", drawRunes);
//
// function drawRunes() {
//   window.location.reload();
// }


// The same as above, turned into an anonymous function
document.querySelector("button").addEventListener("click", function(){
  window.location.reload();
});

//Conditions
if (runeNumber1 > runeNumber2) {
  document.querySelector("p").innerHTML = "You Will Be Stronger Than Your Circumstances <br> - Do It Today.";

} else if (runeNumber2 > runeNumber1) {
  document.querySelector("p").innerHTML = "Your Circumstances Will Be Stronger Than You <br> - Don't Do It Today.";

} else {
  document.querySelector("p").innerHTML = "The Odds Are Even.";

}
