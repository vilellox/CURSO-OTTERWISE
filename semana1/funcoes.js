// funções regulares

/* 1. Faça uma função que recebe um valor inteiro e verifica se o valor é par.
 A função deve retornar um valor booleano se for par. 
*/

function checkIfIsEven (n) {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// resolução 2

function checkIfIsEven2 (n) {
    if (n % 2 === 0) return true; 
       
    return false;
}

// resolução 3

function checkIfIsEven3 (n) {
    return n % 2 === 0;
    
}

console.log(checkIfIsEven3)




/*
2. Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo: 
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto 
*/

function checkAge (age) {
    if (age => 5 && age <= 7) {
        return "Infantil A" 
    } else if (age >= 8 && age <= 10) {
        return "Infantil B"
    } else if (age >= 8 && age <= 10) {
        return "Juvena A"
    } else if (age >= 8 && age <= 10) {
        return "Juvena B"
    } else if (age >= 18) {
        return "Adulto"
    } else {
        return "Não se enquadra em nenhuma categoria"
    }
        
    }

console.log(checkAge(4))