// Use a loop to print following values: 2,4,10

for (let num = 2; num <= 10; num = num + 2)
{
    if (num === 6 || num === 8)
    {
        continue;
    }
    console.log(num);
}      
