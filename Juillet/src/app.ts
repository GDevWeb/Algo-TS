/* ### Jour 3 : Algorithmes de recherche avancés

**Exercice 1 :**  
Écrire une fonction qui utilise la recherche binaire pour trouver un élément dans un tableau trié.
*/

function binarySearch(
  argArray: number[],
  argTarget: number
): string | undefined {
  // Vérification des erreurs :
  try {
    if (argArray === null || argArray === undefined || argArray.length === 0) {
      throw new Error(`Veuillez saisir un tableau non vide !`);
    }

    if (argArray.some((element) => element === null || element === undefined)) {
      throw new Error(`Veuillez saisir un tableau d'éléments valides !`);
    }

    // La recherche binaire nécessite un tableau trié.
    let left = 0;
    let right = argArray.length - 1;

    // Logique de la recherche binaire :
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      const middleElement = argArray[middle];

      if (middleElement === argTarget) {
        return `"${argTarget} est présent dans le tableau à l'index : ${middle}"`;
      } else if (middleElement < argTarget) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return `"${argTarget} n'est pas présent dans le tableau"`;
  } catch (error) {
    console.error(error);
  }
}

// Tests :
console.log("Test de la fonction binarySearch");
const testArgArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(binarySearch(testArgArray, 10)); // "10 est présent dans le tableau à l'index : 9"
console.log(binarySearch(testArgArray, 42)); // "42 n'est pas présent dans le tableau"

/*
**Exercice 2 :**  
Écrire une fonction qui trouve le premier et le dernier indice d'un élément donné dans un tableau trié (utiliser une recherche binaire modifiée).
 */

function findFirstAndLastIndex(
  arr: number[],
  target: number
): [number, number] {
  // Recherche du premier indice de l'élément cible
  const firstIndex = findIndex(arr, target, true);
  if (firstIndex === -1) {
    return [-1, -1]; // Si l'élément n'est pas trouvé, retourner [-1, -1]
  }

  // Recherche du dernier indice de l'élément cible
  const lastIndex = findIndex(arr, target, false);

  return [firstIndex, lastIndex];
}

function findIndex(arr: number[], target: number, findFirst: boolean): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      result = middle;
      if (findFirst) {
        right = middle - 1; // Continue à chercher dans la moitié gauche
      } else {
        left = middle + 1; // Continue à chercher dans la moitié droite
      }
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result;
}

// Tests
const testArray = [1, 2, 2, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 10];
console.log("Test de la fonction findFirstAndLastIndex");

console.log(findFirstAndLastIndex(testArray, 2)); // [1, 3]
console.log(findFirstAndLastIndex(testArray, 5)); // [6, 8]
console.log(findFirstAndLastIndex(testArray, 11)); // [-1, -1]
