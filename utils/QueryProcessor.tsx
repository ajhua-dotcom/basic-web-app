export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrewid")) {
    return (
      "ajhua"
    );
  }
  if (query.toLowerCase().includes("name")) {
    return "ajhua";
  }
  // if (query.toLowerCase().includes("largest")){
  //   const numbersArray = query.match(/\d+\.?\d*/g); 
  //   let max = 0
  //   if (numbersArray != null){

  //   }
  // }
  // if(query.toLowerCase().includes("plus")){

  // }
  if (query.toLowerCase().includes("multiplied")){
    const numbersArray =  query.match(/\d+\.?\d*/g);
    if (numbersArray != null){
      return (Number(numbersArray[0]) * Number(numbersArray[1])).toString();
    }
    return "error";
  }

  return "";
}
