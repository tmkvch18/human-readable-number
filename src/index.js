module.exports = function toReadable(number) {
    const HUNDRED = "hundred";

    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];

    const teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 10) {
        return units[number];
    }

    if (number > 9 && number < 20) {
        return `${teens[number - 10]}`;
    }

    if (number > 19 && number < 100) {
        return `${tens[parseInt(number / 10)]} ${
            +number % 10 ? units[number % 10] : ""
        }`.trim();
    }

    if (number > 99 && number < 1000) {
        const secondPartNum = number % 100;

        let string = "";

        if (secondPartNum < 10) {
            string = string + `${+secondPartNum ? units[secondPartNum] : ""}`;
        }

        if (secondPartNum > 9 && secondPartNum < 20) {
            string = string + teens[secondPartNum - 10];
        }

        if (secondPartNum > 19 && secondPartNum < 100) {
            string =
                string +
                `${tens[parseInt(secondPartNum / 10)]} ${
                    +secondPartNum % 10 ? units[secondPartNum % 10] : ""
                }`;
        }

        return `${units[parseInt(number / 100)]} ${HUNDRED} ${string}`.trim();
    }
};
