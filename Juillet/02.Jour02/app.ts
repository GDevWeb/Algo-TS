/* 
### Jour 2 : Boucles et itérations

**Rappel :**

- Boucles (for, while, do-while)
- Utilisation des boucles pour parcourir des tableaux

**Exercice :**

1. Écrire un programme qui affiche les nombres de 1 à 10.
*/

function logNumberAToB(argA: number, argB: number) {
  try {
    if (argA == null || argA == undefined) {
      throw new Error(
        `Vous devez saisir un nombre non nul pour premier argument !`
      );
    }

    if (argB == null || argB == undefined) {
      throw new Error(
        `Vous devez saisir un nombre non nul pour second argument !`
      );
    }

    if (isNaN(argA)) {
      throw new Error(`Vous devez saisir un nombre pour premier argument !`);
    }

    if (isNaN(argB)) {
      throw new Error(`Vous devez saisir un nombre pour premier argument !`);
    }

    if (typeof argA === "string") {
      throw new Error(
        "Vous avez saisi une chaîne de caractères pour premier argument"
      );
    }

    if (typeof argB === "string") {
      throw new Error(
        "Vous avez saisi une chaîne de caractères pour second argument"
      );
    }

    if (Array.isArray(argA)) {
      throw new Error("Vous avez saisi un tableau pour premier argument");
    }

    if (Array.isArray(argB)) {
      throw new Error("Vous avez saisi un tableau pour second argument");
    }

    if (typeof argA === "object") {
      throw new Error("Vous avez saisi un object pour premier argument");
    }

    if (typeof argB === "object") {
      throw new Error("Vous avez saisi un object pour second argument");
    }

    if (typeof argA === "boolean") {
      throw new Error("Vous avez saisi un boolean pour premier argument");
    }

    if (typeof argB === "boolean") {
      throw new Error("Vous avez saisi un boolean pour second argument");
    }

    if (argA >= argB) {
      throw new Error(
        `Vous devez saisir un premier nombre qui est inférieur au second nombre !`
      );
    }

    // logique :
    for (let i = argA; i <= argB; i++) {
      console.log(i);
    }
  } catch (error) {
    console.error("Une erreur est survenue :", error.message);
  }
}

console.log(logNumberAToB(20, 30));

/* test  */

function testFunction(fn: (argA: any, argB: any) => string, argArray: any[]) {
  for (const element of argArray) {
    const result = fn(element[0], element[1]);
    console.log(result);
  }
}

const testArray = [
  [1, 10],
  [20, 10],
  [5, 15],
];

console.log("Test function logNumberAToB");
testArray.forEach((args) => logNumberAToB(args[0], args[1]));

/* 2. Écrire un programme qui calcule la somme des nombres d'un tableau donné.*/
function sumOfArray(argArray: any[]) {
  try {
    if (!Array.isArray(argArray)) {
      throw new Error("Veuillez saisir un tableau de nombres.");
    }

    if (argArray.some((item) => typeof item !== "number")) {
      throw new Error("Le tableau doit contenir uniquement des nombres.");
    }

    return argArray.reduce((sum, num) => sum + num, 0);
  } catch (error) {
    return error.message;
  }
}

const arraysToSum: any[] = [
  [1, 2, 3, 4, 5], // Expected sum: 15
  [10, 20, 30], // Expected sum: 60
  [5, 5, 5, 5, 5], // Expected sum: 25
  "Bonjour", // Expected error: "Veuillez saisir un tableau de nombres."
  [1, 2, "3"], // Expected error: "Le tableau doit contenir uniquement des nombres."
  [],
];

arraysToSum.forEach((arr) => {
  console.log(`Sum of ${JSON.stringify(arr)}: ${sumOfArray(arr)}`);
});
