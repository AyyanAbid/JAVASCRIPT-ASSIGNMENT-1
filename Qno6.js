for(let i=0; i<=100; i++){
    if(i%3==0){
        document.write("Fizz,");
        document.write("        ");
    }
    else if(i%5==0)
    {
        document.write("Buzz,");
        document.write("        ");
    }
    else if(i%3==0 && i%5==0 )
    {
        document.write("FizzBuzz,");
        document.write("        ");
    }
    else
    {
        document.write(i);
        document.write(",        ");
    }
}