const name = "lucas";
const age = 27;


const person = {
    name: "lucas",
    age: 27,
    adress: {
        street: "almirante noronha",
        number: 159,
    },
    "data de criacao": "14/12/2021",
    competencias: ["javascript", "ccs", "html"],
};

console.log(person.adress);
console.log(person.competencias[1])

person.name = "cu"

console.log(person)