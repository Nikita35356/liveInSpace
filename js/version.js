var infoVersion = {
    "0.0.2":["Система строительства(Переделано, на данный момент не доступно для игрока)","Железная руда","Статистика при наведении на строение","Лог"],
    "0.0.3":[["Золото",["Спавн","Предмет “Золотая руда”"]],["Инвентарь",["Работает кнопка “Выкинуть всё” и “Съесть”(Пока что нет предмета который можно съесть))"]],"Интерфейс (немного изменился)"],
    "0.0.4":[["Главное меню",["Кнопка играть","Кнопка выход"]],"Система модов"],
    "0.0.5":["Теперь можно скачивать моды!(их не много))"],
    "0.0.6":[["Моды",["Теперь моды скачиваются нормально(раньше не было видно т. к. они были одинаковы)","Дополнен функционал(смотреть на <a href=\"modsWiki.html\">вики)</a>"]],"Чуть-чуть изминился интерфейс","Теперь мир можно сохранить (ресурсы нет ещё))"],
    "0.0.7":[["Интерфейс",["В главном меню есть новости","И в самой игре изменился интерфейс"]],"Начата разработка приложения для создания мода",["Моды",["Теперь есть ui файлы","Вики для создания модов больше не будет;)"]]]
}



// if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     Style.href = "css/versionPC.css"
// }

var version = document.location.search.slice(9)

var code = ''

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

    return code
    
}

function loadVer() {
    var codes = ""
    for (var i in infoVersion) {
        codes += `<div class="version" onclick="popup('${i}')"><img class="img" src="sprites/${i}.png" alt="" /><div class=names>${i}</div></div>`
        
    }

    versions.innerHTML = codes

}

function popup(versi) {
    console.log(5);
    code = `<h2>В ${versi} добавили:</h2>`
    parse(infoVersion[versi],t=true)
    code += `<div class=g><a class="down" href="https://nikita35356.github.io/versionLiveInSpace/${versi}.zip">Скачать</a></div>`

    document.getElementsByClassName("c")[0].innerHTML = code
    code = ""
    document.getElementsByClassName("all")[0].attributes.active.value = "true"
}
