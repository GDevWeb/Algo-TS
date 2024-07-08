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

function isPairOrUnPair(paramNumberArray: number[]) {
  try {
    if (
      paramNumberArray === undefined ||
      paramNumberArray === null ||
      paramNumberArray.length === 0
    ) {
      throw new Error(`Veuillez saisir un tableau d'éléments non vide !`);
    }
    if (!Array.isArray(paramNumberArray)) {
      throw new Error(`Veuillez saisir un tableau`);
    }
    if (paramNumberArray.some((element) => !Number.isInteger(element))) {
      throw new Error(
        `Veuillez saisir un tableau contenant uniquement des nombres entiers`
      );
    }

    if (paramNumberArray.some((element) => element < 0)) {
      throw new Error(
        `Veuillez saisir un tableau contenant uniquement des nombres entiers positif et supérieur à 0`
      );
    }

    // main logic :
    let resultArray: object[] = [];
    for (let i = 0; i < paramNumberArray.length; i++) {
      if (paramNumberArray[i] % 2 === 0) {
        resultArray.push({ pair: paramNumberArray[i] });
      } else {
        resultArray.push({ impair: paramNumberArray[i] });
      }
    }
    return resultArray;
  } catch (error: unknown) {
    console.error("Une erreur s'est produite : ", error);
    return null;
  }
}

const testNumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Exercice 2 - isPairOrUnpair");
console.log(isPairOrUnPair(testNumberArray));
