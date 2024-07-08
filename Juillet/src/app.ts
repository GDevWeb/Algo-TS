/* ### Jour 1 : Structures de données

**Exercice 1 :**  
Écrire une fonction qui prend une chaîne de caractères et retourne une nouvelle chaîne avec les caractères en ordre inverse, mais en préservant les positions des espaces.
*/

function reverseString(paramString: string): string | undefined {
  try {
    if (
      paramString === null ||
      paramString === undefined ||
      paramString === ""
    ) {
      throw new Error(`Veuillez saisir une chaîne de caractères non vide !`);
    }

    if (typeof paramString !== "string") {
      throw new Error(`Veuillez saisir une chaîne de caractères!`);
    }

    // main logic :
    // clean string :
    const reversedString: string = Array.from(paramString)
      .reverse()
      .toString()
      .replaceAll(",", "");

    return reversedString;
  } catch (error: unknown) {
    console.error("Une erreur s'est produite :", error);
  }
}

const testString = "Annabeth is a living jukebox";
console.log("Exercice 1 - reverseString");
console.log(reverseString(testString));

/* **Exercice 2 :**  
Écrire une fonction qui prend un tableau de nombres et retourne un nouvel objet avec deux propriétés : "pair" pour les nombres pairs et "impair" pour les nombres impairs.
 */

function separateEvenOddNumbers(paramNumberArray: number[]): {
  pair: number[];
  impair: number[];
} {
  if (!Array.isArray(paramNumberArray) || paramNumberArray.length === 0) {
    throw new Error("Veuillez saisir un tableau d'éléments non vide !");
  }
  if (paramNumberArray.some((element) => !Number.isInteger(element))) {
    throw new Error(
      "Veuillez saisir un tableau contenant uniquement des nombres entiers"
    );
  }

  const result = { pair: [], impair: [] };

  for (const num of paramNumberArray) {
    if (num % 2 === 0) {
      result.pair.push(num);
    } else {
      result.impair.push(num);
    }
  }

  return result;
}

const testNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(separateEvenOddNumbers(testNumberArray));
// { pair: [0, 2, 4, 6, 8, 10, 12], impair: [1, 3, 5, 7, 9, 11] }
