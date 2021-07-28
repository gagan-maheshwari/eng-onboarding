const printFibonacciNumbers = (n) =>
{
    if(!Number.isInteger(n))
    {
        console.log("Only integers are permitted! Please try again.");
        return;
    }

    if(n < 1)
    {
        console.log("Number cannot be less than 1");
        return;
    }
    
    console.log("Fibonacci Series:");
    
    let n1 = 0, n2 = 1, nextTerm;
    
    for(let i = 0; i < n; i++)
    {
        console.log(n1);

        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

printFibonacciNumbers(5);