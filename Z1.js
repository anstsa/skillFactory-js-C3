let student = {
  name:"Ivan",
  surname:"Petrov",
  age:25
}

function objectKeyValue (obj){
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`���� - ${key}, �������� - ${obj[key]}`)   
    }
  }
}

objectKeyValue(student)
objectKeyValue({a:1, b:2})