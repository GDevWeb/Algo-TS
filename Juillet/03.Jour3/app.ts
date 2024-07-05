/* 
### Jour 3 : Fonctions et portée

**Rappel :**

- Déclaration et utilisation des fonctions
- Paramètres et valeurs de retour
- Portée des variables (globale et locale)

**Exercice :**

1. Écrire une fonction qui prend deux nombres en paramètres et retourne leur somme.

 */

function getSum(argA: number, argB: number): number {
  try {
    if (argA === null || argA === undefined) {
      throw new Error(`Veuillez saisir un premier argument non vide !`);
    }
    if (argB === null || argB === undefined) {
      throw new Error(`Veuillez saisir un second argument non vide !`);
    }
    if (isNaN(argA)) {
      throw new Error(`Veuillez saisir un nombre pour premier argument !`);
    }
    if (isNaN(argA)) {
      throw new Error(`Veuillez saisir un nombre pour second argument !`);
    }

    const sum: number = argA + argB;

    return sum;
  } catch (error) {
    return error.message;
  }
}
console.log(getSum(10, 5));

/* 2. Écrire une fonction qui prend un tableau de nombres et retourne le plus grand nombre du tableau.
 */

function getMaxNumberForArray(argArray: number[]): number | string {
  try {
    if (argArray === null || argArray === undefined) {
      throw new Error(`Veuillez saisir un tableau de nombres non vide !`);
    }
    if (!Array.isArray(argArray)) {
      throw new Error(`Veuillez saisir un tableau de nombres.`);
    }

    if (argArray.some((item) => typeof item != "number")) {
      throw new Error(`Le tableau doit comporter uniquement des nombres`);
    }
    const maxNumber = Math.max(...argArray);

    return maxNumber;
  } catch (error) {
    return error.message;
  }
}

const arraysToMax: any[] = [
  [1, 2, 3, 4, 5], // Expected max: 5
  [10, 20, 30], // Expected max: 30
  [5, 5, 5, 5, 5], // Expected max: 5
  "Bonjour", // Expected error: "Veuillez saisir un tableau de nombres."
  [1, 2, "3"], // Expected error: "Le tableau doit comporter uniquement des nombres"
  [], // Expected error: "Veuillez saisir un tableau de nombres non vide !"
];

arraysToMax.forEach((arr) => {
  const result = Array.isArray(arr)
    ? getMaxNumberForArray(arr)
    : getMaxNumberForArray([]);
  console.log(`Max number in ${JSON.stringify(arr)}: ${result}`);
});
