function noPrototype (){
  const obj = Object.create(null)
  return obj
}

console.log(noPrototype());