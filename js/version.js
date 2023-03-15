const { versions } = require("process")

var infoVersion = {
    "0.0.1":["Название","Идея","Сюжет","Пару вещей(Переделано в 0.0.2)"],
    "0.0.2":["Система строительства(Переделано, на данный момент не доступно для игрока)","Железная руда","Статистика при наведении на строение","Лог"],
    "0.0.3":[["Золото",["Спавн","Предмет “Золотая руда”"]],["Инвентарь",["Работает кнопка “Выкинуть всё” и “Съесть”(Пока что нет предмета который можно съесть))"]],"Интерфейс (немного изменился)"],
}

var code = "<table>"


var version = document.location.search.slice(9)

if (version != "") {
    ver()
}else{
    
}

if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    versions.href = "css\versionPC.css"
}


function ver(){
    
    version = "0.0.3"
    
        
    parse(infoVersion[version],t=true)
}

function parse(item,t=false) {
    
    for (var i = 0; i < item.length; i++) {
        code += "<ul>"
        
        console.log(item[i]);
        if (typeof(item[i])=="string") {
            code += `<li>${item[i]}</li>`
        } else if (typeof(item[i])=="object") {
            code += `<li>${item[i][0]}</li>`
            parse(item[i][1])
        }
        code += "</ul>"
        
        
    }
    if (t) {
        console.log(code);
        main.innerHTML = code
    }
    
}





function openVers(vers){
    document.location.href += "?version="+vers
}