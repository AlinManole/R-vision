// 01 - Alphabet

function sortLetters(text) {
    
    return text.split('').sort().join('');
};

var text2 = sortLetters("konexio")
console.log(text2)



//   //02 - XOXO

function countEach(x) {

  var countX = 0
  var countO = 0
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "x") {
      countX++
      // console.log(countX)
    } else if (x[i] === "o") {
      countO++
      // console.log(countO)
    }
  } if (countX === countO) {
    return true
  } else {
    return false
  }
}

var blabla = countEach("xoxo")
console.log(blabla)

// palindrome

function checkpal(string) {
  var palindrome = string.split("")
  var palindromeOne = palindrome.reverse()
  var palindromeTwo = palindromeOne.join("")
  if (palindrome === "") {
  } else if (string === palindromeTwo) {
    return "Palindrome !"
  } else {
    return `${palindrome2} n'est pas un palindrome`
  }


}
var palindr = checkpal("racecar")
console.log(palindr)


