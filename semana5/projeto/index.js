import fs from "fs";


const lista = fs.readFileSync("./lista.csv", "utf8");

let str = lista.split("\r\n");

const [header, ...files] = str;

const final = files.map((element) => {
    const [id, name, preco] = element.split(",");
    return {
        id: +id, 
        name, 
        preco: preco.replace("", "R$").replace(".", ","),

        }
    }
)

console.log(final);