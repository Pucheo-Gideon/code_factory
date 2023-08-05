/*Timmy & Sarah think they are in love, 
but around where they live, 
they will only know once they pick a flower each. 
If one of the flowers has an even number of 
petals and the other has an odd number of petals 
it means they are in love.

Write a function that will take the number 
of petals of each flower and return true if 
they are in love and false if they aren't*/

// function inLove(petalsEven, petalsOdd) {
//   petalsEven % 2 == 0  && petalsOdd % 2 == 1 
//     ? console.log(
//         `${true}: Timmy and Sarah, You guys are stupidly, madly, drunkenly in Love!`
//       )
//     : console.log(`${false}: Sorry, You guys are not fit for each other. You're Out of Love`);
// }

// inLove(4, 15);

//   if((petalsEven%2==0) && (petalsOdd % 2 != 1)){
  //       console.log(`${true}: ==> You guys are in love`)
  //   }else{

  //       console.log(`${false}: ==> You guys are not in Love`)
  //   }

//   function lovefunc(flower1, flower2) {
//    (flower1 % 2 == 0 && flower2 % 2 == 1)|| (flower1 % 2 == 1 && flower2 % 2 == 0)
//      ? console.log (true)
//      :  console.log (false);
//   }

//   lovefunc(13, 13);

  function lovefunc(flower1, flower2) {
   if ((flower1 % 2 == 0 && flower2 % 2 == 1)|| (flower1 % 2 == 1 && flower2 % 2 == 0)){
    return true
   }else{
    return false
   }
   
  }

  lovefunc(23, 56);

