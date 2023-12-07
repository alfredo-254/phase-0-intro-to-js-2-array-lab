// Write your solution here!
const cats=["Milo", "Otis", "Garfield"]

// Append a cat to the end of the cats array (destructively)
function destructivelyAppendCat(name) {
  cats.push(name);
}

// Prepend a cat to the beginning of the cats array (destructively)
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Remove the last cat from the cats array (destructively)
function destructivelyRemoveLastCat() {
  cats.pop();
}

// Remove the first cat from the cats array (destructively)
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Append a cat to the end of the cats array (non-destructively)
function appendCat(name) {
  // Use the spread operator to create a new array with the new cat added
  let newCatsArray = [...cats, name];
    return newCatsArray;
}
// Append a cat at the start of the cats array (non-destructively)
function prependCat(name){
    // Use the spread operator to create a new array with the new cat added
    let newCatsArray=[name, ...cats];
    return newCatsArray;
}

// Remove the last cat from the cats array (non-destructively)
function removeLastCat() {
    // Use the slice method to create a new array without the last element
    let newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
// Remove the first cat from the cats array (non-destructively)
  function removeFirstCat() {
    // Use the slice method to create a new array without the first element
    let newCatsArray = cats.slice(1);
    return newCatsArray;
  }



