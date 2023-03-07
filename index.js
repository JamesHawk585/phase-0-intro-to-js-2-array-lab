// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

 function destructivelyRemoveFirstCat(name) {
    cats.shift();
 }

 function appendCat(name) {
    let copyOfCats = [...cats, name];
    return copyOfCats;
 }

 function prependCat(name) {
    let newCats = [name, ...cats];
    return newCats;
 }

 function removeLastCat(name) {
    let catsTwo = cats.slice(0, -1);
    return catsTwo;
 }

 function removeFirstCat(name) {
    let catsThree = cats.slice(1);
    return catsThree;
 }

