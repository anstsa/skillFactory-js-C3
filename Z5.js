class Device{
  constructor (name, power){
    this.name = name;
    this.power = power;
    this.type = "�������������";
    this.plug = false;
  }
  plugOn() {
    console.log(`������ - ${this.name}! �������`);
    this.plug = true;
  }
  plugOff() {
    console.log(`������ - ${this.name}! ��������`);
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

const lampTable = new Lamp("���������� �����","���������� �����", "65 ����", "�����");
const personalComputer = new Computer("������������ ���������", "Intel Core i7", "DDR5", "1600 ����");

lampTable.plugOn();
personalComputer.plugOff();

console.log(lampTable);
console.log(personalComputer);