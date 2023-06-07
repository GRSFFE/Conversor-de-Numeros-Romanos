function convertRomanToArabic() {
  var romanInput = document.getElementById("roman-input").value.toUpperCase();
  var arabicOutput = document.getElementById("arabic-output");

  var romanToArabic = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  var arabic = 0;
  var previousValue = 0;

  for (var i = romanInput.length - 1; i >= 0; i--) {
    var currentValue = romanToArabic[romanInput[i]];

    if (currentValue >= previousValue) {
      arabic += currentValue;
    } else {
      arabic -= currentValue;
    }

    previousValue = currentValue;
  }

  arabicOutput.innerHTML = arabic;
}

function convertArabicToRoman() {
  var arabicInput = document.getElementById("arabic-input").value;
  var romanOutput = document.getElementById("roman-output");

  var arabicToRoman = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];

  var roman = "";
  var remaining = arabicInput;

  for (var i = 0; i < arabicToRoman.length; i++) {
    while (remaining >= arabicToRoman[i].value) {
      roman += arabicToRoman[i].numeral;
      remaining -= arabicToRoman[i].value;
    }
  }

  romanOutput.innerHTML = roman;
}
