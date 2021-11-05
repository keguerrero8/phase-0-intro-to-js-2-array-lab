// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats
    //appends a cat to the end of the cats array
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats
    //prepends a cat to the beginning of the cats array'
}

function destructivelyRemoveLastCat() {
    cats.pop()
    return cats
    //removes the last cat from the cats array
}

function destructivelyRemoveFirstCat() {
    cats.shift()
    return cats
    //removes the first cat from the cats array
}

function appendCat(name) {
    return [...cats, name]
    //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function prependCat(name) {
    return [name, ...cats]
    //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
}

function removeLastCat(name) {
    return cats.slice(0,-1)
    //removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
}

function removeFirstCat(name) {
    return cats.slice(1)
    //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
}