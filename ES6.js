///////////////////////////// Création d’une classe
/* class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
}
let et1 = new Etudiant("Rami", 23);
let et2 = new Etudiant("Karimi", 21);
console.log (et1)
console.log (et2) */
/////////////
 /* class Etudiant {
  constructor(nom, age) {
    this.nom = nom;
    this.age = age;
  }
  info() {
    return `Etudiant nom:${this.nom} a pour age:${this.age}`;
  }
}

let et3 = new Etudiant("mohammed",22);
console.log(et.info());  */

///////////////////////Héritage de classe

/* class Stagiaire extends Etudiant {
  constructor(nom, age, stage) {
    super(nom, age);
    this.stage = stage;
  }
  info() {
    return `Stagiaire nom:${this.nom} a pour age:${this.age} stage:${this.stage}`;
  }
}
let stg1= new Stagiaire("Rami",23,"dev mobile");
 console.log(stg1.info()); 
  */



const personnes = [
  { nom: "Rami", age: 33, estMember: true },
  { nom: "Fatihi", age: 24, estMember: false },
  { nom: "Chakib", age: 45, estMember: true },
  { nom: "Mounir", age: 37, estMember: false },
];   
//////////////////////map
const noms=personnes.map(function(pers){return pers.nom})
console.log(noms)

/* const nums=[2,5,8,7,3];
const multip=nums.map(function(elt){
  return elt*3
});
console.log(multip); */

///////////////////////////////filter
/* const ages=personnes.filter((elt)=>{
  return elt.age>=35
})
console.log(ages) */

////////filter and map
/* const mem=personnes.filter((e)=>{
 e.estMember==true ;
}).map((e)=>{
 return e.nom
})
console.log(mem) ; */

////////////////////////////////////find

/* const ages=personnes.find((e)=>{
  return e.age>=30
})
console.log(ages)  */
/////////////////////////////////////reduce!!!!!!!!!!!!!
/* const clients = [
  { nom: "Rami", montant: 4500 },
  { nom: "Karimi", montant: 2300 },
  { nom: "Chaouki", montant: 5500 },
  { nom: "Ramoun", montant: 7700 },
]; */
/* const totalMontants = clients.reduce(function (total, client) {
  return (total += client.montant);
}, 0);
console.log(totalMontants);
 */

//////////////////////////Destructing d’un array
/* let numbers=[10, 20, 30, 40, 50]  */

/* const [a, b,...rest] = numbers;
console.log(a,b,rest); */

/* const numbers2=[...numbers]
console.log(numbers2) */
//////////////////////////////////////////splice
/* const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb"); 
console.log(months); 
months.splice(4, 1, 'May'); 
console.log(months);  */
