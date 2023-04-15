function Device(name, power){
  this.name = name;
  this.power = power;
  this.plug = false;   
}
  
Device.prototype.plugOn = function(){
    console.log(`Прибор - ${this.name}! Выключен`);
    this.plug = true;
}

Device.prototype.plugOff = function(){
    console.log(`Прибор - ${this.name}! Выключен`);
    this.plug = false;
}

function Lamp(name, lampType, power, color){
  this.name = name;
  this.lampType = lampType;
  this.power = power;
  this.color = color;
}

function Computer(name, processor, power, ram){
  this.name = name;
  this.processor = processor;
  this.power = power;
  this.ram = ram;
}

Lamp.prototype = new Device();
Computer.prototype = new Device();

const lampTable = new Lamp("Настольная лампа","Галогенная лампа", "65 Ватт", "Белый");
const personalComputer = new Computer("Персональный компьютер", "Intel Core i7", "DDR5", "1600 Ватт");

lampTable.plugOn();
personalComputer.plugOff();

console.log(lampTable);
console.log(personalComputer);