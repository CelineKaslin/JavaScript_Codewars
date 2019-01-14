// your task is given a number, 3 for example, return a string with a murmur:
//"1 sheep...2 sheep...3 sheep..."
// Note: You will always receive a positive integer.

let countSheep = function (num){
let sheep = ''
  for (let i = 1 ; i<=num; i++){
    sheep += `${i} sheep...`
  };
  return sheep;
};
