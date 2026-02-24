export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
function isPrime(num = 0) {
    // Numbers less than 2 are not prime.
    if (num <= 1) {
      return false;
    }
    // 2 is the only even prime number.
    if (num === 2) {
      return true;
    }
    // Exclude all other even numbers.
    if (num % 2 === 0) {
      return false;
    }

    // Check for divisors from 3 up to the square root of the number,
    // incrementing by 2 to check only odd numbers.
    const sqrt = Math.sqrt(num);
    for (let i = 3; i <= sqrt; i += 2) {
      if (num % i === 0) {
        return false; // Found a divisor, not prime.
      }
    }

    return true; // No divisors found, the number is prime.
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "ajhua"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return "ajhua";
  }
  if (query.toLowerCase().includes("largest")){
    const numbersArray = query.match(/\d+\.?\d*/g); 
    let largest = 0
    if (numbersArray != null){
      for(let elem in numbersArray){
        if (Number(elem) > largest){
          largest = Number(elem);
        }
      }
      return largest.toString();
    }
    return "";
  }
  // if(query.toLowerCase().includes("plus")){

  // }
  if (query.toLowerCase().includes("multiplied")){
    const numbersArray =  query.match(/\d+\.?\d*/g);
    if (numbersArray != null){
      return (Number(numbersArray[0]) * Number(numbersArray[1])).toString();
    }
    return "error";
  }
  if (query.toLowerCase().includes("minus")){
    const numbersArray =  query.match(/\d+\.?\d*/g);
    if (numbersArray != null){
      return (Number(numbersArray[0]) - Number(numbersArray[1])).toString();
    }
    return "error";
  }
  if (query.toLowerCase().includes("to the power of")){
    const numbersArray =  query.match(/\d+\.?\d*/g);
    if (numbersArray != null){
      return (Math.pow(Number(numbersArray[0]), Number(numbersArray[1]))).toString();
    }
    return "error";
  }
  if (query.toLowerCase().includes("square") && query.toLowerCase().includes("cube")){

  }
  if (query.toLowerCase().includes("prime")){
    const numbersArray =  query.match(/\d+\.?\d*/g);
    let res = ""
    if (numbersArray != null){
      for(let elem in numbersArray){
        if (isPrime(Number(elem))){
          res += elem + ", "
        }
      }
      return res.substring(-2);
    }
    return "";

  }

  return "";
}
