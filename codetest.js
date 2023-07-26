console.log("Generating 10 random integers in range of 1 to 100")

let randomArr = [];
for (let i = 0; i < 10; i++) {
    randomArr.push(Math.floor(Math.random() * 100) + 1);
}
randomArr.sort(function(a, b){return b-a});

console.log("These are the initial 10 integers")
console.log(randomArr);

function removeDuplicates(randomArr) {
    let unique = [];
    randomArr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
   
}

console.log("These are the sorted and unique values")
console.log(removeDuplicates(randomArr));

