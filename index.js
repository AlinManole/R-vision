// 01 - Alphabet

// function sortLetters(text) {
    
//     return text.split('').sort().join('');
// };

// var text2 = sortLetters("konexio")
// console.log(text2)


function sortLetters2(str){
    var arr = str.split('');
    var sorted = arr.sort();
    return sorted.join('');
}
var str2 = sortLetters2("konexio")
console.log(str2)



//   //02 - XOXO

//     function countEach(text) {   

//         if ( text.includes("o") && text.includes("x") ) {
//          return true
//         } else if ( x = o ) { 
//             return true 
//           }  else {
//           return false
//         }       
//     } 

//     countText = countEach("xxooo")
//     console.log(countText)

    function sameLetter(text) {
        var text2 = text.split("")
        var letterX = "x"
        var letterO = "o"
        console.log(text2)

        if ( text2.IndexOf(letterX) !== text2.IndexOf(letterO)) {
            return false 
        } else {
            return true 
        }


    }

    console.log(sameLetter("xxxooo"))

