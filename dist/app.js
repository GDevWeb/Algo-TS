"use strict";
/* ### Jour 6 : Recherche et récursivité

**Rappel :**

- Recherche linéaire et recherche binaire
- Concepts de récursivité et fonctions récursives

**Exercice :**

1. Écrire une fonction de recherche linéaire qui trouve un élément dans un tableau.
 */
function linearSearch(argArray, argTarget) {
    try {
        // Vérification des arguments
        if (!Array.isArray(argArray) || argArray.length === 0) {
            throw new Error(`Veuillez saisir un tableau d'éléments non vide !`);
        }
        if (argTarget === null || argTarget === undefined || argTarget === "") {
            throw new Error(`Veuillez saisir un élément de recherche valide !`);
        }
        // Logique de recherche
        for (let i = 0; i < argArray.length; i++) {
            if (argArray[i] === argTarget) {
                return `L'élément recherché ${argTarget} est en position ${i}`;
            }
        }
        return `L'élément recherché ${argTarget} n'est pas présent dans le tableau d'éléments`;
    }
    catch (error) {
        return `Une erreur s'est produite : ${error.message}`;
    }
}
// Tests :
const testNumberArray = [5, 6, 9, 7, 5, 21, 5, 93, 2, 5, 6, 3, 33];
console.log(linearSearch(testNumberArray, 9)); // L'élément recherché 9 est en position 2
console.log(linearSearch(testNumberArray, 199)); // L'élément recherché 199 n'est pas présent dans le tableau d'éléments
const testStringArray = ["hello", "world"];
console.log(linearSearch(testStringArray, "hello")); // L'élément recherché hello est en position 0
console.log(linearSearch(testStringArray, "good")); // L'élément recherché good n'est pas présent dans le tableau d'éléments
const testObjectArray = [{ a: 1 }, { b: 2 }];
console.log(linearSearch(testObjectArray, { a: 1 })); // L'élément recherché [object Object] n'est pas présent dans le tableau d'éléments
console.log(linearSearch(testObjectArray, { c: 3 })); // L'élément recherché [object Object] n'est pas présent dans le tableau d'éléments
/* 2. Écrire une fonction récursive pour calculer la factorielle d'un nombre. */
function factorial(n) {
    if (n < 0) {
        throw new Error("LE nombre doit être positif");
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    // main logic :
    return n * factorial(n - 1);
}
// Tests :
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(10)); // 3628800
