/* Elabore um programa que receba três valores como entrada e mostre eles
em ordem crescente no console.
*/

let valueOne = 1
let valueTwo = 2
let valueThree = 3

if (valueOne < valueTwo && valueTwo < valueThree) {
    console.log(valueOne + ", " + valueTwo, + ", " + valueThree)
} else if (valueOne < valueTwo && valueTwo > valueThree) {
    console.log(valueOne + ", " + valueThree, + ", " + valueTwo)
} else {
    console.log(valueThree + ", " + valueTwo, + ", " + valueOne)
}
