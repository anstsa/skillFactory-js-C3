class Device{
  constructor (name, power){
    this.name = name;
    this.power = power;
    this.type = "электроприбор";
    this.plug = false;
  }
  plugOn() {
    console.log(`Прибор - ${this.name}! Включен`);
    this.plug = true;
  }
  plugOff() {
    console.log(`Прибор - ${this.name}! Выключен`);
    this.plug = false;
  }
}
  
class Lamp extends Device {
  constructor (name, lampType, power, color) {
    super(name, power);
    this.lampType = lampType;
    this.color = color;
  }
}
  
 
class Computer extends Device {
  constructor (name, processor, power, ram) {
    super(name, power);
    this.processor = processor;
    this.ram = ram;
  }
} 

const lampTable = new Lamp("Настольная лампа","Галогенная лампа", "65 Ватт", "Белый");
const personalComputer = new Computer("Персональный компьютер", "Intel Core i7", "DDR5", "1600 Ватт");

lampTable.plugOn();
personalComputer.plugOff();

console.log(lampTable);
console.log(personalComputer);