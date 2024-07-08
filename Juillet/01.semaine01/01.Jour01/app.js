/*

### Jour 1 : Introduction aux algorithmes et bases de JavaScript

**Rappel :**

- Syntaxe de base de JavaScript
- Variables, types de données, opérateurs
- Structures de contrôle (if, else, switch)

**Exercice :**
1. Écrire un programme qui demande à l'utilisateur d'entrer un nombre et vérifie si ce nombre est pair ou impair.
*/
function isPair(argNumber) {
  try {
    if (argNumber === null || argNumber === undefined) {
      throw new Error("Veuillez saisir un nombre non vide ou null");
    }
    if (typeof argNumber === "string") {
      throw new Error("Vous avez saisi une chaîne de caractères");
    }
    if (isNaN(argNumber)) {
      throw new Error("Veuillez saisir un nombre entier valide");
    }
    if (Array.isArray(argNumber)) {
      throw new Error("Vous avez saisi un tableau");
    }
    if (typeof argNumber === "object") {
      throw new Error("Vous avez saisi un object");
    }
    if (typeof argNumber === "boolean") {
      throw new Error("Vous avez saisi un boolean");
    }
    if (argNumber % 2 === 0) {
      return "The number ".concat(argNumber, " is pair");
    } else {
      return "The number ".concat(argNumber, " is impair");
    }
  } catch (error) {
    return error.message;
  }
}
/*
2. Écrire un programme qui demande à l'utilisateur d'entrer une note et affiche si l'utilisateur a réussi ou échoué (note >= 10 : réussi).

*/
function isAdmitted(argInputUser) {
  try {
    if (argInputUser === null || argInputUser === undefined) {
      throw new Error("Veuillez saisir un nombre non vide ou null");
    }
    if (typeof argInputUser === "string") {
      throw new Error("Vous avez saisi une chaîne de caractères");
    }
    if (isNaN(argInputUser)) {
      throw new Error("Veuillez saisir un nombre entier valide");
    }
    if (Array.isArray(argInputUser)) {
      throw new Error("Vous avez saisi un tableau");
    }
    if (typeof argInputUser === "object") {
      throw new Error("Vous avez saisi un object");
    }
    if (typeof argInputUser === "boolean") {
      throw new Error("Vous avez saisi un boolean");
    }
    if (argInputUser >= 10) {
      return "Cher candidat, votre note est de : ".concat(
        argInputUser,
        " vous \u00EAtes admis"
      );
    } else {
      return "Cher candidat, votre note est de : ".concat(
        argInputUser,
        " vous n'\u00EAtes pas admis"
      );
    }
  } catch (error) {
    return error.message;
  }
}
/* test  */
function testFunction(fn, argArray) {
  for (var _i = 0, argArray_1 = argArray; _i < argArray_1.length; _i++) {
    var element = argArray_1[_i];
    var result = fn(element);
    console.log(result);
  }
}
var testArray = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  "Bonjour",
  "1",
  [],
  { a: "bonjour" },
  false,
  "",
  null,
  undefined,
];
console.log("Test function isPair");
testFunction(isPair, testArray);
console.log("Test function isAdmitted");
testFunction(isAdmitted, testArray);
