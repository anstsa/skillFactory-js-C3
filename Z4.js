function Device(name, power){
  this.name = name;
  this.power = power;
  this.plug = false;   
}
  
Device.prototype.plugOn = function(){
    console.log(`������ - ${this.name}! ��������`);
    this.plug = true;
}

Device.prototype.plugOff = function(){
    console.log(`������ - ${this.name}! ��������`);
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

const lampTable = new Lamp("���������� �����","���������� �����", "65 ����", "�����");
const personalComputer = new Computer("������������ ���������", "Intel Core i7", "DDR5", "1600 ����");

lampTable.plugOn();
personalComputer.plugOff();

console.log(lampTable);
console.log(personalComputer);