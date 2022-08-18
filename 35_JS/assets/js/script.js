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
let area = document.createElement("textarea")
mainBlock.appendChild(area)
area.style.cssText =`
height:200px;
width:400px;`
area.innerText = "Парадокс читання: воно відволікає нас від реальності, щоб наповнити реальність змістом."
area.addEventListener("keydown",function (k){
    console.log(k.code)
    if(k.code === "KeyQ" && k.code == "KeyW"){
        alert("fsdfdf")
    }
});

function runOnKeys(func, ...codes) {
    let pressed = new Set();

    document.addEventListener('keydown', function(event) {
      pressed.add(event.code);

      for (let code of codes) { // все ли клавиши из набора нажаты?
        if (!pressed.has(code)) {
          return;
        }
      }

      // да, все

      // во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
      // при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
      // чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
      pressed.clear();

      func();
    });

    document.addEventListener('keyup', function(event) {
      pressed.delete(event.code);
    });

  }

  runOnKeys(
    () => alert("Привет!"),
    "ControlLeft",
    "KeyS"
  );