var b = 100;

const a = 100;

const arr = []

//adding elements to the array
// Add and remove the last element
arr.push(10)
arr.pop()

// Add and remove the first element
arr.unshift(5) // [5, 10, 20]
arr.shift() // [10, 20]




// console.log(names)

const student = {
    name : "John",
    age : 20,
    subjects : ["Math", "Science", "English"]
}


// console.log(student.subjects[student.subjects.length - 1])


const name = "ma_la_ya_lam";

const names = []

// console.log() //

names.push(...name.split("_"))  //[ 'ma', 'la', 'ya', 'lam' ]

console.log(names) // [ [ 'ma', 'la', 'ya', 'lam' ] ]