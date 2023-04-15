const student = {
  name:"Ivan",
  surname:"Petrov",
  arg:25
}

function propInObject (str, obj){
  return  str in obj;
}

console.log(propInObject("name", student));
console.log(propInObject("c", {a:1, b:2}));
