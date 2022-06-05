// Create functions for task1, task2, task3

// task 1
function task1()
{
    for (let num = 1; num <= 10; num++)
{
    console.log("Task 1: "+num);
    
}
}

// task 2
function task2()
{
    let num = 2;
for (let num = 2; num <= 10; num = num+2)
{
    console.log("Task 2: "+num);
}
}

// task 3
function task3(){
    for (let num = 2; num <= 10; num = num + 2)
{
    if (num === 6 || num === 8)
    {
        continue;
    }
    console.log("Task 3: "+num);
}      

}

task1()
console.log("\n")
task2()
console.log("\n")
task3()
