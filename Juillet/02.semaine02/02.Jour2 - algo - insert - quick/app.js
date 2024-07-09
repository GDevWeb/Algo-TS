"use strict";
/*
### Jour 2 : Algorithmes de tri avancés

**Exercice 1 :**
Implémenter un tri par sélection pour un tableau de nombres.
 */
function selectionSort(argNumberArray) {
    // errors :
    try {
        if (argNumberArray === undefined ||
            argNumberArray === null ||
            argNumberArray.length === 0) {
            throw new Error(`Veuillez saisir un tableau d'éléments non vides !`);
        }
        if (!Array.isArray(argNumberArray)) {
            throw new Error(`Veuillez saisir un tableau !`);
        }
        if (argNumberArray.some((element) => isNaN(element))) {
            throw new Error(`Veuillez saisir un tableau composé iniquement de nombres!`);
        }
        // main logic :
        let n = argNumberArray.length;
        for (let i = 0; i < n; i++) {
            let min = i;
            for (let j = i + 1; j < n; j++) {
                if (argNumberArray[j] < argNumberArray[min]) {
                    min = j;
                }
            }
            if (min != i) {
                // swap element :
                let tmp = argNumberArray[i];
                argNumberArray[i] = argNumberArray[min];
                argNumberArray[min] = tmp;
            }
            return argNumberArray;
        }
    }
    catch (error) {
        console.error(`Une erreur s'est produite, ${error}`);
    }
}
// tests :
const inputUndefinedArr = undefined;
console.log("Test undefined array :");
console.log(selectionSort(inputUndefinedArr));
console.log("Test inputArrNumber :");
const inputArrNumber = [5, 2, 4, 6, 1, 3];
console.log(selectionSort(inputArrNumber));
/* **Exercice 2 :**
Implémenter un tri rapide (quicksort) pour un tableau de nombres.
 */
// Function to partition the array and return the partition index
function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}
// The main function that implements QuickSort
function quickSort(arr, low, high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
// Driver code
let arr = [10, 7, 8, 9, 1, 5];
let N = arr.length;
// Function call
quickSort(arr, 0, N - 1);
console.log("Sorted array:");
console.log(arr.join(" "));
