
Реалізуй клас, що описує коло
class Circle{
    constructor(radius){
        this.radius = radius;
    }
    get getRadius(){
        return this.radius;
    }
    set getRadius(getRadius){
        this.radius -= 50;
    }
    get getRadius(){
        return this.radius * 2;
    }

}
let rad = new Circle("200")
rad.getRadius = 0;
console.log(`${rad.getRadius} circle diameter`);
function getC(C){
    return (C * 3.14) * 2
}
console.log(getC(rad.getRadius) + "circuit")

function getS(S){
    return (S * S) / 4 * 3.14
}
console.log(getS(rad.getRadius) + "area of ​​a circle")


Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:
class Marker {
    constructor(color, tank) {
        this.color = color
        this.tank = tank
    }
    print(text) {
        let area = text.split('').filter(c => c != ' ').length;
        console.log(area)
        this.tank -= area * 0.5;
        if (area < 200)
            document.write(`<p style = "color:${this.color}">${text}</p>`)
        if (area >= 200) {
            alert("Need ink!")
        }
        if (this.tank > 0)
            document.write(` you still have ink ${this.tank} %`)
    }
}
let firstMarker = new Marker("red", 100)
console.log(firstMarker)
firstMarker.print("Тема конечн о устарос пусто устарос по сущест конечнffо сущест конечно устареустаsfdsfdо устареустарела, но щес Тема к  о устарос по сущест конечно устареустарела, но ществу Тс поdsfdsfdо устареустарела, но щесс")


class secondMarker extends Marker {
    constructor(color, tank, plusTank) {
        super(color, tank)
        this.plusTank = plusTank;
    }
    print(text) {
        let area = text.split('').filter(c => c != ' ').length;
        console.log(area)
        this.tank -= area * 0.5;
        if (area < 200)
            document.write(`<p style = "color:${this.color}">${text}</p>`)
        if (area >= 200 && area <= 400) {
            alert(`You use another cartridge ${this.plusTank - 1}`)
            document.write(`<p style = "color:${this.color}">${text}</p>`)
        }
        if (area >= 400 && area <= 600) {
            alert(`You use another cartridge ${this.plusTank - 2}`)
            document.write(`<p style = "color:${this.color}">${text}</p>`)
        }
        if (area > 600) {
            alert("You ink is end")
        }
    }
}
let next = new secondMarker("blue", 100, 2)
console.log(next)
next.print("тст аsfdsfdо устар сущест кdsfdsfdsdsfdfонечноdsfdf устареустаsfdі конечн о устарос пусто устfонечноdsfdf устареустаsfdі конечн о устарос пусто устарос по сущест конечнffо сущетст конечно устареустаsfdsfdо устар сущереустаsfdsfdо устар сущест кdsfdsfdsdsfdfонечноdsfdf устареустаsfdі конечн о устарос пусто устст конечно устареустаsfdsfdо устар сущест конечно устареустаsfdsfdо устар")

// Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
class Employee{
    constructor(name, sName, age, position, experience ){
        this.name = name;
        this.sName = sName;
        this.age = age;
        this.position = position;
        this.experience = experience;
    }
}
let EmpTable = [
   new Employee("Ivan","Ivanov","27", "Menedger","6"),
   new Employee("Igant","Petrov","26", "Menedger","3"),
   new Employee("Vasya","Zdorov","37", "Menedger","9"),
   new Employee("Bob","Marli","19", "Menedger","2"),
]
EmpTable.forEach(element => {
    console.log(element)
});

let table = document.createElement('table');
document.body.append(table);
let rowHeader = table.insertRow();
for(let prop in EmpTable[0]) {
    let cell = rowHeader.insertCell();
    cell.innerText = prop;
    console.log(prop);
}
 
for(let i = 0; i < EmpTable.length; i++) {
    let row = table.insertRow();
    for(let prop in EmpTable[i]) {
        let cell = row.insertCell();
        cell.innerText = EmpTable[i][prop];
    }
}