/* - Faça um programa que receba de entrada três valores e mostre no console
a soma dos dois maiores.
*/



let value1 = 2
let value2 = 13
let value3 = 32
let bigger = null
let mean = null
let smaller = null

if (value1 > value2 && value1 > value3) {
    bigger = value1
}
else if (value2 > value3 && value2 > value1) {
    bigger = value2
}
else if (value3 > value1 && value3 > value2) {
    bigger = value3
}
else if (value1 < value2 && value1 < value3) {
    smaller = value1
}
else if (value2 < value3 && value2 < value1) {
    smaller = value2
}
else if (value3 < value1 && value3 < value2) {
    smaller = value3
}
else if (value1 < bigger && value1 > smaller) {
    mean = value1
}
else if (value2 < bigger && value2 > smaller) {
    mean = value2
}
else if (value3 < bigger && value3 > smaller) {
    mean = value3
}
console.log(bigger + mean)