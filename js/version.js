var infoVersion = {
    "0.0.2":["Система строительства(Переделано, на данный момент не доступно для игрока)","Железная руда","Статистика при наведении на строение","Лог"],
    "0.0.3":[["Золото",["Спавн","Предмет “Золотая руда”"]],["Инвентарь",["Работает кнопка “Выкинуть всё” и “Съесть”(Пока что нет предмета который можно съесть))"]],"Интерфейс (немного изменился)"],
    "0.0.4":[["Главное меню",["Кнопка играть","Кнопка выход"]],"Система модов"],
    "0.0.5":["Теперь можно скачивать моды!(их не много))"]
}



if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    Style.href = "css/versionPC.css"
}

var version = document.location.search.slice(9)

var code = `<h2>В ${version} добавили:</h2>`

if (version != "") {
    ver()
}else{
    loadVer()
}




function ver(){
    
    Style.href = "css/version.css"
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


function loadVer(){
    var codes = ""
    var g = 0
    for(var i in infoVersion){
        g++
        codes += `<div class="vers" onclick="openVers('${i}')"><img class="img" src="sprites/${i}.png" alt="" /><div class=names>${i}</div></div>`
        if(g == 3){
            codes += "</div>"
            g = 0
        }
    }
    var o = "</div><div id='tt'>"
    if (g == 0){
        o = ""
    }
    main.innerHTML = codes + "</div>"
}


function openVers(vers){
    document.location.href += "?version="+vers
}
