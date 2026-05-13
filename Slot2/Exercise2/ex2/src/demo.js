let tong = (a,b) => a + b;
console.log(tong(5,3));

let chao = () =>console.log("Xin chao cac ban");
chao();

let Chao1 = (name) => `Xin chao ${name}`;
console.log(Chao1("Huy"));

let Chao2 = (person) => `Xin chao ${person.name}`;
let person = {
    name: "Huy",
    age: 20,
    id: 1
}
console.log(Chao2(person));