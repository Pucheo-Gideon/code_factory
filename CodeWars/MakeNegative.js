function MakeNegative(number){
    
    return number >=0 ? -Math.abs(number): -Math.abs(number)
}

MakeNegative(-9);

function makeNegative(number){
//   return number > 0 ? -Math.abs(number) : Math.abs(number);
  if(number > 0){
      console.log(-Math.abs(number))
  }else{
    console.log(Math.abs(number));
  }
}

makeNegative(9);