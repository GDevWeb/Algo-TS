"use strict";
/*
### Jour 5 : Algorithmes de tri

**Rappel :**

- Introduction aux algorithmes de tri (tri à bulles, tri par insertion, tri par sélection)
- Comparaison et choix des algorithmes

**Exercice :**

1. Implémenter un tri à bulles pour un tableau de nombres.
*/
function bubbleSort(argArray) {
  const length = argArray.length;
  let swapped;
  try {
    if (argArray.length === 0 || argArray === undefined || argArray === null) {
      throw new Error(`Veuillez saisir un tableau de nombres non vide!`);
    }
    if (!Array.isArray(argArray)) {
      throw new Error(`Veuillez saisir un tableau de nombres!`);
    }
    if (argArray.some((element) => isNaN(element))) {
      throw new Error(
        `Veuillez saisir un tableau contenant uniquement des nombres!`
      );
    }
    // logique :
    do {
      swapped = false;
      for (let i = 0; i < length - 1; i++) {
        if (argArray[i] > argArray[i + 1]) {
          [argArray[i], argArray[i + 1]] = [argArray[i + 1], argArray[i]];
          swapped = true;
        }
      }
    } while (swapped);
    return argArray;
  } catch (error) {
    console.error("Erreur : ", error);
  }
}
// Test :
const numbersArray = [64, 34, 25, 12, 22, 11, 90];
const result = `Tableau avant le triage à bulles : ${numbersArray}
Tableau après le triage à bulle : ${bubbleSort(numbersArray)}
`;
console.log(result);
/* 2. Implémenter un tri par insertion pour un tableau de nombres.*/
function insertSort(argArray) {
  try {
    if (argArray.length === 0 || argArray === undefined || argArray === null) {
      throw new Error(`Veuillez saisir un tableau de nombres non vide!`);
    }
    if (!Array.isArray(argArray)) {
      throw new Error(`Veuillez saisir un tableau de nombres!`);
    }
    if (argArray.some((element) => isNaN(element))) {
      throw new Error(
        `Veuillez saisir un tableau contenant uniquement des nombres!`
      );
    }
    // logique :
    for (let i = 0; i < argArray.length; i++) {
      let currentValue = argArray[i];
      let j = i - 1;
      while (j >= 0 && argArray[j] > currentValue) {
        argArray[j + 1] = argArray[j];
        j--;
      }
      argArray[j + 1] = currentValue;
    }
    return argArray;
  } catch (error) {
    console.error("Erreur : ", error);
  }
}
// test :
const secondResult = `Tableau avant le triage par insertion : ${numbersArray}
Tableau après le triage par insertion : ${insertSort(numbersArray)}
`;
console.log(secondResult);
