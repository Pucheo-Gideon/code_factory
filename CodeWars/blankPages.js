/*Your classmates asked you to copy some paperwork for them. \
You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0
Waiting for translations and Feedback! Thanks!*/ 

function blankPages(classmates,  pages){
    // let totalPages = classmates * pages
   classmates < 0 || pages < 0
     ? console.log(0)
     : console.log(classmates * pages);
    // if (classmates && pages > 0){
    //     console.log( classmates * pages)
    // } else if(classmates || pages <0){
    //     console.log()
    // }
    // return classmates && pages >= 0? console.log (classmates * pages): console.log(-classmates * -pages)
}

blankPages(-12, 12);