const weeks = ['sunday', 'mondaye', 'tuesday', 'wednesdays', 'thursday'];

//map()
console.log("Using map()");
weeks.map((week, indexes) => {
    console.log(`${indexes + 1} : ${week.toUpperCase()}`);
})

//filter()
console.log("\nUsing filter()");
const res = weeks.filter((week) => {
    // console.log( week.toUpperCase());
    return week.endsWith('day');
});
console.log(res);

//reduce()
console.log("\nUsing reduce()");
const allDays = weeks.reduce((acc, week) => {
    // console.log( week.toUpperCase());
    return acc + (acc ? ", " : "") + week.toUpperCase();

}, '');
console.log(allDays);

// weeks.forEach((week, index) => {
//     setTimeout(() => {
//         console.log(index + 1, week);
//     }, index * 1000); // har 1 second ke baad agla din print hoga  
// });


const numbers = [1, 2, 3, 4, 5, 6];
// Step 1: har number ko triple karega → [3,6,9,12,15,18]
// Step 2: ye us numbers ko rakhega jo 9 se bada hai  → [12,15,18]
// Step 3: ye us numbers ka sum karega jo - jo 12 se bada hai


//combine
console.log("\nCombine examples... Using map, filter, and reduce");
const result = numbers
    .map(num => num * 3)
    .filter(num => num > 12)
    .reduce((acc, num) => acc + num, 0);

console.log(`The sum is = ${result}`); // 33