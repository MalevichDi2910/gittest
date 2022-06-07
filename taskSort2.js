const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
let newArr = [...arr];
return newArr.sort((a,b) => {return a - b})
}

nonMutatingSort(globalArray);


/* second variant
const globalArray = [5, 6, 3, 2, 9];
const nonMutatingSort = arr => [...arr].sort((a,b) => a - b);
nonMutatingSort(globalArray); */