// Create a parametrized function for task4, task5 where the array is recieved as an input.

// task 6
function task4(array)
{
for(let index = 0; index < array.length; index++)
{
    console.log("Task 4: "+array[index]);
}
}

// task 7
function task5(array)
{
    let sum = 0;

for (let index = 0; index < array.length; index++)
{
    num = array[index];
    sum = sum + num;
}

console.log("Task 5: "+sum);
}

task4([2,6,10]);
console.log("\n")
task5([11,24,56]);
