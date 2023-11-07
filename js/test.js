
const cats = [
    {
        name: "Jerry",
        color: "Gray",
        age: 1,
    },
    { 
        name: "Luna",
        color: "black",
        age: 2,
    },
    {
        name : "Sylvester",
        color: "Tuxedo",
        age: 1.5,
    },
    {
        name : "Myrtle",
        color: "Tortoise",
        age:   0.5,
    },
];

const catNames = cats.map(cat => cat.name);

console.log(catNames);

/*let catsPiuGrandi = [];

for (let i = 0; i < cats.length; i++) {
  if (cats[i].age > 1) {
    catsPiuGrandi.push(cats[i]);
  }
}*/

const catsPiuGrandi = cats.filter(cat => cat.age > 1);
