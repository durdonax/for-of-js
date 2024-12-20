let letter = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina',];

let haveN = []
let notHaveN = []


for (const element of letter) {
  if(element.includes(`n`))  {
    haveN.push(element)
  } else{
    notHaveN.push(element)
  }
}
console.log(haveN + ` "n" harfi bor so'zlar`);
console.log(notHaveN + ` "n" harfi yoq so'zlar`);
