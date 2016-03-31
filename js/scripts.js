// Business Logic


var convert = function(userInputNumber) {
  //
  // var initialConvertArray = [];
  // var placeArray = [1, 5, 10, 50, 100, 500, 1000];
  // var romanValuesArray = ["I", "V", "X", "L", "C", "D", "M"];

  var initialConvertArray = [];
  var placeArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanValuesArray = ["M", "CM", "D", "CD", "C","XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  // var value = parseInt(userInputNumber/placeArray[index]);

//
//   if (decNumber === NaN || decNumber > 3999 || decNumber < 0) {
//     alert("Cannot convert");
// } else {


// -------------------
//   for (index = 0; index < placeArray.length; index++) {
//     if (placeArray[index] <= userInputNumber) {
//       // var inputDPlace = parseInt(userInputNumber / placeArray[index]);
//
//       initialConvertArray.push(romanValuesArray[index]);
//       userInputNumber -= placeArray[index];
// }
// }
// -------------------



for (index = 0; index < placeArray.length; index++) {
  while (placeArray[index] <= userInputNumber) {

    initialConvertArray.push(romanValuesArray[index]);
    userInputNumber -= placeArray[index];
}
}


      // for (iCA = 0; iCA < 7; iCA++) {
      //   initialConvertArray.push(romanValuesArray[iCA]);
      // }

    // }
  //
  //     userInput < i
  //
    var result = initialConvertArray.join("");
    alert(result);
  }







// UI Logic

    $(document).ready(function() {
      $("form").submit(function(event) {


        event.preventDefault();

        var decNumber = parseInt($("#userInputNumber").val());

        convert(decNumber);


      });
    });


        //
        // convertArray(decNumber);
        //
        // detectConsec(something);
