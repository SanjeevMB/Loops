/* ===== Loops ===== */

// for loop is used where number of iterations are fiexed

for (let index = 0; index < 10; index++) {

    console.log(`Hello World!`);

}

// While loop is used where number of iterations are not fixed

let primeCount = 0;

let primeNumbers = [];

let naturalNumber = 2;

while (primeCount < 20) {

    let divisibilityCounter = 0;

    for (let index = 1; index < naturalNumber; index++) {

        if (naturalNumber % index === 0) {

            divisibilityCounter++;

        }

    }

    if (divisibilityCounter === 1) {

        primeNumbers.push(naturalNumber);

        primeCount++;

    }

    naturalNumber++;

}

console.log(primeNumbers);

// do while loop always execute the codeblock or the first time

let doWhlie = 5;

do {

    console.log(`Welcome to the banglore`);

    doWhlie++;

} while (doWhlie < 5);