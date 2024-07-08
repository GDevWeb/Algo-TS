/*
### Jour 4 : Manipulation des tableaux et des chaînes de caractères

**Rappel :**

- Méthodes de tableau courantes (push, pop, shift, unshift, map, filter, reduce)
- Méthodes de chaîne de caractères (length, indexOf, slice, substring)

**Exercice :**

1. Écrire un programme qui inverse une chaîne de caractères.

*/
function reverseString(argString) {
    try {
        if (argString === null || argString === undefined || argString === "") {
            throw new Error("Veuillez saisir une chaîne de caractères non vide !");
        }
        if (typeof argString != "string") {
            throw new Error("Veuillez saisir une chaîne de caractères");
        }
        var reversedString = argString.split("").reverse().join("");
        return reversedString;
    }
    catch (error) {
        return error.message;
    }
}
console.log("Function reverseString");
console.log(reverseString("Hello world"));
/* test */
var testStringArray = [
    null,
    undefined,
    "",
    "Hello world",
    9,
    ["bonjour"],
    [9],
    { a: "b" },
];
var testReverseStringFunction = testStringArray.forEach(function (element) {
    return console.log(reverseString(element));
});
console.log("Test de la function reverseString :", testReverseStringFunction);
/* 2. Écrire un programme qui filtre les nombres pairs d'un tableau donné. */
function filterPairNumberForArray(argArray) {
    var filteredPairNumber = argArray.filter(function (number) { return number % 2 === 0; });
    return filteredPairNumber;
}
var testNumberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log("Function filterPairNumberForArray");
console.log(filterPairNumberForArray(testNumberArray));
