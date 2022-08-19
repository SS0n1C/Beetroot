let text = "Парадокс читання: воно відволікає нас від реальності, щоб наповнити реальність змістом."
let mainBlock = document.createElement("div")
document.body.appendChild(mainBlock)
mainBlock.style.cssText = `
height: 300px;
width:500px;
border:2px red solid;
margin: 0 auto;
line-height:30px;
display:flex;
align-items:center;
justify-content:center;`
mainBlock.innerText = text
let area = document.createElement("textarea")
document.body.appendChild(area)
area.style.cssText = `
height:300px;
width:500px;
display:none;
margin:0 auto;
`

const app = {
    event() {
        document.addEventListener('keydown', this.keyboard.bind(this));
    },

    keyboard(e) {
        if (e.code == 'KeyE' && e.ctrlKey) {
            e.preventDefault();

            this.save_options();
        }
    },

    save_options() {
        area.style.display = "flex"
        area.innerText = text
        mainBlock.style.display = "none"
    }
}

app.event();

const app1 = {
    event() {
        document.addEventListener('keydown', this.keyboard.bind(this));
    },

    keyboard(e) {
        if (e.code == 'KeyS' && e.ctrlKey) {
            e.preventDefault();
            this.save_options();
        }
    },

    save_options() {
        area.style.display = "none"
        mainBlock.style.display = "flex"
        mainBlock.innerText = area.value

    }
}
app1.event();


let mainTable = document.createElement("table")
let thead = document.createElement("thead")
let mainRow = document.createElement("tr")
let hColum = document.createElement("th")
let hColum2 = document.createElement("th")
let hColum3 = document.createElement("th")
hColum3.setAttribute("data-type", "number")

let tableBody = document.createElement("tbody")
let fRow = document.createElement("tr")
let fColum = document.createElement("td")
let fColum2 = document.createElement("td")
let fColum3 = document.createElement("td")

let sRow = document.createElement("tr")
let sColum = document.createElement("td")
let sColum2 = document.createElement("td")
let sColum3 = document.createElement("td")

let tRow = document.createElement("tr")
let tColum = document.createElement("td")
let tColum2 = document.createElement("td")
let tColum3 = document.createElement("td")

document.body.appendChild(mainTable)
mainTable.appendChild(thead)
mainTable.appendChild(tableBody)
thead.appendChild(mainRow)
mainRow.appendChild(hColum)
mainRow.appendChild(hColum2)
mainRow.appendChild(hColum3)

tableBody.appendChild(fRow)
fRow.appendChild(fColum)
fRow.appendChild(fColum2)
fRow.appendChild(fColum3)

tableBody.appendChild(sRow)
sRow.appendChild(sColum)
sRow.appendChild(sColum2)
sRow.appendChild(sColum3)

tableBody.appendChild(tRow)
tRow.appendChild(tColum)
tRow.appendChild(tColum2)
tRow.appendChild(tColum3)

mainTable.style.cssText = `
  border:1px black solid;
  margin:50px auto 50px auto;
  width:90%;
  text-align:center;
`
hColum.innerText = "first"
hColum2.innerText = "second"
hColum3.innerText = "thirty"

fColum.innerText = "a"
fColum2.innerText = "l"
fColum3.innerText = "11"

sColum.innerText = "c"
sColum2.innerText = "o"
sColum3.innerText = "1"

tColum.innerText = "b"
tColum2.innerText = "x"
tColum3.innerText = "15"
let slots = document.querySelectorAll('td')
for (let key of slots)

    key.style.cssText = ` 
border:1px black solid;
padding:15px;
`


document.addEventListener('DOMContentLoaded', function () {
    let headers = mainTable.querySelectorAll("th");
    let rows = tableBody.querySelectorAll("tr");
    const directions = Array.from(headers).map(function (header) {
        return '';
    });

    const transform = function (index, content) {
        const type = headers[index].getAttribute('data-type');
        switch (type) {
            case 'number':
                return parseFloat(content);
            case 'string':
            default:
                return content;
        }
    };

    const sortColumn = function (index) {
        const direction = directions[index] || 'asc';
        const multiplier = (direction === 'asc') ? 1 : -1;

        const newRows = Array.from(rows);

        newRows.sort(function (rowA, rowB) {
            const cellA = rowA.querySelectorAll('td')[index].innerHTML;
            const cellB = rowB.querySelectorAll('td')[index].innerHTML;

            const a = transform(index, cellA);
            const b = transform(index, cellB);

            switch (true) {
                case a > b: return 1 * multiplier;
                case a < b: return -1 * multiplier;
                case a === b: return 0;
            }
        });
        [].forEach.call(rows, function (row) {
            tableBody.removeChild(row);
        });
        directions[index] = direction === 'asc' ? 'desc' : 'asc';
        newRows.forEach(function (newRow) {
            tableBody.appendChild(newRow);
        });
    };

    [].forEach.call(headers, function (header, index) {
        header.addEventListener('click', function () {
            sortColumn(index);
        });
    });
});


let block = document.createElement("div")
document.body.appendChild(block)
block.style.cssText = `
border:1px black solid;
width:600px;
height:300px;
margin:0 auto 150px;
text-align:center;
postion:relative;
`
block.setAttribute("class","block")

let field = document.createElement("div")
block.appendChild(field)
field.style.cssText = `
width:100%;
height:100%;
position:relative;
background-color:red;
`
field.innerText ="some txt"
let sizer = document.createElement("div")
field.appendChild(sizer)
sizer.setAttribute("id", "newID")
sizer.setAttribute("class", "resizer")
sizer.style.cssText = `
position:absolute;
bottom:0;
right:0;
width:5px;
height:5px;
background-color:grey;
`




let el = document.querySelector(".block");
let isResizing = false;



const resizers = document.querySelectorAll(".resizer");
let currentResizer;

for (let resizer of resizers) {
  resizer.addEventListener("mousedown", mousedown);

  function mousedown(e) {
    currentResizer = e.target;
    isResizing = true;

    let prevX = e.clientX;
    let prevY = e.clientY;

    window.addEventListener("mousemove", mousemove);
    window.addEventListener("mouseup", mouseup);

    function mousemove(e) {
      const rect = block.getBoundingClientRect();
        el.style.width = rect.width + (prevX - e.clientX) + "px";
        el.style.height = rect.height + (prevY - e.clientY) + "px";
        el.style.top = rect.top - (prevY - e.clientY) + "px";
        el.style.left = rect.left - (prevX - e.clientX) + "px";
        prevX = e.clientX;
        prevY = e.clientY;
    }

    function mouseup() {
      window.removeEventListener("mousemove", mousemove);
      window.removeEventListener("mouseup", mouseup);
      isResizing = false;
    }
  }
}