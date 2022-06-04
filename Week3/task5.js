// Use a loop to calculate the sum of following array: [11,24,56]

let given_array = [11,24,56];

let sum = 0;

for (let index = 0; index < given_array.length; index++)
{
    num = given_array[index];
    sum = sum + num;
}

console.log(sum);