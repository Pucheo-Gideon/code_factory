function filter_list(l) {
  let filteredList = [];
  for (i = 0; i < l.length; i++) 
    return typeof l[i] == "number" && typeof l[i] >-1? filteredList.push(l[i])
    
  
//   return filteredList;
}
console.log(filter_list([12, 14, "a", "b", '123', '1', 'gshdfhjs', -9, -1, '-1', '0', 14, 0]));